export type ComponentCategory =
  | "foundations"
  | "layout"
  | "navigation"
  | "data-display"
  | "inputs"
  | "feedback"
  | "display"
  | "loading"
  | "advanced";

export type PropDoc = {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
};

export type TypeFieldDoc = {
  name: string;
  type: string;
  description: string;
  required?: boolean;
};

export type TypeDoc = {
  name: string;
  description: string;
  fields: TypeFieldDoc[];
};

export type ComponentDoc = {
  slug: string;
  name: string;
  category: ComponentCategory;
  summary: string;
  description: string;
  features: string[];
  usage: string;
  props: PropDoc[];
  typeDefinitions?: TypeDoc[];
};

export const categoryLabels: Record<ComponentCategory, string> = {
  foundations: "基础能力",
  layout: "布局",
  navigation: "导航",
  "data-display": "数据展示",
  inputs: "输入",
  feedback: "反馈",
  display: "展示",
  loading: "加载",
  advanced: "高级 Apple 组件",
};

export const categoryOrder: ComponentCategory[] = [
  "foundations",
  "layout",
  "navigation",
  "data-display",
  "inputs",
  "feedback",
  "display",
  "loading",
  "advanced",
];

export const componentDocs: ComponentDoc[] = [
  {
    slug: "theme-provider",
    name: "ThemeProvider",
    category: "foundations",
    summary: "为组件树提供 light / dark / system 主题能力。",
    description:
      "ThemeProvider 是文档站和业务应用接入组件库时的第一层包装器，用于同步系统主题偏好并暴露手动切换能力。",
    features: ["支持 system 自动跟随", "通过 useTheme 读取当前主题", "统一管理暗色模式 class"],
    usage: `import { ThemeProvider } from "@yu-cq/apple-ui";

export function App() {
  return <ThemeProvider>{/* app */}</ThemeProvider>;
}`,
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "需要被主题上下文包裹的内容。" },
    ],
  },
  {
    slug: "container",
    name: "Container",
    category: "layout",
    summary: "限制内容宽度并统一页面留白。",
    description:
      "Container 适合用作页面主内容区外壳，帮助不同页面维持一致的宽度、横向边距和垂直节奏。",
    features: ["支持多种最大宽度", "支持统一 padding", "可切换语义标签"],
    usage: `import { Container } from "@yu-cq/apple-ui";

<Container maxWidth="lg" padding="md">
  <PageContent />
</Container>`,
    props: [
      { name: "maxWidth", type: `"sm" | "md" | "lg" | "full"`, defaultValue: `"lg"`, description: "设置内容区域最大宽度。" },
      { name: "padding", type: `"none" | "sm" | "md" | "lg"`, defaultValue: `"md"`, description: "设置容器内边距。" },
      { name: "as", type: `"div" | "main" | "section"`, defaultValue: `"div"`, description: "控制渲染的语义标签。" },
      { name: "className", type: "string", description: "补充自定义布局样式。" },
    ],
  },
  {
    slug: "stack",
    name: "Stack",
    category: "layout",
    summary: "按一维方向组织内容的通用布局组件。",
    description:
      "Stack 是文档和业务页面中最常用的排版组件，适合管理纵向区块、横向操作栏和响应式间距节奏。",
    features: ["支持行列方向切换", "支持 gap / align / justify", "支持自动换行"],
    usage: `import { Stack } from "@yu-cq/apple-ui";

<Stack gap="lg">
  <Header />
  <Content />
</Stack>`,
    props: [
      { name: "direction", type: `"row" | "column"`, defaultValue: `"column"`, description: "控制主轴方向。" },
      { name: "gap", type: `"xs" | "sm" | "md" | "lg"`, defaultValue: `"md"`, description: "设置子项间距。" },
      { name: "align", type: `"start" | "center" | "end" | "stretch"`, defaultValue: `"stretch"`, description: "设置交叉轴对齐方式。" },
      { name: "justify", type: `"start" | "center" | "end" | "between" | "around"`, defaultValue: `"start"`, description: "设置主轴分布方式。" },
      { name: "wrap", type: "boolean", defaultValue: "false", description: "横向布局时是否允许换行。" },
    ],
  },
  {
    slug: "grid",
    name: "Grid",
    category: "layout",
    summary: "适合卡片阵列与信息面板的二维布局容器。",
    description:
      "Grid 面向仪表盘、文档卡片、表单分区等场景，支持固定列数和 Apple 风格响应式栅格。",
    features: ["支持固定列数", "支持响应式模式", "统一 gap 级别"],
    usage: `import { Grid, Card } from "@yu-cq/apple-ui";

<Grid cols={3} gap="lg">
  <Card />
  <Card />
  <Card />
</Grid>`,
    props: [
      { name: "cols", type: "1 | 2 | 3 | 4 | 6 | 12", defaultValue: "1", description: "设置固定栅格列数。" },
      { name: "gap", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "设置栅格间距。" },
      { name: "responsive", type: "boolean", defaultValue: "false", description: "启用后自动在不同断点切换为 1/2/3 列。" },
    ],
  },
  {
    slug: "navigation-bar",
    name: "NavigationBar",
    category: "navigation",
    summary: "模拟 Apple 顶部导航栏与工具栏结构。",
    description:
      "NavigationBar 会根据断点自动使用更紧凑的 iOS 样式，适合页面标题栏、详情页头部和系统型工具栏。",
    features: ["iOS 紧凑模式", "支持左右插槽", "支持标题与副标题"],
    usage: `import { NavigationBar, Button } from "@yu-cq/apple-ui";

<NavigationBar
  title="Settings"
  subtitle="Apple UI"
  left={<Button variant="text">Back</Button>}
/>`,
    props: [
      { name: "title", type: "string", description: "主标题。" },
      { name: "subtitle", type: "string", description: "副标题或辅助说明。" },
      { name: "left", type: "React.ReactNode", description: "左侧操作区内容。" },
      { name: "right", type: "React.ReactNode", description: "右侧操作区内容。" },
      { name: "transparent", type: "boolean", defaultValue: "false", description: "切换为更通透的导航栏表现。" },
    ],
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    category: "navigation",
    summary: "适合 iPadOS / macOS 布局的左侧导航组件。",
    description:
      "Sidebar 用于承载文档、控制台、设置页等多级信息结构，支持活跃态、折叠状态和自定义头部。",
    features: ["支持 activeId 高亮", "支持 href 与 onSelect", "支持折叠与 header 插槽"],
    usage: `import { Sidebar } from "@yu-cq/apple-ui";

<Sidebar
  activeId="general"
  items={[
    { id: "general", label: "General", href: "/settings/general" },
    { id: "notifications", label: "Notifications", href: "/settings/notifications" },
  ]}
/>`,
    props: [
      { name: "items", type: "SidebarItem[]", required: true, description: "导航项数组，支持链接和点击回调。" },
      { name: "activeId", type: "string", description: "当前高亮的菜单项 id。" },
      { name: "onSelect", type: "(id: string) => void", description: "菜单点击回调。" },
      { name: "collapsed", type: "boolean", defaultValue: "false", description: "是否以折叠样式显示。" },
      { name: "header", type: "React.ReactNode", description: "顶部自定义内容，例如搜索或账户信息。" },
    ],
    typeDefinitions: [
      {
        name: "SidebarItem",
        description: "侧边导航单项配置对象。",
        fields: [
          { name: "id", type: "string", required: true, description: "菜单项唯一标识，同时用于 activeId 匹配。" },
          { name: "label", type: "string", required: true, description: "菜单项文案。" },
          { name: "icon", type: "React.ReactNode", description: "菜单项图标。" },
          { name: "href", type: "string", description: "跳转链接；提供后渲染为链接。" },
          { name: "onClick", type: "() => void", description: "点击菜单项时执行的额外动作。" },
        ],
      },
    ],
  },
  {
    slug: "bottom-tab-bar",
    name: "BottomTabBar",
    category: "navigation",
    summary: "移动端单列页面常用的底部导航栏。",
    description:
      "BottomTabBar 对齐 iOS 应用的底部标签栏交互，支持图标活跃态、点击反馈和路由跳转。",
    features: ["支持 active icon", "支持 href / onSelect", "内置按压动画"],
    usage: `import { BottomTabBar } from "@yu-cq/apple-ui";

<BottomTabBar
  activeId="home"
  items={[
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "search", label: "Search", icon: <SearchIcon /> },
  ]}
/>`,
    props: [
      { name: "items", type: "BottomTabItem[]", required: true, description: "底部导航项配置。" },
      { name: "activeId", type: "string", required: true, description: "当前活跃项 id。" },
      { name: "onSelect", type: "(id: string) => void", description: "选择项变化时触发。" },
    ],
    typeDefinitions: [
      {
        name: "BottomTabItem",
        description: "底部标签栏单项配置对象。",
        fields: [
          { name: "id", type: "string", required: true, description: "标签项唯一标识。" },
          { name: "label", type: "string", required: true, description: "标签名称。" },
          { name: "icon", type: "React.ReactNode", required: true, description: "默认状态下展示的图标。" },
          { name: "iconActive", type: "React.ReactNode", description: "激活状态下展示的图标。" },
          { name: "href", type: "string", description: "跳转链接；提供后渲染为链接。" },
          { name: "onClick", type: "() => void", description: "点击标签时执行的动作。" },
        ],
      },
    ],
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "navigation",
    summary: "适合内容切换和分区筛选的标签组件。",
    description:
      "Tabs 提供 underlined 和 segmented 两种风格，适合详情页内容切换、文档信息切片或轻量筛选。",
    features: ["支持 underlined / segmented 风格", "支持禁用项", "带基础键盘语义"],
    usage: `import { Tabs } from "@yu-cq/apple-ui";

<Tabs
  ariaLabel="Profile sections"
  value={tab}
  onChange={setTab}
  items={[
    { value: "overview", label: "Overview" },
    { value: "activity", label: "Activity" },
  ]}
/>`,
    props: [
      { name: "items", type: "TabItem[]", required: true, description: "标签项配置。" },
      { name: "value", type: "string", required: true, description: "当前选中值。" },
      { name: "onChange", type: "(value: string) => void", required: true, description: "切换回调。" },
      { name: "variant", type: `"underlined" | "segmented"`, defaultValue: `"underlined"`, description: "切换视觉样式。" },
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "控制尺寸密度。" },
    ],
    typeDefinitions: [
      {
        name: "TabItem",
        description: "单个标签项的配置。",
        fields: [
          { name: "value", type: "string", required: true, description: "标签项值。" },
          { name: "label", type: "string", required: true, description: "标签项展示文案。" },
          { name: "disabled", type: "boolean", description: "是否禁用该标签。" },
        ],
      },
    ],
  },
  {
    slug: "segmented-control",
    name: "SegmentedControl",
    category: "navigation",
    summary: "贴近 iOS Settings 的分段控制器。",
    description:
      "SegmentedControl 用于一组互斥选项的快速切换，视觉上更接近 Apple 原生设置页与筛选器。",
    features: ["iOS 风格分段切换", "支持键盘左右箭头", "适合列表页筛选和 demo 切换"],
    usage: `import { SegmentedControl } from "@yu-cq/apple-ui";

<SegmentedControl
  aria-label="View mode"
  value={mode}
  onChange={setMode}
  options={[
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
  ]}
/>`,
    props: [
      { name: "options", type: "SegmentedControlOption[]", required: true, description: "分段选项列表。" },
      { name: "value", type: "string", required: true, description: "当前选中项。" },
      { name: "onChange", type: "(value: string) => void", required: true, description: "选项切换回调。" },
      { name: "aria-label", type: "string", description: "提供给辅助技术的名称。" },
    ],
    typeDefinitions: [
      {
        name: "SegmentedControlOption",
        description: "分段控制器单项配置。",
        fields: [
          { name: "value", type: "string", required: true, description: "选项值。" },
          { name: "label", type: "string", required: true, description: "选项显示文案。" },
        ],
      },
    ],
  },
  {
    slug: "card",
    name: "Card",
    category: "data-display",
    summary: "Apple 风格的圆角内容卡片。",
    description:
      "Card 适合承载信息块、统计面板、设置片段和文档示例，是整个组件库最常用的数据承载容器之一。",
    features: ["支持 hover 态", "支持多种 padding", "支持语义标签切换"],
    usage: `import { Card } from "@yu-cq/apple-ui";

<Card padding="md" hover>
  <h2>Revenue</h2>
  <p>$42,000</p>
</Card>`,
    props: [
      { name: "padding", type: `"none" | "sm" | "md" | "lg"`, defaultValue: `"md"`, description: "控制内部留白。" },
      { name: "hover", type: "boolean", defaultValue: "false", description: "启用 hover 抬升感。" },
      { name: "as", type: `"div" | "article" | "section"`, defaultValue: `"div"`, description: "控制渲染标签。" },
    ],
  },
  {
    slug: "list",
    name: "List",
    category: "data-display",
    summary: "适合设置页和信息条目的分组列表。",
    description:
      "List 页面会同时说明 `List`、`ListGroup` 与 `ListItem` 的组合用法，适合构建设置页、资料页和导航面板。",
    features: ["支持分组标题", "支持描述与尾部插槽", "支持跳转与点击行为"],
    usage: `import { List, ListGroup, ListItem } from "@yu-cq/apple-ui";

<List>
  <ListGroup title="Profile">
    <ListItem description="Manage your account">Account</ListItem>
  </ListGroup>
</List>`,
    props: [
      { name: "List.children", type: "React.ReactNode", required: true, description: "由 ListGroup 或 ListItem 组成的内容。" },
      { name: "ListGroup.title", type: "string", description: "列表分组标题。" },
      { name: "ListItem.description", type: "string", description: "条目的次要说明文字。" },
      { name: "ListItem.trailing", type: "React.ReactNode", description: "条目尾部区域，例如状态、箭头或徽标。" },
      { name: "ListItem.href / onClick", type: "string / () => void", description: "让条目成为链接或动作按钮。" },
    ],
    typeDefinitions: [
      {
        name: "ListItemProps",
        description: "单个列表项支持的主要字段。",
        fields: [
          { name: "children", type: "React.ReactNode", required: true, description: "主文案或主内容。" },
          { name: "icon", type: "React.ReactNode", description: "左侧图标。" },
          { name: "trailing", type: "React.ReactNode", description: "右侧尾部区域。" },
          { name: "description", type: "string", description: "副文案。" },
          { name: "href", type: "string", description: "跳转链接。" },
          { name: "onClick", type: "() => void", description: "点击行为。" },
        ],
      },
    ],
  },
  {
    slug: "table",
    name: "Table",
    category: "data-display",
    summary: "适合桌面型数据展示的表格组件集合。",
    description:
      "Table 页面会覆盖 `Table`、`TableHead`、`TableBody`、`TableRow` 与 `TableCell`，适合管理后台和数据看板。",
    features: ["支持横向滚动", "支持行级 hover 样式", "支持表头单元格切换"],
    usage: `import { Table, TableHead, TableBody, TableRow, TableCell } from "@yu-cq/apple-ui";

<Table>
  <TableHead>
    <TableRow>
      <TableCell header>Name</TableCell>
      <TableCell header>Status</TableCell>
    </TableRow>
  </TableHead>
</Table>`,
    props: [
      { name: "Table.children", type: "React.ReactNode", required: true, description: "表格结构内容。" },
      {
        name: "TableRow.onClick",
        type: "(event: React.MouseEvent<HTMLTableRowElement>) => void",
        description: "可选的行级点击回调；更推荐把真正的操作入口放在单元格里的按钮或链接上。",
      },
      { name: "TableCell.header", type: "boolean", defaultValue: "false", description: "为 true 时渲染为 th。" },
    ],
  },
  {
    slug: "button",
    name: "Button",
    category: "inputs",
    summary: "带有 Apple 风格按压动画的主操作按钮。",
    description:
      "Button 适合作为主操作、次级操作和危险操作入口，支持图标、loading 态和原生按钮属性透传。",
    features: ["支持 primary / secondary / text / danger", "支持 loading", "支持左右图标"],
    usage: `import { Button } from "@yu-cq/apple-ui";

<Button variant="primary" size="md">
  Continue
</Button>`,
    props: [
      { name: "variant", type: `"primary" | "secondary" | "text" | "danger"`, defaultValue: `"primary"`, description: "控制按钮视觉层级。" },
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "控制按钮尺寸。" },
      { name: "loading", type: "boolean", defaultValue: "false", description: "显示 loading 状态并自动禁用按钮。" },
      { name: "leftIcon / rightIcon", type: "React.ReactNode", description: "前后图标插槽。" },
    ],
  },
  {
    slug: "input",
    name: "Input",
    category: "inputs",
    summary: "通用单行输入框，支持状态与图标。",
    description:
      "Input 用于登录、搜索、表单信息录入等常见场景，支持 label、错误态、成功态与前后图标。",
    features: ["支持 label", "支持 error / success 状态", "支持原生 input 属性透传"],
    usage: `import { Input } from "@yu-cq/apple-ui";

<Input
  label="Email"
  placeholder="you@example.com"
  error="This field is required"
/>`,
    props: [
      { name: "label", type: "string", description: "输入框标题。" },
      { name: "error", type: "string", description: "错误提示文案，会自动关联 aria-describedby。" },
      { name: "status", type: `"default" | "error" | "success"`, defaultValue: `"default"`, description: "显式控制状态样式。" },
      { name: "leftIcon / rightIcon", type: "React.ReactNode", description: "输入框前后图标。" },
      { name: "inputClassName", type: "string", description: "仅作用于 input 元素的 className。" },
    ],
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "inputs",
    summary: "适合备注和多行内容输入的文本域。",
    description:
      "Textarea 复用了 Input 的状态体系，但更适合说明、备注、评论和长文本编辑场景。",
    features: ["支持 label / error", "支持状态色", "继承原生 textarea 属性"],
    usage: `import { Textarea } from "@yu-cq/apple-ui";

<Textarea
  label="Notes"
  placeholder="Write something..."
  rows={4}
/>`,
    props: [
      { name: "label", type: "string", description: "文本域标题。" },
      { name: "error", type: "string", description: "错误提示文案。" },
      { name: "status", type: `"default" | "error" | "success"`, defaultValue: `"default"`, description: "控制输入状态。" },
    ],
  },
  {
    slug: "select",
    name: "Select",
    category: "inputs",
    summary: "Apple 风格自定义下拉选择器。",
    description:
      "Select 适合中短列表选项切换，提供 label、placeholder、error 和更完整的键盘交互。",
    features: ["支持 placeholder", "支持键盘上下选择", "支持 error 与 aria 关联"],
    usage: `import { Select } from "@yu-cq/apple-ui";

<Select
  label="Region"
  value={region}
  onChange={setRegion}
  options={[
    { value: "cn", label: "China" },
    { value: "us", label: "United States" },
  ]}
/>`,
    props: [
      { name: "value", type: "string", required: true, description: "当前选中值。" },
      { name: "options", type: "SelectOption[]", required: true, description: "可选项数组。" },
      { name: "onChange", type: "(value: string) => void", description: "选项切换回调。" },
      { name: "placeholder", type: "string", defaultValue: `"Select..."`, description: "未选中时显示的占位文本。" },
      { name: "error", type: "string", description: "错误信息。" },
    ],
    typeDefinitions: [
      {
        name: "SelectOption",
        description: "下拉选择的单项配置。",
        fields: [
          { name: "value", type: "string", required: true, description: "选项值。" },
          { name: "label", type: "string", required: true, description: "选项显示文案。" },
        ],
      },
    ],
  },
  {
    slug: "switch",
    name: "Switch",
    category: "inputs",
    summary: "符合 Apple 视觉习惯的开关组件。",
    description:
      "Switch 适合二元配置开关，如通知、定位、自动同步等系统级偏好项。",
    features: ["使用 switch 语义", "支持 disabled", "要求提供 aria-label"],
    usage: `import { Switch } from "@yu-cq/apple-ui";

<Switch checked={enabled} onChange={setEnabled} aria-label="Enable sync" />`,
    props: [
      { name: "checked", type: "boolean", required: true, description: "当前开关状态。" },
      { name: "onChange", type: "(checked: boolean) => void", description: "状态变化回调。" },
      { name: "disabled", type: "boolean", defaultValue: "false", description: "禁用开关交互。" },
      { name: "aria-label", type: "string", required: true, description: "为辅助技术提供名称。" },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "inputs",
    summary: "适合多选场景的复选框。",
    description:
      "Checkbox 支持受控用法和可选 label，适合偏好项、多选列表和批量操作确认。",
    features: ["受控组件", "支持 label", "透传原生 input 属性"],
    usage: `import { Checkbox } from "@yu-cq/apple-ui";

<Checkbox checked={accepted} onChange={setAccepted} label="I agree" />`,
    props: [
      { name: "checked", type: "boolean", required: true, description: "当前是否选中。" },
      { name: "onChange", type: "(checked: boolean) => void", description: "选中状态变化时触发。" },
      { name: "label", type: "React.ReactNode", description: "复选框右侧文案。" },
    ],
  },
  {
    slug: "radio",
    name: "Radio",
    category: "inputs",
    summary: "适合互斥选项的单选组组件。",
    description:
      "Radio 通过 options 批量描述选项，适合支付方式、展示模式、语言偏好等单选场景。",
    features: ["整组受控", "使用 radiogroup 语义", "支持全局 disabled"],
    usage: `import { Radio } from "@yu-cq/apple-ui";

<Radio
  name="plan"
  value={plan}
  onChange={setPlan}
  options={[
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
  ]}
/>`,
    props: [
      { name: "name", type: "string", required: true, description: "单选组名称。" },
      { name: "value", type: "string", required: true, description: "当前选中值。" },
      { name: "options", type: "RadioOption[]", required: true, description: "候选选项。" },
      { name: "onChange", type: "(value: string) => void", description: "切换回调。" },
    ],
    typeDefinitions: [
      {
        name: "RadioOption",
        description: "单选组件的单个候选项。",
        fields: [
          { name: "value", type: "string", required: true, description: "选项值。" },
          { name: "label", type: "React.ReactNode", required: true, description: "选项显示内容。" },
        ],
      },
    ],
  },
  {
    slug: "toast",
    name: "Toast",
    category: "feedback",
    summary: "全局消息提醒体系，包含 ToastProvider 与 toast API。",
    description:
      "Toast 用于轻量通知反馈，通常通过 `ToastProvider` 挂载到应用根部，再通过 `toast.success()` 等方法触发。",
    features: ["支持 success / error / warning / info", "带自动消失", "支持全局 store 触发"],
    usage: `import { ToastProvider, toast } from "@yu-cq/apple-ui";

<ToastProvider>
  <App />
</ToastProvider>

toast.success("Saved successfully");`,
    props: [
      { name: "ToastProvider.children", type: "React.ReactNode", required: true, description: "应用主体内容。" },
      { name: "Toast.toasts", type: "ToastItem[]", required: true, description: "当前展示的消息列表，通常由 Provider 管理。" },
      { name: "ToastItem.duration", type: "number", defaultValue: "3000", description: "单条消息停留时长，单位毫秒。" },
    ],
    typeDefinitions: [
      {
        name: "ToastItem",
        description: "单条 Toast 消息对象。",
        fields: [
          { name: "id", type: "string", required: true, description: "消息唯一标识。" },
          { name: "message", type: "string", required: true, description: "消息内容。" },
          { name: "type", type: `"success" | "error" | "warning" | "info" | "default"`, description: "消息类型。" },
          { name: "duration", type: "number", description: "自动消失时间，单位毫秒。" },
        ],
      },
    ],
  },
  {
    slug: "modal",
    name: "Modal",
    category: "feedback",
    summary: "带焦点管理的 Apple 风格模态框。",
    description:
      "Modal 适合确认、表单补充和高优先级流程中断场景，支持标题、描述、Esc 关闭和焦点陷阱。",
    features: ["支持标题和描述", "支持 overlay click 关闭", "支持焦点陷阱与焦点恢复"],
    usage: `import { Modal } from "@yu-cq/apple-ui";

<Modal open={open} onClose={() => setOpen(false)} title="Delete file">
  <div>Are you sure?</div>
</Modal>`,
    props: [
      { name: "open", type: "boolean", required: true, description: "控制模态框显示与隐藏。" },
      { name: "onClose", type: "() => void", required: true, description: "关闭模态框时触发。" },
      { name: "title", type: "string", description: "模态框标题。" },
      { name: "description", type: "string", description: "辅助说明文字。" },
      { name: "closeOnOverlayClick", type: "boolean", defaultValue: "true", description: "是否允许点击遮罩关闭。" },
    ],
  },
  {
    slug: "drawer",
    name: "Drawer",
    category: "feedback",
    summary: "从边缘滑出的抽屉层。",
    description:
      "Drawer 适合移动端筛选器、补充表单和二级信息流，支持不同方向进入和基础无障碍行为。",
    features: ["支持 bottom / left / right", "带入场滑动动画", "支持 Esc 与焦点陷阱"],
    usage: `import { Drawer } from "@yu-cq/apple-ui";

<Drawer open={open} onClose={() => setOpen(false)} placement="right" title="Filters">
  <FilterPanel />
</Drawer>`,
    props: [
      { name: "open", type: "boolean", required: true, description: "控制抽屉显示状态。" },
      { name: "onClose", type: "() => void", required: true, description: "关闭抽屉时触发。" },
      { name: "placement", type: `"bottom" | "left" | "right"`, defaultValue: `"bottom"`, description: "抽屉出现方向。" },
      { name: "title", type: "string", description: "抽屉标题。" },
    ],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "feedback",
    summary: "轻量级悬浮提示。",
    description:
      "Tooltip 适合解释按钮含义、字段状态和图标行为，在 hover 与 focus 时显示补充信息。",
    features: ["支持四个方向", "支持 hover / focus 触发", "带轻量入场动画"],
    usage: `import { Tooltip, Button } from "@yu-cq/apple-ui";

<Tooltip content="Create a new item">
  <Button>New</Button>
</Tooltip>`,
    props: [
      { name: "content", type: "React.ReactNode", required: true, description: "提示内容。" },
      { name: "children", type: "React.ReactNode", required: true, description: "触发 tooltip 的元素。" },
      { name: "placement", type: `"top" | "bottom" | "left" | "right"`, defaultValue: `"top"`, description: "提示出现位置。" },
    ],
  },
  {
    slug: "alert",
    name: "Alert",
    category: "feedback",
    summary: "页面内的状态提示块。",
    description:
      "Alert 适合在页面上下文中表达信息、成功、警告和错误状态，不会像 toast 一样自动消失。",
    features: ["支持四种语义变体", "支持 alert / status role", "适合内联反馈"],
    usage: `import { Alert } from "@yu-cq/apple-ui";

<Alert variant="success" title="Saved" description="Your changes were applied." />`,
    props: [
      { name: "variant", type: `"info" | "success" | "warning" | "error"`, defaultValue: `"info"`, description: "提示类型。" },
      { name: "title", type: "string", description: "主提示内容。" },
      { name: "description", type: "React.ReactNode", description: "补充说明内容。" },
      { name: "role", type: `"alert" | "status"`, defaultValue: `"alert"`, description: "无障碍播报级别。" },
    ],
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "display",
    summary: "支持图片和字符回退的头像组件。",
    description:
      "Avatar 适合个人资料、消息列表和团队协作场景，支持图片、alt 文本和 fallback initials。",
    features: ["支持图片与 fallback", "支持三种尺寸", "提供 img 语义标识"],
    usage: `import { Avatar } from "@yu-cq/apple-ui";

<Avatar src="/user.png" alt="Jane Doe" fallback="JD" size="md" />`,
    props: [
      { name: "src", type: "string | null", description: "头像图片地址。" },
      { name: "alt", type: "string", description: "图片替代文本。" },
      { name: "fallback", type: "string", description: "加载失败或无图时显示的回退字符。" },
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "头像尺寸。" },
    ],
  },
  {
    slug: "badge",
    name: "Badge",
    category: "display",
    summary: "体积小、强调状态的徽标组件。",
    description:
      "Badge 常用于列表状态、数量标识、版本标记和轻量标签信息。",
    features: ["支持五种变体", "体积轻", "适合状态和数量提醒"],
    usage: `import { Badge } from "@yu-cq/apple-ui";

<Badge variant="success">Active</Badge>`,
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "徽标内容。" },
      { name: "variant", type: `"default" | "primary" | "success" | "warning" | "danger"`, defaultValue: `"default"`, description: "徽标视觉风格。" },
    ],
  },
  {
    slug: "tag",
    name: "Tag",
    category: "display",
    summary: "适合筛选词和可移除关键词的标签组件。",
    description:
      "Tag 相比 Badge 更适合承载可交互或可移除内容，如搜索过滤项、已选条件和分类标签。",
    features: ["支持移除行为", "适合轻量筛选器", "和 List / Input 组合良好"],
    usage: `import { Tag } from "@yu-cq/apple-ui";

<Tag onRemove={() => removeTag("Design")}>Design</Tag>`,
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "标签内容。" },
      { name: "onRemove", type: "() => void", description: "提供后会显示移除操作。" },
    ],
  },
  {
    slug: "divider",
    name: "Divider",
    category: "display",
    summary: "用于划分内容层次的分割线。",
    description:
      "Divider 可用于横向或纵向分隔，也支持带标签的分割形式，适合卡片内部或页面区块之间。",
    features: ["支持横竖方向", "支持标签文案", "使用 separator 语义"],
    usage: `import { Divider } from "@yu-cq/apple-ui";

<Divider label="Advanced" />`,
    props: [
      { name: "orientation", type: `"horizontal" | "vertical"`, defaultValue: `"horizontal"`, description: "控制分割线方向。" },
      { name: "label", type: "string", description: "分割线中间的文本。" },
    ],
  },
  {
    slug: "glass-panel",
    name: "GlassPanel",
    category: "display",
    summary: "提供 Apple 玻璃拟态背景的容器。",
    description:
      "GlassPanel 是构建 visionOS、搜索浮层和 Apple 风格面板的关键基元，提供透明度、模糊和阴影。",
    features: ["支持不同模糊等级", "适合承载浮层与面板", "可叠加到渐变背景上"],
    usage: `import { GlassPanel } from "@yu-cq/apple-ui";

<GlassPanel blur="lg" className="p-6">
  <Content />
</GlassPanel>`,
    props: [
      { name: "blur", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "控制背景模糊程度。" },
      { name: "className", type: "string", description: "扩展额外视觉样式。" },
    ],
  },
  {
    slug: "spinner",
    name: "Spinner",
    category: "loading",
    summary: "轻量级旋转加载器。",
    description:
      "Spinner 适合局部 loading 状态，如按钮内部、卡片局部刷新和异步操作等待。",
    features: ["支持三种尺寸", "带 status 语义", "适合与文本并排使用"],
    usage: `import { Spinner } from "@yu-cq/apple-ui";

<Spinner size="md" aria-label="Loading dashboard" />`,
    props: [
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "加载器尺寸。" },
      { name: "aria-label", type: "string", defaultValue: `"Loading"`, description: "对辅助技术暴露的说明。" },
    ],
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "loading",
    summary: "用于内容尚未加载完成时的占位骨架。",
    description:
      "Skeleton 适合在卡片、列表和详情页预加载时维持布局稳定，减少界面跳动感。",
    features: ["支持自定义宽高", "适合组合成复杂占位布局", "默认无障碍隐藏"],
    usage: `import { Skeleton, Stack } from "@yu-cq/apple-ui";

<Stack gap="sm">
  <Skeleton width="60%" height={20} />
  <Skeleton width="100%" height={64} />
</Stack>`,
    props: [
      { name: "width", type: "string | number", description: "骨架宽度。" },
      { name: "height", type: "string | number", description: "骨架高度。" },
      { name: "className", type: "string", description: "补充形状样式。" },
    ],
  },
  {
    slug: "progress",
    name: "Progress",
    category: "loading",
    summary: "带数值语义的进度条。",
    description:
      "Progress 适合文件上传、任务完成度和引导步骤进度反馈，使用 progressbar 语义。",
    features: ["支持 max", "支持 aria-label", "带进度动画"],
    usage: `import { Progress } from "@yu-cq/apple-ui";

<Progress value={64} max={100} aria-label="Upload progress" />`,
    props: [
      { name: "value", type: "number", required: true, description: "当前进度值。" },
      { name: "max", type: "number", defaultValue: "100", description: "最大值。" },
      { name: "aria-label", type: "string", defaultValue: `"Progress"`, description: "对辅助技术的描述。" },
    ],
  },
  {
    slug: "command-palette",
    name: "CommandPalette",
    category: "advanced",
    summary: "用于 Cmd + K 风格快速动作的命令面板。",
    description:
      "CommandPalette 适合后台、编辑器和效率工具，支持关键词搜索、键盘上下导航和 Enter 执行动作。",
    features: ["关键词过滤", "ArrowUp / ArrowDown / Enter 交互", "带焦点陷阱"],
    usage: `import { CommandPalette } from "@yu-cq/apple-ui";

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  items={[
    { id: "new-file", label: "New file", onSelect: createFile },
  ]}
/>`,
    props: [
      { name: "open", type: "boolean", required: true, description: "控制面板显示状态。" },
      { name: "onClose", type: "() => void", required: true, description: "关闭面板时触发。" },
      { name: "items", type: "CommandItem[]", required: true, description: "可执行命令列表。" },
      { name: "searchPlaceholder", type: "string", defaultValue: `"Search..."`, description: "搜索框占位文本。" },
    ],
    typeDefinitions: [
      {
        name: "CommandItem",
        description: "命令面板中的单条命令配置。",
        fields: [
          { name: "id", type: "string", required: true, description: "命令唯一标识。" },
          { name: "label", type: "string", required: true, description: "命令名称。" },
          { name: "keywords", type: "string[]", description: "用于搜索匹配的关键词。" },
          { name: "icon", type: "React.ReactNode", description: "命令图标。" },
          { name: "onSelect", type: "() => void", required: true, description: "选中命令后执行的动作。" },
        ],
      },
    ],
  },
  {
    slug: "spotlight-search",
    name: "SpotlightSearch",
    category: "advanced",
    summary: "接近 macOS Spotlight 的全屏搜索面板。",
    description:
      "SpotlightSearch 更偏搜索结果浏览体验，支持外部搜索回调、结果列表和键盘导航。",
    features: ["全屏搜索体验", "外部 onSearch", "支持结果副标题"],
    usage: `import { SpotlightSearch } from "@yu-cq/apple-ui";

<SpotlightSearch
  open={open}
  onClose={() => setOpen(false)}
  onSearch={setQuery}
  results={results}
/>`,
    props: [
      { name: "open", type: "boolean", required: true, description: "是否打开 Spotlight 面板。" },
      { name: "onClose", type: "() => void", required: true, description: "关闭面板时触发。" },
      { name: "results", type: "SpotlightResult[]", required: true, description: "要展示的搜索结果。" },
      { name: "onSearch", type: "(query: string) => void", description: "搜索词变化回调。" },
      { name: "searchPlaceholder", type: "string", defaultValue: `"Search"`, description: "搜索输入占位文本。" },
    ],
    typeDefinitions: [
      {
        name: "SpotlightResult",
        description: "Spotlight 搜索结果项。",
        fields: [
          { name: "id", type: "string", required: true, description: "结果唯一标识。" },
          { name: "title", type: "string", required: true, description: "结果标题。" },
          { name: "subtitle", type: "string", description: "结果副标题。" },
          { name: "icon", type: "React.ReactNode", description: "结果图标。" },
          { name: "onSelect", type: "() => void", required: true, description: "点击结果时触发。" },
        ],
      },
    ],
  },
  {
    slug: "context-menu",
    name: "ContextMenu",
    category: "advanced",
    summary: "支持右键、键盘和长按的上下文菜单。",
    description:
      "ContextMenu 适合文件、列表项和卡片上的辅助操作入口，支持分割线、禁用项和基础键盘导航。",
    features: ["支持右键打开", "支持触摸长按", "支持上下方向键切换"],
    usage: `import { ContextMenu } from "@yu-cq/apple-ui";

<ContextMenu
  items={[
    { id: "rename", label: "Rename", onClick: renameItem },
    { id: "divider", label: "", divider: true },
    { id: "delete", label: "Delete", onClick: deleteItem },
  ]}
>
  <Card>Right click me</Card>
</ContextMenu>`,
    props: [
      { name: "items", type: "ContextMenuItem[]", required: true, description: "菜单项配置，支持 divider 和 disabled。" },
      { name: "children", type: "React.ReactNode", required: true, description: "触发上下文菜单的目标元素。" },
    ],
    typeDefinitions: [
      {
        name: "ContextMenuItem",
        description: "上下文菜单项对象。",
        fields: [
          { name: "id", type: "string", required: true, description: "菜单项唯一标识。" },
          { name: "label", type: "string", required: true, description: "菜单项名称。" },
          { name: "icon", type: "React.ReactNode", description: "菜单项图标。" },
          { name: "disabled", type: "boolean", description: "是否禁用该菜单项。" },
          { name: "onClick", type: "() => void", description: "点击菜单项时执行的动作。" },
          { name: "divider", type: "boolean", description: "是否将该项渲染为分隔线。" },
        ],
      },
    ],
  },
  {
    slug: "floating-toolbar",
    name: "FloatingToolbar",
    category: "advanced",
    summary: "用于编辑器和可视化工具的悬浮操作条。",
    description:
      "FloatingToolbar 适合富文本、设计工具和批量操作栏，默认悬浮于页面底部或顶部。",
    features: ["支持多个固定位置", "天然适合组合按钮", "使用 toolbar 语义"],
    usage: `import { FloatingToolbar, Button } from "@yu-cq/apple-ui";

<FloatingToolbar position="bottom-center">
  <Button size="sm">Share</Button>
  <Button size="sm" variant="secondary">Export</Button>
</FloatingToolbar>`,
    props: [
      { name: "position", type: `"bottom-center" | "bottom-right" | "top-center"`, defaultValue: `"bottom-center"`, description: "悬浮工具栏定位。" },
      { name: "children", type: "React.ReactNode", required: true, description: "工具栏按钮或控件内容。" },
    ],
  },
];

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug);
}

export function getGroupedComponentDocs() {
  return categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    items: componentDocs.filter((doc) => doc.category === category),
  }));
}
