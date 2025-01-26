---
layout: ../../layouts/MainLayout.astro
title: Tailwind CSS 实用技巧
description: 介绍一些 Tailwind CSS 的常用技巧和组件设计方法
date: 2024-03-17
slug: tailwind-tricks
tags: ["Tailwind CSS", "CSS", "前端", "设计"]
---

# Tailwind CSS 实用技巧

## 响应式设计

Tailwind 提供了简单的响应式前缀：

```html
<div class="text-sm md:text-base lg:text-lg">响应式文本</div>
```

## 常用组件模式

### 卡片组件

```html
<div
  class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
>
  <h2 class="text-xl font-bold mb-2">卡片标题</h2>
  <p class="text-gray-600">卡片内容</p>
</div>
```

### 按钮样式

```html
<button
  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  点击按钮
</button>
```

## 深色模式

使用 dark: 前缀来支持深色模式：

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  自动适应深色模式的内容
</div>
```

这些技巧可以帮助你更好地使用 Tailwind CSS 构建现代化的用户界面。
