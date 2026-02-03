---
title: "Testing y Monitoreo en React Native"
description: "Cómo asegurar calidad y estabilidad en aplicaciones móviles con Jest, React Native Testing Library y logging estructurado"
authors:
  - rosinni
tags: [ "react-native", "testing", "jest", "monitoring", "logging", "mobile-development", "quality-assurance"]
---

Cuando construyes una aplicación móvil, el verdadero reto no es escribir código, **es asegurar que funcione bien hoy, mañana y después de futuras modificaciones**. Sin testing ni monitoreo, ocurre que cada cambio en el código es un riesgo, los bugs llegan a producción sin que te des cuenta, dependes del usuario final para saber si algo falló.

Por otro lado con una estrategia adecuada de pruebas y monitoreo podemos, detectar errores antes de que lleguen al usuario, reducir costos de mantenimiento y soporte, como tambien tomar decisiones informadas con datos reales del funcionamiento de la app.

Testing = prevención
Monitoreo = detección y análisis

Y ambos son complementarios.

## Testing en React Native: ¿Qué significa probar una app?
Probar significa **verificar que el código hace lo que debería hacer**, de manera consistente y sin efectos inesperados. Cuando no hay pruebas automatizadas, la única forma de validar cambios es entrar a la app, navegar, tocar botones y esperar no romper nada.
Esto es costoso, lento y muy poco confiable.

Con testing automatizado:
- Cada vez que haces un cambio, los tests validan que no hayas roto una funcionalidad previa.
- Puedes refactorizar código sin miedo.
- La calidad sube y los tiempos de desarrollo bajan.

### Tipos de testing en React Native
| Tipo de test | Objetivo | Herramienta | Ejemplo de uso |
|--------------|----------|-------------|----------------|
| **Unitario** | Validar lógica pura | Jest | verificar cálculos, validaciones, formateo de datos |
| **De componentes (UI)** | Validar comportamientos de pantalla | React Native Testing Library | verificar que un botón incremente un contador |
| **Integración** | Validar interacción entre módulos | Jest + mocks | validar que un componente llame correctamente a un servicio |

> *Regla clave: los tests deben validar comportamientos, no implementaciones*.

## Ejemplo: Test unitario con Jest
Primero, algo simple: una función que calcula el total de una compra.

```ts
// utils/calculateTotal.ts
export const calculateTotal = (price: number, qty: number) => price * qty;
```

Creemos un test que valide ese comportamiento:

```ts
// __tests__/calculateTotal.test.ts
import { calculateTotal } from "../utils/calculateTotal";

test("calcula correctamente el total", () => {
  expect(calculateTotal(10, 3)).toBe(30);
});
```

Con este test garantizas que si alguien cambia esa función o su comportamiento, serás alertado inmediatamente.


## Ejemplo: Test de un componente con React Native Testing Library
Aquí no probamos *cómo está hecho* el componente, sino *lo que hace* cuando el usuario interactúa.

```tsx
// components/Counter.tsx
import React, { useState } from "react";
import { Button, Text } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text testID="count-label">{count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </>
  );
};
```

Test:

```tsx
// __tests__/Counter.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Counter } from "../components/Counter";

test("incrementa el contador al presionar", () => {
  const { getByText, getByTestId } = render(<Counter />);

  fireEvent.press(getByText("Incrementar"));

  expect(getByTestId("count-label").props.children).toBe(1);
});
```

**Qué estamos validando:**
- que el botón esté visible
- que al presionarlo ocurra un cambio real en la UI
- que ese cambio sea el esperado


## Monitoreo en producción: logging estructurado
Aunque los tests previenen errores, **ningún sistema está libre de fallas en producción**. Por lo tanto, necesitas saber qué pantalla se estaba usando cuando falló, qué acción ejecutó el usuario, qué datos estaban en juego; ahí entra el logging estructurado.

### ❌ Logging tradicional
```js
console.log("User logged in", user);
```
Problemas:
- produce mensajes desordenados
- no permite analizar patrones o eventos
- difícil de filtrar

