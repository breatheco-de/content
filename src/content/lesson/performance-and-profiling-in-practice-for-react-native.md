---
title: "Performance & Profiling in Practice for React Native"
description: "Practical guide to measure, diagnose and optimize performance in React Native using Hermes, Flipper and Systrace. Real debugging cases with measurable solutions."
author: "rosinni"
tags: ["React Native","Performance","Profiling","Hermes","Flipper","Optimization","Debugging","TypeScript"]
---

# Performance & Profiling in Practice for React Native

Your app works perfectly on your MacBook with an iPhone 14 Pro connected. But in production, users complain about lag, choppy scrolling, and screens that take seconds to load. The problem with performance is that it's invisible until it becomes a serious issue, and by then you already have one-star reviews and users abandoning your app.

Performance in React Native isn't about applying every optimization you know and hoping for the best. It's about scientifically measuring where the real problem is, applying the specific fix, and validating that it worked. Without profiling tools, you're optimizing blindly. With them, you turn performance debugging into a systematic and predictable process.

## Hermes: Your Code Microscope

Hermes is the JavaScript engine designed by Meta specifically for React Native. Its integrated profiler shows you exactly which functions in your code consume CPU time, with millisecond precision.

### Initial Setup

First verify that Hermes is enabled. In recent React Native CLI projects it comes activated by default, but always confirm. For Android, check your `android/app/build.gradle` file and look for `enableHermes: true`. For iOS, in your `Podfile` you should have `hermes_enabled => true` in the `use_react_native` configuration.

You can verify at runtime if Hermes is active with this simple code in any component.

```typescript
const isHermesEnabled = (): boolean => {
    return !!global.HermesInternal;
};

// Use in development to confirm
useEffect(() => {
    if (__DEV__) {
        console.log('Hermes enabled:', isHermesEnabled());
    }
}, []);
```

If you see `true`, you're ready. If you see `false`, you need to enable Hermes in the configuration and do a complete app rebuild.

### Capturing a Profile

There are two ways to capture Hermes profiles. The first is manual using the development menu. Shake your device or press Cmd+D on iOS, Cmd+M on Android. You'll see options for "Enable Sampling Profiler". Activate it, use your app reproducing the flow you want to analyze for 10-30 seconds, then return to the menu and select "Disable Sampling Profiler". This generates a file you can download.

The second way is programmatic, useful when you want to capture profiles of specific flows automatically.

```typescript
import { Platform } from 'react-native';

interface ProfileCapture {
    start: () => void;
    stop: () => Promise<string | null>;
}

const useHermesProfiler = (): ProfileCapture => {
    const start = () => {
        if (!__DEV__ || !global.HermesInternal) return;
        
        console.log('Starting Hermes profiler...');
    };

    const stop = async (): Promise<string | null> => {
        if (!global.HermesInternal) {
            console.warn('Hermes not available');
            return null;
        }

        try {
            const path = await global.HermesInternal.getProfile?.();
            console.log('Profile saved at:', path);
            return path;
        } catch (error) {
            console.error('Failed to capture profile:', error);
            return null;
        }
    };

    return { start, stop };
};

// Use in a debug screen
const DebugScreen: React.FC = () => {
    const profiler = useHermesProfiler();

    return (
        <View>
            <Button title="Start Profile" onPress={profiler.start} />
            <Button title="Stop Profile" onPress={profiler.stop} />
        </View>
    );
};
```

On Android, the file is saved in `/data/data/com.yourapp/cache/`. Extract it with `adb pull /data/data/com.yourapp/cache/profile.cpuprofile`. On iOS, Xcode allows you to download files from the app container.

### Analyzing the Profile

The `.cpuprofile` file opens in Chrome DevTools. Go to `chrome://inspect`, then in the Profiler tab load the file. Chrome will show you three different views of the same profile.

The Chart view is a flame graph where each horizontal bar represents a function. The width of the bar is proportional to the time it consumed. The widest bars are your primary optimization candidates. You can click on any bar to see the exact source code and complete call stack.

The Heavy view groups all function calls by name, showing you the most expensive ones first regardless of where they were called from. This is perfect for finding problematic functions called from multiple places. If you see `formatPrice` appearing consuming 600ms total, you know you need to optimize it or cache its results.

