---
title: "Listas, Animaciones y Gestos en React Native"
description: "Domina interfaces dinámicas de alto rendimiento con FlatList, FlashList, Reanimated 3 y Gesture Handler v2. Aprende optimizaciones, animaciones a 60 FPS y gestos nativos."
author: "rosinni"
tags: ["React Native","Performance","Animations","Gestures","FlatList","Reanimated","Gesture Handler","TypeScript"]
---

La diferencia entre una aplicación móvil que se siente nativa y una que parece web envuelta en un contenedor está en los detalles, listas que se deslizan suavemente sin tartamudeos, animaciones que responden instantáneamente a los toques del usuario, y gestos que se sienten naturales como en Instagram o Twitter. En React Native, lograr este nivel de pulimiento requiere entender cómo funciona el renderizado bajo el capó y usar las herramientas correctas.

El problema fundamental es que JavaScript corre en un thread separado del UI thread nativo. Cuando haces scroll en una lista, si el JavaScript thread está ocupado calculando qué items mostrar o actualizando estados, la interfaz se congela. Cuando animas un elemento con `Animated` tradicional, cada frame necesita comunicarse entre threads a través del bridge, causando drops de frames. Y cuando el usuario arrastra algo con `PanResponder`, la latencia entre el gesto y la respuesta visual es perceptible.


## Setup Inicial

Antes de sumergirnos en el código, necesitamos configurar tres librerías fundamentales que transformarán tu app. Cada una resuelve un problema específico de performance y experiencia de usuario.

### Instalación Base

```bash
npm install react-native-reanimated react-native-gesture-handler @shopify/flash-list

cd ios && pod install && cd ..
```

Una vez instaladas, necesitas configurarlas correctamente. A diferencia de librerías JavaScript puras, estas trabajan directamente con código nativo y requieren modificaciones en la configuración del proyecto.

### Configurando Reanimated: Animaciones en el UI Thread

### Antigua arquitectura

Si estas usando la antigua Arquitectura de React (), Reanimated necesitará un plugin de Babel que transforma tu código JavaScript en worklets, funciones que pueden ejecutarse directamente en el UI thread nativo sin pasar por el bridge. Esto es lo que permite animaciones fluidas incluso cuando el JavaScript thread está ocupado.

Modifica tu `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Debe ser el último plugin siempre
  ],
};
```

Es crucial que este plugin esté al final porque necesita procesar el código después de todas las demás transformaciones. Si lo colocas antes de otros plugins, las animaciones no funcionarán correctamente.

### Nueva arquitectura

Si estas usando la nueva arquitectura, debes instalar la siguiente dependencia
```bash
npm install react-native-worklets
```

Luego, modifica tu `babel.config.js`:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-worklets/plugin', // Debe ser el último plugin siempre
  ],
};

Despues de modificar babel.config.js debes reiniciar tu servidor de desarrollo y asegurar de resetear cache
```bash
  npx react-native start --reset-cache
```

### Configurando Gesture Handler: Toques Nativos

Gesture Handler intercepta eventos de toque antes que React Native los procese, permitiendo respuestas instantáneas. Para que funcione, tu árbol de componentes debe estar envuelto en un contexto especial.

En `App.tsx`:

```typescript
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Tu aplicación aquí */}
    </GestureHandlerRootView>
  );
}
```

Este componente configura el sistema de gestos nativo para toda tu app. Sin él, los gestos simplemente no funcionarán.

Para Android, también necesitas modificar `MainActivity.java` (o `.kt` si usas Kotlin):

```java
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

@Override
protected ReactActivityDelegate createReactActivityDelegate() {
  return new DefaultReactActivityDelegate(
    this,
    getMainComponentName(),
    DefaultNewArchitectureEntryPoint.getFabricEnabled()
  );
}
```

Después de estos cambios, es fundamental hacer un rebuild completo de tu app. Los cambios en código nativo no se reflejan con hot reload.

