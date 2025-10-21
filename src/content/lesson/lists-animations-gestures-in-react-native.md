---
title: "Lists, Animations & Gestures in React Native"
description: "Master high-performance dynamic interfaces with FlatList, FlashList, Reanimated 3, and Gesture Handler v2. Learn optimizations, 60 FPS animations, and native gestures."
author: "rosinni"
tags: ["React Native","Performance","Animations","Gestures","FlatList","Reanimated","Gesture Handler","TypeScript"]
---

The difference between a mobile app that feels native and one that seems like a web app wrapped in a container lies in the details: lists that scroll smoothly without stuttering, animations that respond instantly to user touches, and gestures that feel natural like in Instagram or Twitter. In React Native, achieving this level of polish requires understanding how rendering works under the hood and using the right tools.

The fundamental problem is that JavaScript runs in a separate thread from the native UI thread. When you scroll through a list, if the JavaScript thread is busy calculating which items to show or updating states, the interface freezes. When you animate an element with traditional `Animated`, each frame needs to communicate between threads through the bridge, causing frame drops. And when the user drags something with `PanResponder`, the latency between the gesture and visual response is noticeable.

## Initial Setup

Before diving into the code, we need to configure three fundamental libraries that will transform your app. Each one solves a specific performance and user experience problem.

### Base Installation

```bash
npm install react-native-reanimated react-native-gesture-handler @shopify/flash-list

cd ios && pod install && cd ..
```

Once installed, you need to configure them correctly. Unlike pure JavaScript libraries, these work directly with native code and require modifications to the project configuration.

### Configuring Reanimated: Animations in the UI Thread

Reanimated needs a Babel plugin that transforms your JavaScript code into worklets, functions that can run directly in the native UI thread without going through the bridge. This is what enables smooth animations even when the JavaScript thread is busy.

Modify your `babel.config.js`:

```javascript
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin', // Must always be the last plugin
    ],
};
```

It's crucial that this plugin is at the end because it needs to process the code after all other transformations. If you place it before other plugins, animations won't work correctly.

### Configuring Gesture Handler: Native Touches

Gesture Handler intercepts touch events before React Native processes them, enabling instant responses. For it to work, your component tree must be wrapped in a special context.

In `App.tsx`:

```typescript
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* Your app here */}
        </GestureHandlerRootView>
    );
}
```

This component configures the native gesture system for your entire app. Without it, gestures simply won't work.

For Android, you also need to modify `MainActivity.java` (or `.kt` if using Kotlin):

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

After these changes, it's essential to do a complete rebuild of your app. Native code changes aren't reflected with hot reload.

## High-Performance Lists

React Native's `FlatList` component seems simple, but when you use it with default configuration in large lists, you'll see lag, choppy scrolling, and excessive memory consumption. The problem is that FlatList tries to be smart by dynamically measuring the size of each item, which is expensive. We need to give it explicit information so it stops guessing.

### getItemLayout: The Secret of Instant Scroll

Imagine a list of 10,000 contacts. Without `getItemLayout`, when the user scrolls quickly to the end, FlatList needs to calculate the exact position by mentally measuring each of the previous items. It's like trying to find page 500 of a book without page numbers. With `getItemLayout`, you give FlatList a simple mathematical formula to calculate any position instantly.

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

The `offset` is the Y position where each item begins. If each item measures 80px and has a 1px separator, item 0 is at position 0, item 1 at position 81, item 2 at position 162, and so on. This simple multiplication prevents FlatList from having to render and measure off-screen items to calculate positions. The result is instant scrolling even with tens of thousands of items.

Of course, this only works if your items have fixed or predictable height. If each item has variable height (like posts with different text lengths), you can't use `getItemLayout` and will need other optimizations.

### windowSize: Balancing Memory and Smoothness

By default, FlatList keeps 21 "screens" of items rendered: 10 above, the current one, and 10 below. This consumes memory unnecessarily. The trick is finding the perfect balance where the list feels fluid but you don't load data the user will probably never see.

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

The `windowSize` of 5 means we keep 2 screens above, the current screen, and 2 screens below. This drastically reduces memory usage without sacrificing experience. `maxToRenderPerBatch` controls how many items are processed per frame during scrolling, a low number (like 10) prevents the JavaScript thread from getting saturated. `updateCellsBatchingPeriod` of 50ms sets the batch update frequency, giving the thread time to breathe between renders. Finally, `initialNumToRender` determines how many items to show immediately on initial mount, avoiding the dreaded blank screen while data loads.

### removeClippedSubviews: Aggressive Release on Android

This is an Android-specific optimization that literally removes native views that are off-screen from the view tree. On iOS, the system already does this automatically, but on Android you need to activate it explicitly.

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

The important warning is that `removeClippedSubviews` can cause visual bugs if your items have complex layouts with absolutely positioned elements or animations. Test it extensively before leaving it in production.

### FlashList: When FlatList Isn't Enough

Shopify built FlashList after facing performance problems in their app with thousands of products. The fundamental difference lies in how it recycles views. While FlatList constantly destroys and recreates components, FlashList aggressively reuses existing components, only changing their props. It's like having actors change costumes instead of hiring new actors for each scene.

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