The Tree view shows the complete hierarchical call stack. Useful when you want to understand the context of why a function is slow. You can see the entire chain of calls that led to executing expensive code.

![propfile image](https://github.com/breatheco-de/content/blob/master/src/assets/assets/assets/image-rn1.png)

## Flipper: Total App Visibility

Flipper is much more than a debugger, it's an ecosystem of plugins that give you complete visibility into your app's internal behavior in real time.

![flipper](https://github.com/breatheco-de/content/blob/master/src/assets/assets/assets/flipper.png)

### Professional Installation

In recent React Native CLI projects, Flipper should already be configured. But to access all plugins you need some additional steps.

Download Flipper Desktop from the official site. Once installed, make sure your project has the necessary dependencies.

```bash
npm install --save-dev react-native-flipper
```

For iOS, your Podfile should include Flipper configuration. It should look similar to this, although the specific version may vary.

```ruby
use_flipper!()

post_install do |installer|
    flipper_post_install(installer)
end
```

Run `pod install` in the ios folder. For Android, integration should be automatic in recent versions.

Now start your app in debug mode. Open Flipper Desktop and you should see your app appear in the list of connected devices. If it doesn't appear, verify that the device and your computer are on the same network, or use USB connection with `adb reverse` configured.

### React DevTools: Hunting Re-renders

The React plugin in Flipper is your main weapon against components that render unnecessarily. When your app feels slow but you don't see expensive functions in Hermes, the problem is probably excessive re-renders.

Connect Flipper and select the React DevTools plugin. You'll see your complete component tree. Now activate the "Highlight Updates" option in the plugin settings. This is the killer feature.

Use your app normally. You'll see that components that render briefly light up in different colors on your device. If the entire screen lights up when you change a text input, you have a serious architectural problem. Probably the state is too high up in the tree and causes re-render cascades.

```typescript
// Common problem identified with Highlight Updates
interface UserProfileProps {
    userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [userData, setUserData] = useState<User | null>(null);

    return (
        <View>
            <Header />
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <UserInfo user={userData} />
            <PostList posts={userPosts} />
            <Footer />
        </View>
    );
};
```

With Highlight Updates active, typing in the SearchBar lights up Header, UserInfo, PostList and Footer unnecessarily. All those components re-render even though they don't depend on searchQuery. The solution is to isolate state as close as possible to where it's used.

```typescript
const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [userData, setUserData] = useState<User | null>(null);

    return (
        <View>
            <Header />
            <SearchSection />
            <UserInfo user={userData} />
            <PostList posts={userPosts} />
            <Footer />
        </View>
    );
};

const SearchSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
    );
};
```

Now only SearchSection lights up when you type. The rest of the screen remains static. The plugin also shows a render counter per component. Click on any component in the tree to see how many times it has rendered. If a simple component rendered 200 times in 30 seconds, you found your problem.

### Performance Monitor: The Critical Numbers

The Performance Monitor shows two real-time metrics you should constantly watch during development.

JavaScript FPS indicates how well your React code is performing. It should stay close to 60 (or 120 on high refresh rate devices). If it drops to 40-50 during normal interactions, your code is doing too much work. Typical causes are expensive calculations in render, functions that aren't memoized, or Context propagating changes to too many components.

UI FPS indicates how well native rendering is performing. It should also be at 60. If it drops but JS FPS is fine, the problem is in poorly implemented animations, complex layouts with many nested views, or unoptimized images. The key is observing exactly when FPS drops. Reproduce specific actions while watching the monitor. Scroll through a list, navigate between screens, open an animated modal, load images. When you see the FPS drop, you know exactly which action causes the problem.

### Network Inspector: Optimizing Wait Times

Users don't perceive your app as slow because your JavaScript is slow. They perceive it as slow because they spend seconds looking at spinners waiting for server data. The Network Inspector shows every HTTP request with detailed timing. Click on any request to see a complete breakdown of time in specific phases.

DNS lookup shows how long it took to resolve the domain to an IP. Connection shows the time to establish the TCP connection. If you use HTTPS, you'll also see TLS handshake. TTFB is Time To First Byte, how long the server took to start sending the response. Download is how long it took to transfer all data.

If TTFB is high, the problem is on the server, not in your app. If Download is slow but TTFB is fast, the problem is the response size. If you see multiple requests to the same endpoint in a few seconds, you need deduplication.

```typescript
// Problem visible in Network Inspector
const ProductScreen: React.FC<{ productId: string }> = ({ productId }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`/api/products/${productId}`).then(r => r.json()).then(setProduct);
        fetch(`/api/products/${productId}/reviews`).then(r => r.json()).then(setReviews);
        fetch(`/api/products/${productId}/related`).then(r => r.json()).then(setRelatedProducts);
    }, [productId]);

    if (!product) return <Loading />;

    return <ProductDetails product={product} reviews={reviews} related={relatedProducts} />;
};
```

In Flipper you'll see three sequential requests. The total can be 2-3 seconds. But these three requests can be made in parallel, or even better, the server can have an endpoint that returns everything together.

### Images Plugin: The Memory Killer

Images are the number one cause of memory crashes in React Native apps. The Images plugin shows you all images currently loaded in RAM, their size in memory versus screen size, and allows you to inspect them visually.

Activate the Images plugin and use your app navigating through screens with photos. You'll see a thumbnail gallery of all images in memory. If you see a 3000x2000 pixel image but on screen it only occupies 150x100, you're massively wasting memory.

A 3000x2000 uncompressed image consumes approximately 24MB of RAM. If you have 20 of those in a gallery, that's 480MB just in images. On devices with 2-3GB total RAM, your app will inevitably crash.

The solution has two parts. First, your server should offer multiple sizes of each image. Second, your app should request the appropriate size.

```typescript
import FastImage from 'react-native-fast-image';
import { Dimensions, PixelRatio } from 'react-native';

interface OptimizedImageProps {
    imageId: string;
    width: number;
    height: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
    imageId, 
    width, 
    height 
}) => {
    const pixelRatio = PixelRatio.get();
    const optimalWidth = Math.ceil(width * pixelRatio);
    const optimalHeight = Math.ceil(height * pixelRatio);

    const imageUrl = `https://cdn.example.com/images/${imageId}?w=${optimalWidth}&h=${optimalHeight}&q=85&fm=webp`;

    return (
        <FastImage
            source={{
                uri: imageUrl,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
            }}
            style={{ width, height }}
            resizeMode={FastImage.resizeMode.cover}
        />
    );
};
```

In Flipper Images you'll see that now each image consumes only 200-500KB instead of 24MB. The plugin also alerts you if there are image memory leaks. If you navigate away from a screen but its images remain in memory, you have hanging references.

## Systrace: System-Level Debugging

Systrace is an Android tool that captures activity from ALL system threads, not just your app. It shows you exactly what each thread is doing microsecond by microsecond.

### Capturing an Effective Trace

Systrace generates large HTML files with microscopic information. The key is to capture only the problematic period.

First make sure you have Android SDK configured and adb working. Then start the capture before reproducing the problem.

```bash
adb shell atrace --async_start -b 20000 -a com.yourapp sched gfx view wm am input res dalvik

# Reproduce the problem in your app for 5-10 seconds

adb shell atrace --async_stop > trace.html
```

The `-b 20000` parameter is the buffer size in KB. For longer captures, increase this number. The tags after `-a` determine what information to capture. `sched` is thread scheduling, `gfx` is rendering, `view` is the view system, etc.

### Reading the Trace

Open the HTML file in Chrome. You'll see an interface with complete timeline. Each row is a different thread. The colored bars are work being executed. White spaces are idle time or waiting.

Look for the SurfaceFlinger row near the top. This is the final frame compositor. Each frame should be a green bar of approximately 16.67ms for 60 FPS. Red or orange bars are frames that took longer than 16.67ms, causing visible stuttering.

Click on a problematic red bar. The bottom panel shows complete details including the call stack that caused the delay. It might show `measure` or `layout`, indicating that calculating view positions was expensive. Or it might show `draw`, indicating that drawing pixels took too long.

Navigate to your app's rows. You'll see the JavaScript Thread, the main UI Thread, and other helper threads. If the JS Thread has long continuous bars without gaps, it's saturated with work. If the UI Thread waits frequently, that's good, it means it's not blocked.

## Data-Based Optimization Strategies

With the tools understood, let's see specific strategies to solve the most common problems you'll find in profiling.

### Context Optimization

React Context is convenient but dangerous. When a Context value changes, all components that consume it re-render, regardless of whether they use the part that changed.

```typescript
type AppContextValue = {
    user: User | null;
    theme: 'light' | 'dark';
    settings: Settings;
};

const AppContext = createContext<AppContextValue | null>(null);

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [settings, setSettings] = useState<Settings>(defaultSettings);

    const value = { user, theme, settings };

    return (
        <AppContext.Provider value={value}>
            <Navigation />
        </AppContext.Provider>
    );
};
```

The problem is twofold. First, the object literal creates a new reference on every render, causing all consumers to re-render. Second, changing theme causes re-render of components that only use user. The solution is to separate Contexts by domain and memoize the value.

```typescript
const UserContext = createContext<User | null>(null);
const ThemeContext = createContext<'light' | 'dark'>('light');
const SettingsContext = createContext<Settings>(defaultSettings);

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [settings, setSettings] = useState<Settings>(defaultSettings);

    return (
        <UserContext.Provider value={user}>
            <ThemeContext.Provider value={theme}>
                <SettingsContext.Provider value={settings}>
                    <Navigation />
                </SettingsContext.Provider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
};
```

Now changing theme only affects components that consume ThemeContext. In Flipper React DevTools with Highlight Updates, you'll see that only visual UI components light up, not data components.

### Debouncing for Expensive Inputs

Not all events need to be processed immediately. Search inputs especially should be debounced.

```typescript
const useDebounce = <T,>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const SearchScreen: React.FC = () => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery) {
            performSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    return (
        <TextInput 
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
        />
    );
};
```

In Network Inspector you'll see that typing "react native" generates 1 request after half a second of the user stopping, not 12 requests while typing.

### Multi-level Image Caching

For apps with many images you need more sophisticated caching than just FastImage default.

```typescript
import RNFS from 'react-native-fs';