## Listas de Alto Rendimiento

El componente `FlatList` de React Native parece simple, pero cuando lo usas con configuración default en listas grandes, verás lag, scroll entrecortado y consumo excesivo de memoria. El problema es que FlatList intenta ser inteligente midiendo dinámicamente el tamaño de cada item, lo cual es costoso. Necesitamos darle información explícita para que deje de adivinar.

### getItemLayout: El Secreto del Scroll Instantáneo

Imagina una lista de 10,000 contactos. Sin `getItemLayout`, cuando el usuario hace scroll rápido al final, FlatList necesita calcular la posición exacta midiendo mentalmente cada uno de los items previos. Es como tratar de encontrar la página 500 de un libro sin números de página. Con `getItemLayout`, le das a FlatList una fórmula matemática simple para calcular cualquier posición instantáneamente.

```typescript
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const ITEM_HEIGHT = 80;
const SEPARATOR_HEIGHT = 1;

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const renderItem = ({ item }: { item: Contact }) => (
    <ContactCard contact={item} />
  );

  const getItemLayout = (
    data: Contact[] | null | undefined,
    index: number
  ) => ({
    length: ITEM_HEIGHT,
    offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
    index,
  });

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      keyExtractor={item => item.id}
    />
  );
};
```

El `offset` es la posición Y donde comienza cada item. Si cada item mide 80px y hay un separador de 1px, el item 0 está en posición 0, el item 1 en posición 81, el item 2 en posición 162, y así sucesivamente. Esta simple multiplicación evita que FlatList tenga que renderizar y medir items fuera de pantalla para calcular posiciones. El resultado es scroll instantáneo incluso con decenas de miles de items.

Por supuesto, esto solo funciona si tus items tienen altura fija o predecible. Si cada item tiene altura variable (como posts con texto de longitud diferente), no puedes usar `getItemLayout` y necesitarás otras optimizaciones.

### windowSize: Balanceando Memoria y Suavidad

Por default, FlatList mantiene renderizados 21 "pantallas" de items: 10 hacia arriba, la actual, y 10 hacia abajo. Esto consume mucha memoria innecesariamente. El truco está en encontrar el balance perfecto donde la lista se siente fluida pero no cargas datos que el usuario probablemente nunca verá.

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => (
  <FlatList
    data={products}
    renderItem={({ item }) => <ProductCard product={item} />}
    windowSize={5}
    maxToRenderPerBatch={10}
    updateCellsBatchingPeriod={50}
    initialNumToRender={10}
  />
);
```

El `windowSize` de 5 significa que mantenemos 2 pantallas arriba, la pantalla actual, y 2 pantallas abajo. Esto reduce el uso de memoria drásticamente sin sacrificar la experiencia. El `maxToRenderPerBatch` controla cuántos items se procesan por frame durante el scroll, un número bajo (como 10) previene que el JavaScript thread se sature. El `updateCellsBatchingPeriod` de 50ms establece la frecuencia de actualización del batch, dándole al thread tiempo para respirar entre renders. Finalmente, `initialNumToRender` determina cuántos items mostrar inmediatamente en el mount inicial, evitando la temida pantalla en blanco mientras se cargan datos.

### removeClippedSubviews: Liberación Agresiva en Android

Esta es una optimización específica de Android que literalmente remueve las vistas nativas que están fuera de pantalla del árbol de vistas. En iOS, el sistema ya hace esto automáticamente, pero en Android necesitas activarlo explícitamente.

```typescript
interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
}

const MESSAGE_HEIGHT = 60;

