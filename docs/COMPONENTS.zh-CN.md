# Apple UI 组件文档（中文）

本文档基于 `src/components`、`src/system` 与 `docs/apple-ui-ai-prompt.md` 的当前实现整理，目标是为组件库提供一份可维护的中文说明，并帮助后续补齐线上文档页。

## 1. 项目与规范对照

### 总体结论

`apple-ui` 已经基本覆盖了规范中要求的技术栈、组件范围、设计令牌、暗色模式与大部分 Apple 风格视觉特征，可以认为是“已按要求完成了第一版组件库骨架与 demo 体系”。

但它还没有完全达到规范中所说的“production-ready component library”标准，主要差距集中在：

- 文档页仍是概览式展示，缺少逐组件 API 文档、示例和约束说明。
- 可访问性做了基础 ARIA，但覆盖层组件的焦点管理、键盘交互还不完整。
- 个别组件虽然能用，但语义结构或组合方式还可以更稳健。
- 规范要求“每个组件独立文件夹”，目前 `layout` 仍把 `Container / Stack / Grid` 放在同一目录。

### 对照结果

| 规范项 | 当前状态 | 说明 |
| --- | --- | --- |
| React + TypeScript + TailwindCSS + Framer Motion | 已满足 | 技术栈与要求一致 |
| 设计令牌系统 | 已满足 | `src/theme/tokens.ts` 与 `src/app/globals.css` 均定义了颜色、圆角、阴影、动效 |
| Apple 风格视觉 | 基本满足 | 玻璃拟态、柔和阴影、留白、轻动效都已体现 |
| iOS / iPadOS / macOS 断点 | 已满足 | `useAppleBreakpoint` 与 `breakpoints` 已实现 |
| 组件范围 | 已满足 | 基础组件、高级组件、系统 demo 页面均已覆盖 |
| 每组件独立目录 | 部分满足 | 大多数组件满足，`layout` 目录例外 |
| Framer Motion 动效 | 部分满足 | 重点交互组件已接入，但并非每个组件都使用动效 |
| 暗色模式 | 已满足 | `ThemeProvider` + `prefers-color-scheme` + CSS 变量 |
| 可访问性 | 部分满足 | 已有 ARIA 与最小点击面积意识，但焦点陷阱、键盘导航仍需加强 |
| 完整组件文档 | 未满足 | 当前 `/docs/components` 更像目录页，不是详细文档页 |

## 2. 优化建议

### 优先级高

1. 为 `Modal`、`Drawer`、`CommandPalette`、`SpotlightSearch` 补齐焦点陷阱与焦点恢复。
2. 修复 `Select`、`ContextMenu`、可点击 `TableRow` 的键盘导航与语义问题。
3. 把组件文档从“列表页”提升到“逐组件 API + 示例 + 注意事项”。

### 优先级中

1. 统一覆盖层组件的无障碍策略：唯一 `id`、`aria-labelledby`、`aria-describedby`、Esc 关闭、初始焦点、关闭后焦点返回触发器。
2. 为交互组件补充测试：键盘操作、暗色模式、受控/非受控行为、边界状态。
3. 拆分 `layout` 目录，使结构更贴近规范与可维护性要求。

### 优先级低

1. 为 docs 页面加入真实代码示例、Props 表格与视觉预览块。
2. 增加“推荐搭配”文档，例如 `ThemeProvider + ToastProvider + NavigationBar + Card` 的页面骨架。
3. 补充组件间设计约束，例如间距、默认尺寸、移动端适配建议。

## 3. 核心基础设施

| 模块 | 说明 | 主要导出 |
| --- | --- | --- |
| ThemeProvider | 主题上下文，支持 `light / dark / system` | `ThemeProvider`, `useTheme` |
| tokens | JS/TS 侧设计令牌 | `tokens`, `breakpoints` |
| useAppleBreakpoint | Apple 平台断点识别 | `ios`, `ipad`, `macos` |
| ToastProvider | 全局 toast 容器 | `ToastProvider`, `toast` |

## 4. 组件说明

### Layout

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Container | 页面内容宽度容器 | `children`, `className` | 适合页面主内容包裹 |
| Stack | 一维布局容器 | `direction`, `gap`, `align`, `justify`, `wrap` | 适合垂直/水平编排 |
| Grid | 二维网格布局 | `cols`, `gap`, `responsive` | 文档页与卡片阵列常用 |

### Navigation

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| NavigationBar | 顶部导航栏/工具栏 | `title`, `subtitle`, `left`, `right`, `transparent` | 可模拟 iOS/macOS 顶栏 |
| Sidebar | 侧边导航 | `items`, `activeId`, `onSelect`, `collapsed`, `header` | 适合 iPadOS / macOS 布局 |
| BottomTabBar | 底部标签栏 | `items`, `activeId`, `onSelect` | 适合 iOS 单列布局 |
| Tabs | 标签切换 | `items`, `value`, `onChange`, `variant`, `size`, `ariaLabel` | 属于额外扩展组件，原规范未显式要求 |
| SegmentedControl | Apple 风格分段控制器 | `options`, `value`, `onChange`, `aria-label` | iOS 设置页典型交互 |