The `estimatedItemSize` is crucial for FlashList to calculate how many items to prepare. It doesn't need to be exact, but the closer to the real average, the better the performance will be. FlashList works especially well with heterogeneous lists where items have variable heights, something where FlatList traditionally struggles.

The question is when to use FlashList over FlatList. If your list has more than 100 items, especially if they have variable heights or images, FlashList will probably give you better performance. The only trade-off is that you add an extra dependency to your project.

## Reanimated 3: Truly Native Animations

The problem with traditional animations in React Native is that each frame needs communication between the JavaScript thread and the UI thread. If your JavaScript is busy processing something, the animation freezes. Reanimated 3 solves this by running animations completely in the native UI thread using "worklets", special JavaScript functions that are serialized and sent to the native side once.

### The Fundamentals: Shared Values and Animated Styles

A `SharedValue` is a value that lives simultaneously in both threads. When you modify it from JavaScript, the change automatically propagates to the UI thread without going through the bridge. It's the fundamental piece of any performant animation.

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

The `useAnimatedStyle` is a worklet, notice how the function inside accesses `scale.value`. This code doesn't run in JavaScript, it runs in the native UI thread. The `withSpring` is also a worklet that calculates spring physics directly on the native side. The result is an animation that runs at 60 FPS even if the JavaScript thread is completely blocked processing data.

The `withSpring` parameters control the animation physics. Low `damping` (like 10) creates more bounce, while high `stiffness` (like 100) makes the animation more "tense" and fast. Experiment with these values until you find the feeling you're looking for.

### Layout Animations: Automatic Magic

Layout animations are perhaps the most impressive feature of Reanimated 3. Instead of manually calculating the initial and final positions of an element, you simply declare what type of animation you want and Reanimated handles the rest. It's especially powerful for lists where items constantly appear and disappear.

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

When a new task appears in the array, it automatically slides in from the right with a small delay based on its index, creating a cascade effect. When removed, it exits to the left. And most impressively: when other items change position (because one was eliminated), the `layout={Layout.springify()}` automatically animates the repositioning with spring physics. All this without a single line of manual coordinate calculation.

The `.delay()` and `.duration()` are chainable methods that customize the animation. You can combine multiple modifiers to create complex effects declaratively.

### Interpolations: From Scroll to Parallax

Interpolations convert one range of values to another range of values smoothly. They're perfect for creating effects where multiple visual properties change in sync based on a single source of truth, like scroll position.

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

Here the magic is in the interpolation. When `scrollY` goes from 0 to 200, the header height goes from 300 to 100 pixels proportionally. Simultaneously, opacity goes from completely visible (1) to invisible (0), but with an intermediate point at scrollY=100 where it has 0.7 opacity. `Extrapolate.CLAMP` ensures values don't go outside the defined ranges if the user over-scrolls.

The `scrollEventThrottle={16}` is important because it determines how many milliseconds between scroll event reports. 16ms equals approximately 60 FPS, the perfect balance between precision and performance.

## Gesture Handler v2: Touches That Feel Real

Gestures in mobile applications must feel instant and natural. The problem with React Native's `PanResponder` is that it processes events in the JavaScript thread, introducing noticeable latency. Gesture Handler v2 processes touches directly in the native thread and only notifies JavaScript when absolutely necessary.

### Pan Gesture: The Foundation of Dragging

A pan (drag) gesture seems simple but involves several states: touch start, continuous movement, and release with potential inertia. Gesture Handler handles all this complexity elegantly.

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

The key pattern here is using `context` to save the position where dragging started. Without this, every time you release and drag again, the element would jump to its original position. The `onUpdate` calculates the new position by adding how much the finger moved (`event.translationX`) to where the element was when the gesture started (`context.value.x`).

The inertia physics comes with `withDecay` in `onEnd`. It takes the finger velocity when released and continues the movement naturally decelerating, exactly like in native apps. The `clamp` prevents the element from going outside defined bounds, in this case keeping it within a range of -200 to 200 pixels horizontally and -400 to 400 vertically.

### Swipe Actions: The Email Pattern

Swipe actions are that pattern where you swipe a list element to reveal options like delete or archive. It's ubiquitous in email apps, to-do lists, and social networks because it's extremely efficient for quick actions.

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

The `.activeOffsetX([-10, 10])` is an important detail: it prevents the swipe from activating with accidental vertical movements. The gesture only "activates" when the user moves at least 10 pixels horizontally. This allows the list's vertical scroll to work without conflict.

The `Math.max(-150, Math.min(150, ...))` limits the swipe so you can't drag infinitely. And the logic in `onEnd` determines the user's intention: if they passed the -100 pixel threshold, we want to delete; if they passed +100, archive; otherwise, return to original position.

The `runOnJS` is crucial because we're in a worklet (UI thread) but need to execute JavaScript functions like `setIsRemoving` and `onDelete`. This helper explicitly marks that those calls should be made in the JavaScript thread.

### Long Press: Contextual Menus