const ChatMessages: React.FC<{ messages: Message[] }> = ({ messages }) => (
  <FlatList
    data={messages}
    renderItem={({ item }) => <MessageBubble message={item} />}
    removeClippedSubviews={Platform.OS === 'android'}
    windowSize={7}
    getItemLayout={(data, index) => ({
      length: MESSAGE_HEIGHT,
      offset: MESSAGE_HEIGHT * index,
      index,
    })}
  />
);
```

La advertencia importante es que `removeClippedSubviews` puede causar bugs visuales si tus items tienen layouts complejos con elementos posicionados de forma absoluta o animaciones. Pruébalo extensivamente antes de dejarlo en producción.

### FlashList: Cuando FlatList No Es Suficiente

Shopify construyó FlashList después de enfrentarse a problemas de performance en su app con miles de productos. La diferencia fundamental está en cómo recicla las vistas. Mientras FlatList destruye y recrea componentes constantemente, FlashList reutiliza agresivamente los componentes existentes, solo cambiando sus props. Es como tener actores que cambian de vestuario en lugar de contratar actores nuevos para cada escena.

```typescript
import { FlashList } from "@shopify/flash-list";

interface InventoryItem {
  sku: string;
  name: string;
  stock: number;
  warehouse: string;
}

const InventoryList: React.FC<{ items: InventoryItem[] }> = ({ items }) => (
  <FlashList
    data={items}
    renderItem={({ item }) => <InventoryCard item={item} />}
    estimatedItemSize={120}
    keyExtractor={item => item.sku}
  />
);
```

El `estimatedItemSize` es crucial para que FlashList calcule cuántos items preparar. No necesita ser exacto, pero cuanto más cercano al promedio real, mejor será la performance. FlashList funciona especialmente bien con listas heterogéneas donde los items tienen alturas variables, algo donde FlatList tradicionalmente sufre.

La pregunta es cuándo usar FlashList sobre FlatList. Si tu lista tiene más de 100 items, especialmente si tienen alturas variables o imágenes, FlashList probablemente te dará mejor performance. El único trade-off es que agregas una dependencia extra a tu proyecto.

## Reanimated 3: Animaciones Verdaderamente Nativas

El problema con las animaciones tradicionales en React Native es que cada frame necesita comunicación entre el JavaScript thread y el UI thread. Si tu JavaScript está ocupado procesando algo, la animación se congela. Reanimated 3 resuelve esto ejecutando las animaciones completamente en el UI thread nativo usando "worklets", funciones JavaScript especiales que se serializan y envían al lado nativo una sola vez.

### Los Fundamentos: Shared Values y Animated Styles

Un `SharedValue` es un valor que vive simultáneamente en ambos threads. Cuando lo modificas desde JavaScript, el cambio se propaga automáticamente al UI thread sin pasar por el bridge. Es la pieza fundamental de cualquier animación performante.

```typescript
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const PulsingHeart: React.FC = () => {
  const scale = useSharedValue(1);
  const [liked, setLiked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPress = () => {
    scale.value = withSpring(liked ? 1 : 1.3, {
      damping: 10,
      stiffness: 100,
    });
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={animatedStyle}>
        <Heart color={liked ? 'red' : 'gray'} />
      </Animated.View>
    </TouchableOpacity>
  );
};
```

El `useAnimatedStyle` es un worklet, nota cómo la función dentro accede a `scale.value`. Este código no corre en JavaScript, corre en el UI thread nativo. El `withSpring` también es un worklet que calcula la física del spring directamente en el lado nativo. El resultado es una animación que corre a 60 FPS incluso si el JavaScript thread está completamente bloqueado procesando datos.

Los parámetros de `withSpring` controlan la física de la animación. Un `damping` bajo (como 10) crea más rebote, mientras que un `stiffness` alto (como 100) hace la animación más "tensa" y rápida. Experimenta con estos valores hasta encontrar el feeling que buscas.

### Layout Animations: Magia Automática

Las layout animations son quizás la feature más impresionante de Reanimated 3. En lugar de calcular manualmente las posiciones inicial y final de un elemento, simplemente declaras qué tipo de animación quieres y Reanimated se encarga del resto. Es especialmente poderoso para listas donde items aparecen y desaparecen constantemente.

```typescript
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
  Layout,
} from 'react-native-reanimated';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => (
  <View>
    {tasks.map((task, index) => (
      <Animated.View
        key={task.id}
        entering={SlideInRight.delay(index * 50).duration(300)}
        exiting={SlideOutLeft.duration(200)}
        layout={Layout.springify()}
      >
        <TaskCard task={task} />
      </Animated.View>
    ))}
  </View>
);
```

Cuando un nuevo task aparece en el array, automáticamente se desliza desde la derecha con un pequeño delay basado en su índice, creando un efecto de cascada. Cuando se elimina, sale hacia la izquierda. Y lo más impresionante: cuando otros items cambian de posición (porque uno se eliminó), el `layout={Layout.springify()}` anima automáticamente el reposicionamiento con física de spring. Todo esto sin una sola línea de cálculo manual de coordenadas.

El `.delay()` y `.duration()` son métodos encadenables que personalizan la animación. Puedes combinar múltiples modificadores para crear efectos complejos de forma declarativa.

### Interpolaciones: De Scroll a Paralaje

Las interpolaciones convierten un rango de valores en otro rango de valores de forma fluida. Son perfectas para crear efectos donde múltiples propiedades visuales cambian en sincronía basadas en una sola fuente de verdad, como la posición del scroll.

```typescript
import { 
  interpolate, 
  Extrapolate, 
  useAnimatedScrollHandler 
} from 'react-native-reanimated';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 100;