### Data Display

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Card | 内容卡片容器 | `padding`, `hover`, `as` | 默认是 Apple 风格圆角卡片 |
| List | 列表容器 | `children` | 与 `ListGroup`、`ListItem` 配合使用 |
| ListGroup | 分组列表 | `title`, `children` | 适合设置页样式分组 |
| ListItem | 列表项 | `icon`, `trailing`, `description`, `href`, `onClick` | 可做导航项或说明项 |
| Table | 表格外层 | `children` | 负责横向滚动 |
| TableHead | 表头容器 | `children` | 与 `TableCell header` 配合 |
| TableBody | 表体容器 | `children` | 常规表体 |
| TableRow | 表格行 | `children`, `onClick` | 当前可点击时语义仍需增强 |
| TableCell | 单元格 | `children`, `header` | `header=true` 时渲染 `th` |

### Inputs

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Button | 按钮 | `variant`, `size`, `loading`, `leftIcon`, `rightIcon` | 支持按压缩放动画 |
| Input | 单行输入框 | `label`, `error`, `status`, `leftIcon`, `rightIcon` | 已包含错误态与描述关联 |
| Textarea | 多行输入框 | `label`, `error`, `status` | 适合备注、说明输入 |
| Select | 自定义下拉选择 | `value`, `options`, `onChange`, `placeholder`, `label`, `error` | 当前键盘导航能力偏基础 |
| Switch | 开关 | `checked`, `onChange`, `disabled`, `aria-label` | 使用按钮语义实现 |
| Checkbox | 复选框 | `checked`, `onChange`, `label` | 受控模式 |
| Radio | 单选组 | `name`, `value`, `options`, `onChange`, `disabled` | 使用 `radiogroup` 语义 |

### Feedback

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Toast | 消息提醒列表 | `toasts`, `remove` | 需通过 `ToastProvider` 使用 |
| Modal | 模态框 | `open`, `onClose`, `title`, `description`, `closeOnOverlayClick` | 已支持基础入场动效 |
| Drawer | 抽屉 | `open`, `onClose`, `title`, `placement` | 支持 `bottom / left / right` |
| Tooltip | 提示浮层 | `content`, `placement`, `children` | 轻提示场景 |
| Alert | 状态提示块 | `title`, `description`, `variant`, `role` | 适合页面内反馈 |

### Display

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Avatar | 头像 | `src`, `alt`, `fallback`, `size` | 支持回退字符 |
| Badge | 徽标 | `variant`, `children` | 轻量状态标签 |
| Tag | 标签 | `children`, `onRemove` | 支持移除动作 |
| Divider | 分割线 | `label`, `orientation` | 支持横向/纵向 |
| GlassPanel | 玻璃拟态容器 | `blur`, `children` | Apple 风格重要视觉基元 |

### Loading

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| Spinner | 旋转加载器 | `size`, `aria-label` | 轻量 loading 状态 |
| Skeleton | 骨架屏 | `width`, `height` | 占位加载 |
| Progress | 进度条 | `value`, `max`, `aria-label` | 使用 `progressbar` 语义 |

### Advanced Apple Components

| 组件 | 作用 | 关键参数 | 备注 |
| --- | --- | --- | --- |
| CommandPalette | 命令面板 | `open`, `onClose`, `items`, `searchPlaceholder` | 面向 `Cmd + K` 场景 |
| SpotlightSearch | Spotlight 式搜索 | `open`, `onClose`, `results`, `onSearch`, `searchPlaceholder` | 更偏全屏搜索体验 |
| ContextMenu | 上下文菜单 | `items`, `children` | 当前更偏鼠标右键场景 |
| FloatingToolbar | 悬浮工具栏 | `position`, `children` | 适合编辑器或操作浮条 |

## 5. System Demo 说明

| 页面 | 说明 | 入口 |
| --- | --- | --- |
| SettingsPage | 设置页风格 demo | `src/system/settings/SettingsPage.tsx` |
| WalletPage | 钱包卡片式 demo | `src/system/wallet/WalletPage.tsx` |
| DashboardPage | 仪表盘式 demo | `src/system/dashboard/DashboardPage.tsx` |
| ControlCenterPage | 控制中心风格 demo | `src/system/control-center/ControlCenterPage.tsx` |
| VisionOSGlassPage | visionOS 玻璃层叠 demo | `src/system/visionos/VisionOSGlassPage.tsx` |
| SystemShell | demo 统一切换容器 | `src/system/SystemShell.tsx` |

## 6. 推荐使用方式

```tsx
import {
  ThemeProvider,
  ToastProvider,
  Container,
  Stack,
  Card,
  NavigationBar,
  Button,
} from "@yu-cq/apple-ui";

export function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <NavigationBar title="Apple UI" />
        <Container className="py-6">
          <Stack gap="lg">
            <Card padding="md">
              <Button variant="primary">Continue</Button>
            </Card>
          </Stack>
        </Container>
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## 7. 后续文档建设建议

建议下一步把该文档拆成线上文档页：

1. `Overview`：设计原则、主题、断点、Provider。
2. `Components`：逐组件 API 表格、示例代码、交互说明。
3. `Patterns`：表单页、设置页、导航页、搜索页、弹层页模板。
4. `Accessibility`：键盘操作、焦点管理、ARIA 规范、最小点击区域。
5. `Theming`：浅色/深色模式、自定义令牌扩展方式。
