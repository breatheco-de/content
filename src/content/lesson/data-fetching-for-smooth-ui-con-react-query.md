---
title: "Data Fetching for Smooth UI with React Query"
description: "Learn to integrate APIs without jank or unnecessary spinners using React Query. Cache strategies, request optimization, and intelligent loading states."
author: "rosinni"
tags: ["React","React Query","TanStack Query","Performance","UX","Data Fetching","Cache"]
---

In modern applications, user experience quickly degrades when spinners constantly appear, the interface "jumps" while loading data, or users see blank screens while waiting. React Query (TanStack Query) allows us to create smooth interfaces where data updates intelligently in the background, without interrupting user interaction.

## Cache and Staleness Strategies: `staleTime` and `cacheTime`

React Query maintains two fundamental concepts to control how and when data is refreshed:

1. **`staleTime`** which defines how long data is considered "fresh". During this period, React Query will **not** automatically make a new request.

```jsx
const { data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
});
```

With `staleTime: 5 minutes`, if the user navigates to another page and returns within that time, React Query will show cached data instantly without making a new request.

2. **`cacheTime`** which controls how long data remains in memory after no components are observing it. Default is 5 minutes.

```jsx
const { data } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => fetchUserProfile(userId),
    staleTime: 2 * 60 * 1000,    // Fresh for 2 minutes
    cacheTime: 10 * 60 * 1000,   // Cached for 10 minutes
});
```

For data that changes infrequently (categories, configuration), use high `staleTime` (30-60 minutes). For dynamic data (activity feed), keep `staleTime` low but leverage cache for quick transitions.

### `keepPreviousData` for Smooth Transitions

One of the most powerful patterns to eliminate "jank" is showing previous data while new data loads:

```jsx
function ProductList({ category }) {
    const { data, isFetching } = useQuery({
        queryKey: ['products', category],
        queryFn: () => fetchProductsByCategory(category),
        keepPreviousData: true,
    });

    return (
        <div className={isFetching ? 'opacity-50' : ''}>
            {data?.products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
```

When the user changes category, the previous list remains visible with slight opacity, avoiding empty loading states. The UI never "jumps" or shows spinners. **Ideal use case**: Pagination, filters, searches. The user maintains visual context while new data loads.

## Request Optimization

- **Automatic De-duplication:** React Query automatically de-duplicates identical requests made simultaneously:

```jsx
// Multiple components can call this at the same time
function UserAvatar({ userId }) {
    const { data } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
    });
    
    return <img src={data?.avatar} alt={data?.name} />;
}

// If 10 components render simultaneously with the same userId,
// only ONE HTTP request is made
```

This eliminates the need to manually manage which component is "responsible" for loading data.

- **Intelligent Background Refetch:** React Query automatically refreshes data in key situations without interrupting the user:

```jsx
const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 30 * 1000,           // Fresh for 30 seconds
    refetchOnWindowFocus: true,     // Refetch when returning to tab
    refetchOnReconnect: true,       // Refetch when connection recovers
    refetchInterval: 60 * 1000,     // Polling every minute
});
```

**Advanced pattern**: Conditional refetch based on application state.

```jsx
const { data } = useQuery({
    queryKey: ['liveScores', matchId],
    queryFn: () => fetchMatchScores(matchId),
    refetchInterval: (data) => {
        // If match is finished, stop polling
        return data?.status === 'finished' ? false : 5000;
    },
});
```

- `select`: for Transforming and Deriving Data. The `select` option allows efficient data transformation with automatic memoization:

```jsx
function ActiveUsers() {
    const { data: activeCount } = useQuery({
        queryKey: ['users'],
        queryFn: fetchAllUsers,
        select: (users) => users.filter(u => u.isActive).length,
        staleTime: 5 * 60 * 1000,
    });

    return <Badge>{activeCount} active users</Badge>;
}
```

**Advantages of `select`**:
- Only re-renders if the transformed result changes (not if other fields in original data change)
- Multiple components can use the same query with different selectors
- Raw data remains cached for other queries

```jsx
// Reusable selector
const selectActiveUsers = (users) => 
    users.filter(u => u.isActive);

// Component A needs only active users
const { data: activeUsers } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    select: selectActiveUsers,
});

// Component B needs all users
const { data: allUsers } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
});

// Only 1 HTTP request, 2 views of the data
```

## States Without Blocking the UI

- **Intelligent Skeletons:** Instead of centralized spinners, use skeletons that maintain visual structure.

```jsx
function ProductCard({ productId }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => fetchProduct(productId),
    });

    if (isLoading) {
        return (
            <div className="card">
                <div className="skeleton-image h-48 bg-gray-200 animate-pulse" />
                <div className="skeleton-title h-6 bg-gray-200 animate-pulse mt-4" />
                <div className="skeleton-price h-4 bg-gray-200 animate-pulse mt-2 w-1/2" />
            </div>
        );
    }

    if (isError) {
        return <ErrorCard message="Could not load product" />;
    }

    return (
        <div className="card">
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <p className="price">${data.price}</p>
        </div>
    );
}
```

- **Placeholders with Initial Data:** To improve perceived speed, provide initial data while real data loads.

```jsx
const { data = DEFAULT_CATEGORIES } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    placeholderData: DEFAULT_CATEGORIES, // Data until real data arrives
});
```

## Progressive Error Strategy

Handle errors without breaking the entire interface:

```jsx
function Dashboard() {
    const stats = useQuery({
        queryKey: ['stats'],
        queryFn: fetchStats,
        retry: 3, // Retry 3 times
    });

    const activity = useQuery({
        queryKey: ['activity'],
        queryFn: fetchActivity,
        retry: 1,
    });

    return (
        <div className="dashboard">
            <StatsSection 
                data={stats.data} 
                isError={stats.isError}
            />
            
            <ActivityFeed 
                data={activity.data} 
                isError={activity.isError}
            />
        </div>
    );
}

function StatsSection({ data, isError }) {
    if (isError) {
        return (
            <div className="stats-error">
                <Icon name="alert" />
                <p>Statistics not available</p>
                <button onClick={() => queryClient.refetchQueries(['stats'])}>
                    Retry
                </button>
            </div>
        );
    }
    
    return data ? <StatsDisplay data={data} /> : <StatsSkeleton />;
}
```

## Complete Pattern: Smooth List with Filters

Combining all techniques:

```jsx
function SmoothProductList() {
    const [category, setCategory] = useState('all');
    const [search, setSearch] = useState('');

    const { data, isFetching, isError } = useQuery({
        queryKey: ['products', category, search],
        queryFn: () => fetchProducts({ category, search }),
        keepPreviousData: true,      // No jumps when filtering
        staleTime: 30 * 1000,        // Cache 30s
        select: (data) => ({          // Derive count
            products: data.products,
            count: data.products.length,
        }),
    });

    return (
        <div>
            <SearchBar 
                value={search} 
                onChange={setSearch}
                isSearching={isFetching}
            />
            
            <CategoryTabs 
                selected={category}
                onChange={setCategory}
            />

            {isError ? (
                <ErrorState retry={() => queryClient.refetchQueries(['products'])} />
            ) : (
                <>
                    <ResultsCount count={data?.count} isUpdating={isFetching} />
                    
                    <div className={isFetching ? 'opacity-70' : ''}>
                        {data?.products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
```

## Conclusion

A smooth UI with React Query isn't about eliminating all loading indicators, but about keeping users informed without interrupting their flow. The keys are using cache intelligently with `staleTime`, maintaining visual context with `keepPreviousData`, transforming data efficiently with `select`, and replacing blocking spinners with skeletons and progressive states. The result is an application that feels fast, modern, and reliable.