### ✅ Logging estructurado (recomendado)
```ts
console.log(JSON.stringify({
  event: "USER_LOGIN",
  userId: user.id,
  timestamp: Date.now(),
}));
```
Ventajas:
- cada log tiene estructura y contexto
- fácil de filtrar por tipo de evento

### Wrapper para logging
```ts
// utils/logger.ts
export const logEvent = (event: string, payload = {}) => {
  console.log(JSON.stringify({ event, payload, timestamp: Date.now() }));
};
```

Uso:
```ts
logEvent("API_REQUEST", { endpoint: "/products" });
```

Este patrón permite centralizar la responsabilidad del logging.


## Buenas prácticas

Una de las dudas más frecuentes al comenzar a testear en React Native es: **“¿Debo testear todo mi código?”**. La respuesta es no, testear no significa replicar cada componente o línea de código, significa proteger las partes del sistema que, si fallan, afectan directamente al usuario o al negocio.

A continuación se desarrollan cuatro buenas prácticas esenciales aplicadas específicamente a proyectos con React Native CLI.

1. **Testear la lógica que pueda romper la app**: En React Native, la mayor parte de las decisiones importantes no se toman en los componentes, sino en:

    - funciones auxiliares (utils/)
    - hooks de negocio (hooks/)
    - servicios y controladores (services/)

Esa lógica suele ser independiente de la UI, lo que facilita testearla sin necesidad del renderizado de una pantalla.

```tsx
// utils/formatCurrency.ts
export const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
```

Test unitario:

```tsx
test("formatea un número a moneda", () => {
  expect(formatCurrency(10)).toBe("$10.00");
});
```

**¿Por qué importa?** Si alguien modifica esta función en el futuro (por ejemplo, para soportar otra moneda), un test evitará que introduzca un error sin querer.

2. **Empezar por casos críticos del flujo de usuario**: No empieces por componentes simples como botones o estilos.Comienza por lo que afecta objetivos de negocio o bloquea el uso de la app.

Casos típicos en una app móvil:

| Caso crítico              | Riesgo si falla                  | Qué testear                                      |
|--------------------------|----------------------------------|--------------------------------------------------|
| Login                    | El usuario no puede usar la app | Validación de formularios, llamadas al backend   |
| Procesos de compra/pago  | Pérdidas económicas              | Cálculos, totales, métodos de pago               |
| Formularios con reglas   | Mal funcionamiento del flujo     | Mensajes de error y estados del botón            |

Esto te da **cobertura del 80% del riesgo con 20% de esfuerzo.**


3. **Usar *logging estructurado* para monitorear en producción**: En desarrollo (`__DEV__`) vemos la consola, pero en producción la app corre dentro de un dispositivo al que no tenemos acceso. Por eso, los logs deben ser **estructurados, consistentes y con contexto.**

#### ❌ Ejemplo incorrecto:
```js
console.log("Error en el login");
```

#### Ejemplo recomendado (JSON estructurado):

```tsx
logEvent("LOGIN_FAILED", {
  email,
  reason: error.message,
});
```

Este formato permite:

- enviar logs a servicios como Sentry, Datadog o Firebase Crashlytics,
- filtrar por evento,
- entender qué hizo el usuario cuando ocurrió el error.

Implementación mínima en React Native CLI:

```tsx
// utils/logger.ts
export const logEvent = (event: string, payload = {}) => {
  const log = { event, payload, timestamp: Date.now() };

  if (__DEV__) {
    console.log(JSON.stringify(log, null, 2));
  } else {
    // producción → enviar a un proveedor externo
    // Sentry.captureMessage(JSON.stringify(log));
  }
};
```

4. **Evita usar `console.log` sin estructura**


En React Native CLI, la calidad de la app no solo depende de lo bien que esté desarrollada, sino de lo bien que puedas saber cuándo algo deja de funcionar, el testing asegura que tu app funciona como debe y el monitoreo asegura que sabrás cuando deje de hacerlo. Una app profesional requiere ambos.