Long press is perfect for revealing secondary actions without cluttering the UI with buttons. The common pattern is to reduce the element's scale and opacity to give visual feedback that the gesture was recognized.

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

The `.minDuration(400)` defines that the user must hold pressed for at least 400ms before the gesture activates. This prevents accidental activations. The `onStart` executes when the long press is recognized (after 400ms), visually reducing the element to give feedback. The `onEnd` executes when the user releases, at which point we restore the appearance and execute the action. The `onFinalize` is a safety net that executes regardless of how the gesture ended (cancellation, success, error), ensuring the element always returns to its normal state.

### Gesture Composition: Simultaneous Pinch + Pan

One of the most powerful capabilities of Gesture Handler v2 is composing multiple gestures. You can define whether they execute simultaneously, exclusively (only one at a time), or in sequence.

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

The `Gesture.Simultaneous` allows both gestures to occur at the same time. You can pinch to zoom while dragging the image, exactly like in iOS Photos app. If you used `Gesture.Exclusive`, only one gesture could be active at a time, forcing the user to finish one before starting the other.

The pattern of saving values in `savedScale` and `savedTranslate` ensures each gesture continues from where the previous one ended, instead of resetting to default values.

## Integrating Everything: A Modern Feed

Now that we understand each piece individually, let's see how they integrate in a real production component. An animated feed with swipe actions and double-tap to like combines FlashList for performance, Reanimated for smooth animations, and Gesture Handler for natural interactions.

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

Each post enters with a staggered fade based on its index, creating that cascade effect seen in premium apps. When deleted, it exits with fade out. FlashList efficiently handles component recycling while the user scrolls.

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

Here we see gesture composition in action. The `Gesture.Exclusive` ensures that swipe and double-tap don't conflict. If it detects a double-tap, the swipe doesn't activate, and vice versa. The `withSequence` in the double-tap creates that satisfying "pop" effect where the element briefly grows and then returns to size, giving immediate feedback of the action.

The `Math.min(0, event.translationX)` restriction ensures you can only swipe left (negative values), preventing right swipes that could confuse the user. When the swipe exceeds -100 pixels, we interpret that the user wants to delete the post and animate it completely off-screen before executing the actual deletion.

## Final Optimizations and Best Practices

Now that you master the tools, let's talk about common mistakes that can ruin performance even with the best libraries.

### Memoization in Lists

The `renderItem` of FlatList or FlashList executes every time an item enters the screen. If you don't use `useCallback`, React recreates the function on every render of the parent component, causing all items to re-render unnecessarily.

```typescript
// ❌ Bad: renderItem is recreated on every render
const BadList: React.FC<{ items: Item[] }> = ({ items }) => {
    return (
        <FlashList
            data={items}
            renderItem={({ item }) => <ItemCard item={item} />}
            estimatedItemSize={100}
        />
    );
};

// ✅ Good: renderItem is stable
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

The same applies to `keyExtractor`, `getItemLayout`, and any other function you pass to the list. Memoization with `useCallback` ensures React can make reconciliation optimizations correctly.

### Stable Keys in Animated Lists

When using layout animations with lists, keys are absolutely critical. React uses keys to determine which elements are the same between renders. If your keys change or aren't unique, animations will break or elements will do strange things.

```typescript
// ❌ Bad: index-based keys
{items.map((item, index) => (
    <Animated.View key={index} entering={FadeIn}>
        <ItemCard item={item} />
    </Animated.View>
))}

// ✅ Good: unique and stable keys
{items.map((item) => (
    <Animated.View key={item.id} entering={FadeIn}>
        <ItemCard item={item} />
    </Animated.View>
))}
```

The problem with indices as keys is that when you delete an element, all subsequent indices change. React thinks they're completely different elements and destroys/recreates components instead of animating them correctly.

### Cleanup of Listeners and Shared Values

Shared values and gestures maintain native references that need cleanup. In complex components, especially those that mount and unmount frequently, forgetting cleanup can cause memory leaks.

```typescript
const ProperCleanup: React.FC = () => {
    const translateX = useSharedValue(0);

    useEffect(() => {
        return () => {
            // Cancel animations in progress
            cancelAnimation(translateX);
        };
    }, [translateX]);

    // Rest of component...
};
```

Although Reanimated generally handles cleanup automatically, in cases where you manually control the lifecycle of animations (like with `cancelAnimation` or `runOnUI`), explicit cleanup prevents subtle problems.

## Conclusion

Creating mobile interfaces that feel truly native in React Native requires deeply understanding how threads work and using the right tools for each problem. FlatList and FlashList solve efficient rendering of massive lists by eliminating unnecessary measurements and aggressively recycling views. Reanimated 3 brings animations to the native UI thread where they can run at 60 FPS independently of what JavaScript is doing. Gesture Handler v2 processes touches with almost zero latency, creating interactions that feel instant.

The key is being intentional with each optimization. Not all lists need FlashList nor all animations need Reanimated. But when your users start noticing lag or when your app feels less fluid than native alternatives, these tools with TypeScript give you the necessary control to compete with any pure native experience. The result is an application that not only works well, but feels premium from the first touch.