const ParallaxHeader: React.FC = () => {
  const scrollY = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 200],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      [0, 100, 200],
      [1, 0.7, 0],
      Extrapolate.CLAMP
    );

    return { height, opacity };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <>
      <Animated.View style={[styles.header, headerStyle]}>
        <Image source={headerImage} style={styles.headerImage} />
      </Animated.View>
      
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Content />
      </Animated.ScrollView>
    </>
  );
};
```

Aquí la magia está en la interpolación. Cuando el `scrollY` va de 0 a 200, la altura del header va de 300 a 100 píxeles de forma proporcional. Simultáneamente, la opacidad va de completamente visible (1) a invisible (0), pero con un punto intermedio en scrollY=100 donde tiene opacidad 0.7. El `Extrapolate.CLAMP` asegura que los valores no se salgan de los rangos definidos si el usuario hace over-scroll.

El `scrollEventThrottle={16}` es importante porque determina cada cuántos milisegundos se reportan eventos de scroll. 16ms equivale a aproximadamente 60 FPS, el balance perfecto entre precisión y performance.

## Gesture Handler v2: Toques Que Se Sienten Reales

Los gestos en aplicaciones móviles deben sentirse instantáneos y naturales. El problema con `PanResponder` de React Native es que procesa eventos en el JavaScript thread, introduciendo latencia perceptible. Gesture Handler v2 procesa toques directamente en el thread nativo y solo notifica a JavaScript cuando es absolutamente necesario.

### Pan Gesture: La Base del Arrastre

Un gesto de pan (arrastre) parece simple pero involucra varios estados: inicio del toque, movimiento continuo, y liberación con potencial inercia. Gesture Handler maneja toda esta complejidad de forma elegante.

```typescript
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';

const DraggableCard: React.FC = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd((event) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [-200, 200],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [-400, 400],
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text>Drag me!</Text>
      </Animated.View>
    </GestureDetector>
  );
};
```

El patrón clave aquí es el uso de `context` para guardar la posición donde comenzó el arrastre. Sin esto, cada vez que sueltas y vuelves a arrastrar, el elemento saltaría a su posición original. El `onUpdate` calcula la nueva posición sumando cuánto se movió el dedo (`event.translationX`) a donde estaba el elemento cuando empezó el gesto (`context.value.x`).

La física de inercia viene con `withDecay` en el `onEnd`. Toma la velocidad del dedo al soltar y continúa el movimiento desacelerando naturalmente, exactamente como en apps nativas. El `clamp` previene que el elemento se salga de límites definidos, en este caso manteniéndolo dentro de un rango de -200 a 200 píxeles horizontalmente y -400 a 400 verticalmente.

### Swipe Actions: El Patrón de Email

Las swipe actions son ese patrón donde deslizas un elemento de lista para revelar opciones como eliminar o archivar. Es omnipresente en apps de email, to-do lists y redes sociales porque es extremadamente eficiente para acciones rápidas.

```typescript
import { runOnJS } from 'react-native-reanimated';

