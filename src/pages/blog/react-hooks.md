---
layout: ../../layouts/MainLayout.astro
title: React Hooks 最佳实践
description: 探讨 React Hooks 的常见使用场景和注意事项
date: 2024-03-18
tags: ["React", "Hooks", "前端", "开发技巧"]
---

# React Hooks 最佳实践

## useState 的使用技巧

当状态逻辑比较复杂时，使用 reducer 可能比多个 useState 更好：

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

## useEffect 的注意事项

1. 清理副作用
2. 正确使用依赖数组
3. 避免无限循环

```jsx
useEffect(() => {
  const subscription = someAPI.subscribe();

  // 清理函数
  return () => {
    subscription.unsubscribe();
  };
}, [someAPI]); // 明确的依赖项
```

## 自定义 Hook

创建自定义 Hook 可以复用状态逻辑：

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ... 实现逻辑

  return size;
}
```

合理使用 Hooks 可以让你的 React 代码更加清晰和易于维护。
