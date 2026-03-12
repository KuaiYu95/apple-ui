## Overview

`@yu-cq/apple-ui` 是一个 Apple 风格的 React UI 组件库与系统基础，包含：

- **基础布局**：`Container`、`Stack`、`Grid`、`NavigationBar`、`Sidebar`、`BottomTabBar`
- **数据展示**：`Card`、`List` / `ListGroup` / `ListItem`、`Table` / `TableHead` / `TableBody` / `TableRow` / `TableCell`
- **表单输入**：`Button`、`Input`、`Textarea`、`Select`、`Switch`、`Checkbox`、`Radio`
- **反馈组件**：`Toast` / `ToastProvider` / `toast`、`Modal`、`Drawer`、`Tooltip`、`Alert`
- **展示与状态**：`Avatar`、`Badge`、`Tag`、`Divider`、`Spinner`、`Skeleton`、`Progress`
- **高级 Apple 组件**：`SegmentedControl`、`CommandPalette`、`SpotlightSearch`、`ContextMenu`、`GlassPanel`、`FloatingToolbar`
- **主题与工具**：`ThemeProvider` / `useTheme`、`useAppleBreakpoint`、设计令牌 `tokens` 与断点 `breakpoints`

组件风格与交互参考 Apple iOS / iPadOS / macOS 系统界面，内置明暗主题与响应式断点。

详细中文组件说明见 [docs/COMPONENTS.zh-CN.md](./docs/COMPONENTS.zh-CN.md)。

## Getting Started

安装依赖后运行 Demo 站点：

```bash
pnpm install
pnpm dev
```

浏览 `http://localhost:3000` 体验组件与示例页面。

在应用中使用时，从包入口导入组件：

```tsx
import { Button, Card, ThemeProvider } from "@yu-cq/apple-ui";
```

更多系统级页面（Settings / Wallet / Dashboard 等）与文档会在 `apps/docs` 或 `src/app/docs` 中提供。