interface SwipeableRowProps {
  item: { id: string; title: string };
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}

const SwipeableRow: React.FC<SwipeableRowProps> = ({ 
  item, 
  onDelete, 
  onArchive 
}) => {
  const translateX = useSharedValue(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate((event) => {
      translateX.value = Math.max(-150, Math.min(150, event.translationX));
    })
    .onEnd(() => {
      const shouldDelete = translateX.value < -100;
      const shouldArchive = translateX.value > 100;

      if (shouldDelete) {
        translateX.value = withSpring(-300, {}, () => {
          runOnJS(setIsRemoving)(true);
          runOnJS(onDelete)(item.id);
        });
      } else if (shouldArchive) {
        translateX.value = withSpring(300, {}, () => {
          runOnJS(onArchive)(item.id);
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  if (isRemoving) return null;

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.row, animatedStyle]}>
          <Text>{item.title}</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
```

El `.activeOffsetX([-10, 10])` es un detalle importante: previene que el swipe se active con movimientos verticales accidentales. El gesto solo se "activa" cuando el usuario se mueve al menos 10 píxeles horizontalmente. Esto permite que el scroll vertical de la lista funcione sin conflicto.

El `Math.max(-150, Math.min(150, ...))` limita el swipe para que no puedas arrastrar infinitamente. Y la lógica en `onEnd` determina la intención del usuario: si pasó el umbral de -100 píxeles, queremos eliminar; si pasó +100, archivar; de lo contrario, volver a la posición original.

El `runOnJS` es crucial porque estamos en un worklet (UI thread) pero necesitamos ejecutar funciones de JavaScript como `setIsRemoving` y `onDelete`. Este helper marca explícitamente que esas llamadas deben hacerse en el JavaScript thread.

### Long Press: Menús Contextuales

Los long press son perfectos para revelar acciones secundarias sin saturar la UI con botones. El patrón común es reducir la escala y opacidad del elemento para dar feedback visual de que el gesto fue reconocido.

```typescript
interface LongPressCardProps {
  item: { id: string; title: string };
  onLongPress: (item: any) => void;
}

const LongPressCard: React.FC<LongPressCardProps> = ({ item, onLongPress }) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const longPressGesture = Gesture.LongPress()
    .minDuration(400)
    .onStart(() => {
      scale.value = withTiming(0.95, { duration: 200 });
      opacity.value = withTiming(0.7, { duration: 200 });
    })
    .onEnd(() => {
      scale.value = withSpring(1);
      opacity.value = withSpring(1);
      runOnJS(onLongPress)(item);
    })
    .onFinalize(() => {
      scale.value = withSpring(1);
      opacity.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text>{item.title}</Text>
      </Animated.View>
    </GestureDetector>
  );
};
```

El `.minDuration(400)` define que el usuario debe mantener presionado por al menos 400ms antes que se active el gesto. Esto previene activaciones accidentales. El `onStart` se ejecuta cuando el long press es reconocido (después de los 400ms), reduciendo visualmente el elemento para dar feedback. El `onEnd` se ejecuta cuando el usuario suelta, momento en el cual restauramos la apariencia y ejecutamos la acción. El `onFinalize` es un safety net que se ejecuta sin importar cómo terminó el gesto (cancelación, éxito, error), asegurando que el elemento siempre vuelva a su estado normal.

### Composición de Gestos: Pinch + Pan Simultáneos

Una de las capacidades más poderosas de Gesture Handler v2 es componer múltiples gestos. Puedes definir si se ejecutan simultáneamente, exclusivamente (solo uno a la vez), o en secuencia.

```typescript
const ZoomablePannable: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedScale = useSharedValue(1);
  const savedTranslate = useSharedValue({ x: 0, y: 0 });

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = savedScale.value * event.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = savedTranslate.value.x + event.translationX;
      translateY.value = savedTranslate.value.y + event.translationY;
    })
    .onEnd(() => {
      savedTranslate.value = {
        x: translateX.value,
        y: translateY.value,
      };
    });

  const composed = Gesture.Simultaneous(pinchGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={animatedStyle}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
```

El `Gesture.Simultaneous` permite que ambos gestos ocurran al mismo tiempo. Puedes hacer pinch para zoom mientras arrastras la imagen, exactamente como en la app de Fotos de iOS. Si usaras `Gesture.Exclusive`, solo uno de los gestos podría estar activo a la vez, obligando al usuario a terminar uno antes de empezar el otro.

El patrón de guardar valores en `savedScale` y `savedTranslate` asegura que cada gesto continúe desde donde el anterior terminó, en lugar de reiniciar a valores por default.

## Integrando Todo: Un Feed Moderno

Ahora que entendemos cada pieza individualmente, veamos cómo se integran en un componente real de producción. Un feed animado con swipe actions y double-tap para like combina FlashList para performance, Reanimated para animaciones fluidas, y Gesture Handler para interacciones naturales.

```typescript
import { FlashList } from "@shopify/flash-list";
import { withSequence } from 'react-native-reanimated';

interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

const AnimatedFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const renderItem = useCallback(
    ({ item, index }: { item: Post; index: number }) => (
      <Animated.View
        entering={FadeIn.delay(index * 50)}
        exiting={FadeOut}
      >
        <SwipeablePostCard
          post={item}
          onDelete={(id) => setPosts(p => p.filter(post => post.id !== id))}
          onLike={(id) => console.log('Liked:', id)}
        />
      </Animated.View>
    ),
    []
  );

  return (
    <FlashList
      data={posts}
      renderItem={renderItem}
      estimatedItemSize={200}
      keyExtractor={item => item.id}
    />
  );
};
```

Cada post entra con un fade escalonado basado en su índice, creando ese efecto de cascada que se ve en apps premium. Cuando se elimina, sale con fade out. FlashList se encarga de reciclar eficientemente los componentes mientras el usuario hace scroll.

```typescript
interface SwipeablePostCardProps {
  post: Post;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
}

const SwipeablePostCard: React.FC<SwipeablePostCardProps> = ({
  post,
  onDelete,
  onLike,
}) => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const swipeGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate((event) => {
      translateX.value = Math.min(0, event.translationX);
    })
    .onEnd(() => {
      if (translateX.value < -100) {
        translateX.value = withSpring(-400, {}, () => {
          runOnJS(onDelete)(post.id);
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withSequence(
        withSpring(1.2),
        withSpring(1)
      );
      runOnJS(onLike)(post.id);
    });

  const composed = Gesture.Exclusive(swipeGesture, doubleTap);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[styles.postCard, animatedStyle]}>
        <PostContent post={post} />
      </Animated.View>
    </GestureDetector>
  );
};
```

Aquí vemos la composición de gestos en acción. El `Gesture.Exclusive` asegura que el swipe y el double-tap no entren en conflicto. Si detecta un double-tap, el swipe no se activa, y viceversa. El `withSequence` en el double-tap crea ese efecto satisfactorio de "pop" donde el elemento crece brevemente y luego vuelve a su tamaño, dando feedback inmediato de la acción.

La restricción `Math.min(0, event.translationX)` asegura que solo puedas hacer swipe hacia la izquierda (valores negativos), previniendo swipes hacia la derecha que podrían confundir al usuario. Cuando el swipe supera los -100 píxeles, interpretamos que el usuario quiere eliminar el post y lo animamos completamente fuera de pantalla antes de ejecutar la eliminación real.

## Optimizaciones Finales y Best Practices

Ahora que dominas las herramientas, hablemos de los errores comunes que pueden arruinar la performance incluso con las mejores librerías.

### Memoización en Listas

El `renderItem` de FlatList o FlashList se ejecuta cada vez que un item entra en pantalla. Si no usas `useCallback`, React recrea la función en cada render del componente padre, causando que todos los items se re-rendericen innecesariamente.

```typescript
// ❌ Mal: renderItem se recrea en cada render
const BadList: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <FlashList
      data={items}
      renderItem={({ item }) => <ItemCard item={item} />}
      estimatedItemSize={100}
    />
  );
};

// ✅ Bien: renderItem es estable
const GoodList: React.FC<{ items: Item[] }> = ({ items }) => {
  const renderItem = useCallback(
    ({ item }: { item: Item }) => <ItemCard item={item} />,
    []
  );

  return (
    <FlashList
      data={items}
      renderItem={renderItem}
      estimatedItemSize={100}
    />
  );
};
```

Lo mismo aplica para `keyExtractor`, `getItemLayout`, y cualquier otra función que pases a la lista. La memoización con `useCallback` asegura que React puede hacer optimizaciones de reconciliación correctamente.


### Keys Estables en Listas Animadas

Cuando usas layout animations con listas, las keys son absolutamente críticas. React usa las keys para determinar qué elementos son los mismos entre renders. Si tus keys cambian o no son únicas, las animaciones se romperán o los elementos harán cosas extrañas.

```typescript
// ❌ Mal: keys basadas en índice
{items.map((item, index) => (
  <Animated.View key={index} entering={FadeIn}>
    <ItemCard item={item} />
  </Animated.View>
))}

// ✅ Bien: keys únicas y estables
{items.map((item) => (
  <Animated.View key={item.id} entering={FadeIn}>
    <ItemCard item={item} />
  </Animated.View>
))}
```

El problema con índices como keys es que cuando eliminas un elemento, todos los índices posteriores cambian. React piensa que son elementos completamente diferentes y destruye/recrea componentes en lugar de animarlos correctamente.

### Limpieza de Listeners y Valores Compartidos

Los shared values y los gestos mantienen referencias nativas que necesitan limpiarse. En componentes complejos, especialmente aquellos que se montan y desmontan frecuentemente, olvidar la limpieza puede causar memory leaks.

```typescript
const ProperCleanup: React.FC = () => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    return () => {
      // Cancelar animaciones en progreso
      cancelAnimation(translateX);
    };
  }, [translateX]);

  // Resto del componente...
};
```

Aunque Reanimated generalmente maneja la limpieza automáticamente, en casos donde controlas manualmente el ciclo de vida de animaciones (como con `cancelAnimation` o `runOnUI`), la limpieza explícita previene problemas sutiles.


## Conclusión

Crear interfaces móviles que se sientan verdaderamente nativas en React Native requiere entender profundamente cómo funcionan los threads y usar las herramientas correctas para cada problema. FlatList y FlashList resuelven el renderizado eficiente de listas masivas eliminando mediciones innecesarias y reciclando vistas agresivamente. Reanimated 3 lleva las animaciones al UI thread nativo donde pueden correr a 60 FPS independientemente de lo que esté haciendo JavaScript. Gesture Handler v2 procesa toques con latencia casi nula, creando interacciones que se sienten instantáneas.

La clave está en ser intencional con cada optimización. No todas las listas necesitan FlashList ni todas las animaciones necesitan Reanimated. Pero cuando tus usuarios empiezan a notar lag o cuando tu app se siente menos fluida que las alternativas nativas, estas herramientas con TypeScript te dan el control necesario para competir con cualquier experiencia nativa pura. El resultado es una aplicación que no solo funciona bien, sino que se siente premium desde el primer toque.
