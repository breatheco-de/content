---
title: "Obtención de datos para una interfaz de usuario fluida con React Query"
description: "Aprende a integrar APIs sin jank ni spinners innecesarios usando React Query. Estrategias de cache, optimización de requests y estados de carga inteligentes."
author: "rosinni"
tags: ["React","React Query","TanStack Query","Performance","UX","Data Fetching","Cache"]
---

En aplicaciones modernas, la experiencia de usuario se degrada rápidamente cuando aparecen spinners constantemente, la interfaz "salta" al cargar datos, o el usuario ve pantallas en blanco mientras espera. React Query (TanStack Query) nos permite crear interfaces fluidas donde los datos se actualizan de forma inteligente en segundo plano, sin interrumpir la interacción del usuario.

## Estrategias de Cache y Staleness: `staleTime` y `cacheTime`

React Query mantiene dos conceptos fundamentales para controlar cómo y cuándo se refrescan los datos:

1. **`staleTime`** que define cuánto tiempo los datos se consideran "frescos". Durante este período, React Query **no** realizará una nueva petición automáticamente.

```jsx
const { data } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
  staleTime: 5 * 60 * 1000, // 5 minutos
});
```

Con `staleTime: 5 minutos`, si el usuario navega a otra página y vuelve dentro de ese tiempo, React Query mostrará los datos cacheados instantáneamente sin hacer una nueva petición.

2. **`cacheTime`** que controla cuánto tiempo permanecen los datos en memoria después de que no hay componentes observándolos. Por defecto es 5 minutos.

```jsx
const { data } = useQuery({
  queryKey: ['userProfile', userId],
  queryFn: () => fetchUserProfile(userId),
  staleTime: 2 * 60 * 1000,    // Fresco por 2 minutos
  cacheTime: 10 * 60 * 1000,   // En cache por 10 minutos
});
```

Para datos que cambian poco (categorías, configuración), usa `staleTime` alto (30-60 minutos). Para datos dinámicos (feed de actividad), mantén `staleTime` bajo pero aprovecha el cache para transiciones rápidas.

### `keepPreviousData` para Transiciones Suaves

Uno de los patrones más poderosos para eliminar el "jank" es mostrar los datos anteriores mientras se cargan los nuevos:

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

Cuando el usuario cambia de categoría, la lista anterior permanece visible con una ligera opacidad, evitando el estado de loading vacío. La UI nunca "salta" ni muestra spinners. **Caso de uso ideal**: Paginación, filtros, búsquedas. El usuario mantiene contexto visual mientras los nuevos datos se cargan.

## Optimización de Requests

- **De-duplicación Automática:** React Query de-duplica automáticamente requests idénticos realizados simultáneamente:

```jsx
// Múltiples componentes pueden llamar esto al mismo tiempo
function UserAvatar({ userId }) {
  const { data } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
  
  return <img src={data?.avatar} alt={data?.name} />;
}

// Si 10 componentes renderizan simultáneamente con el mismo userId,
// solo se hace UNA petición HTTP
```

Esto elimina la necesidad de gestionar manualmente qué componente "es responsable" de cargar los datos.

- **Background Refetch Inteligente:** React Query refresca datos automáticamente en situaciones clave sin interrumpir al usuario:

```jsx
const { data } = useQuery({
  queryKey: ['notifications'],
  queryFn: fetchNotifications,
  staleTime: 30 * 1000,           // Fresco por 30 segundos
  refetchOnWindowFocus: true,     // Refrescar al volver a la pestaña
  refetchOnReconnect: true,       // Refrescar al recuperar conexión
  refetchInterval: 60 * 1000,     // Polling cada minuto
});
```

**Patrón avanzado**: Refetch condicional basado en estado de la aplicación.

```jsx
const { data } = useQuery({
  queryKey: ['liveScores', matchId],
  queryFn: () => fetchMatchScores(matchId),
  refetchInterval: (data) => {
    // Si el partido terminó, detener polling
    return data?.status === 'finished' ? false : 5000;
  },
});
```

- `select`: para Transformar y Derivar Datos. La opción `select` permite transformar datos eficientemente, con memoización automática:

```jsx
function ActiveUsers() {
  const { data: activeCount } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    select: (users) => users.filter(u => u.isActive).length,
    staleTime: 5 * 60 * 1000,
  });

  return <Badge>{activeCount} usuarios activos</Badge>;
}
```

**Ventajas de `select`**:
- Solo re-renderiza si el resultado transformado cambia (no si cambian otros campos de los datos originales)
- Múltiples componentes pueden usar la misma query con diferentes selectores
- Los datos crudos permanecen en cache para otras queries

```jsx
// Selector reutilizable
const selectActiveUsers = (users) => 
  users.filter(u => u.isActive);

// Componente A necesita solo activos
const { data: activeUsers } = useQuery({
  queryKey: ['users'],
  queryFn: fetchAllUsers,
  select: selectActiveUsers,
});

// Componente B necesita todos
const { data: allUsers } = useQuery({
  queryKey: ['users'],
  queryFn: fetchAllUsers,
});

// Solo 1 petición HTTP, 2 vistas de los datos
```

## Estados Sin Bloquear la UI

- **Skeletons Inteligentes:** En lugar de spinners centralizados, usa skeletons que mantienen la estructura visual.

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
    return <ErrorCard message="No se pudo cargar el producto" />;
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

- **Placeholders con Datos Iniciales:** Para mejorar la percepción de velocidad, proporciona datos iniciales mientras se cargan los reales.

```jsx
const { data = DEFAULT_CATEGORIES } = useQuery({
  queryKey: ['categories'],
  queryFn: fetchCategories,
  placeholderData: DEFAULT_CATEGORIES, // Datos hasta que lleguen los reales
});
```

## Estrategia de Error Progresiva

Maneja errores sin romper toda la interfaz:

```jsx
function Dashboard() {
  const stats = useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
    retry: 3, // Reintentar 3 veces
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
        <p>Estadísticas no disponibles</p>
        <button onClick={() => queryClient.refetchQueries(['stats'])}>
          Reintentar
        </button>
      </div>
    );
  }
  
  return data ? <StatsDisplay data={data} /> : <StatsSkeleton />;
}
```

## Patrón Completo: Lista con Filtros Fluida

Combinando todas las técnicas:

```jsx
function SmoothProductList() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const { data, isFetching, isError } = useQuery({
    queryKey: ['products', category, search],
    queryFn: () => fetchProducts({ category, search }),
    keepPreviousData: true,      // Sin saltos al filtrar
    staleTime: 30 * 1000,        // Cache 30s
    select: (data) => ({          // Derivar conteo
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

## Conclusión

Una UI smooth con React Query no se trata de eliminar todos los indicadores de carga, sino de mantener al usuario informado sin interrumpir su flujo. Las claves son usar el cache inteligentemente con `staleTime`, mantener contexto visual con `keepPreviousData`, transformar datos eficientemente con `select`, y reemplazar spinners bloqueantes con skeletons y estados progresivos. El resultado es una aplicación que se siente rápida, moderna y confiable.