class ImageCache {
    private memoryCache = new Map<string, string>();
    private diskPath = `${RNFS.CachesDirectoryPath}/images/`;

    async getImage(url: string): Promise<string> {
        const key = this.hashUrl(url);

        if (this.memoryCache.has(key)) {
            return this.memoryCache.get(key)!;
        }

        const diskFile = `${this.diskPath}${key}.jpg`;
        const exists = await RNFS.exists(diskFile);

        if (exists) {
            this.memoryCache.set(key, diskFile);
            return diskFile;
        }

        return this.downloadAndCache(url, key, diskFile);
    }

    private async downloadAndCache(url: string, key: string, path: string): Promise<string> {
        await RNFS.downloadFile({ fromUrl: url, toFile: path }).promise;
        this.memoryCache.set(key, path);
        return path;
    }

    private hashUrl(url: string): string {
        return url.split('').reduce((hash, char) => {
            return ((hash << 5) - hash) + char.charCodeAt(0);
        }, 0).toString();
    }
}

const imageCache = new ImageCache();
```

In Flipper Images you'll see that cached images load instantly and don't appear in Network Inspector.

## Performance Checklist

Before launching to production, run this checklist. Capture a Hermes profile of the main flows. No function should consume more than 10% of total time. Use Flipper Performance Monitor during 5 minutes of intensive use. FPS should consistently stay at 55 or higher. Review Flipper Images during normal use. No image should be more than 5x its visual size.

Capture a 30-second Android Systrace. There should be no more than 5-10 red frames during normal use. Review Network Inspector. Average request time should be less than 500ms for the 90th percentile. All of this should be done on production builds, not development. Dev builds have overhead that hides real problems.

## Conclusion

Performance profiling in React Native is systematic engineering, not dark art. Hermes tells you which functions are slow. Flipper gives you visibility into renders, network, memory and images. Systrace reveals threading and rendering problems that other tools don't see.

The key is to measure before optimizing. Without a baseline you don't know if you improved. Without profiling you optimize the wrong thing. Without validation you don't know if the problem was solved. With these tools and this process, optimization becomes predictable and effective.
