"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Badge,
  BottomTabBar,
  Button,
  Card,
  Checkbox,
  CommandPalette,
  Container,
  ContextMenu,
  Divider,
  Drawer,
  FloatingToolbar,
  GlassPanel,
  Grid,
  Input,
  List,
  ListGroup,
  ListItem,
  Modal,
  NavigationBar,
  Progress,
  Radio,
  SegmentedControl,
  Select,
  Sidebar,
  Skeleton,
  Spinner,
  SpotlightSearch,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tag,
  Textarea,
  ToastProvider,
  Tooltip,
  toast,
} from "@/components";
import {
  Bell,
  ChevronRight,
  CreditCard,
  Grid3X3,
  Home,
  Search,
  Settings,
  Sparkles,
  User,
  Wallet,
} from "lucide-react";

type ComponentDocPreviewProps = {
  slug: string;
};

function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[28px] border border-[var(--color-apple-text-tertiary)]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,242,247,0.9))] p-5 dark:bg-[linear-gradient(180deg,rgba(28,28,30,0.95),rgba(0,0,0,0.98))]">
      {children}
    </div>
  );
}

function ThemeProviderPreview() {
  return (
    <PreviewFrame>
      <Stack gap="md">
        <Alert
          variant="info"
          title="主题提供器"
          description="在应用根节点包裹一次，然后通过 useTheme() 读取或切换主题。"
        />
        <GlassPanel className="p-4">
          <Stack direction="row" gap="sm" align="center" justify="between">
            <div>
              <p className="text-sm font-medium">当前策略</p>
              <p className="text-xs text-[var(--color-apple-text-tertiary)]">light / dark / system</p>
            </div>
            <Badge variant="primary">系统</Badge>
          </Stack>
        </GlassPanel>
      </Stack>
    </PreviewFrame>
  );
}

function ToastPreview() {
  return (
    <ToastProvider>
      <PreviewFrame>
        <Stack gap="md" className="min-h-[180px]">
          <p className="text-sm text-[var(--color-apple-text-secondary)]">
            点击按钮后，消息会出现在当前页面右下区域，方便直接看到提醒效果。
          </p>
          <Stack direction="row" gap="sm" wrap>
            <Button onClick={() => toast.success("保存成功")}>成功消息</Button>
            <Button variant="secondary" onClick={() => toast.info("同步进行中")}>
              信息消息
            </Button>
            <Button variant="danger" onClick={() => toast.error("删除失败")}>
              错误消息
            </Button>
          </Stack>
        </Stack>
      </PreviewFrame>
    </ToastProvider>
  );
}

export function ComponentDocPreview({ slug }: ComponentDocPreviewProps) {
  const [toggle, setToggle] = useState(true);
  const [tab, setTab] = useState("overview");
  const [segment, setSegment] = useState("list");
  const [selectValue, setSelectValue] = useState("design");
  const [radioValue, setRadioValue] = useState("weekly");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  useEffect(() => {
    if (slug !== "command-palette") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slug]);

  switch (slug) {
    case "theme-provider":
      return <ThemeProviderPreview />;
    case "container":
      return (
        <PreviewFrame>
          <Container maxWidth="md" padding="md" className="rounded-2xl bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-sm)]">
            <Stack gap="sm">
              <p className="text-sm font-medium">内容容器</p>
              <p className="text-sm text-[var(--color-apple-text-secondary)]">
                Container 可以让页面内容在大屏上保持居中和舒适宽度。
              </p>
            </Stack>
          </Container>
        </PreviewFrame>
      );
    case "stack":
      return (
        <PreviewFrame>
          <Stack gap="sm">
            <Card padding="sm">头部区块</Card>
            <Card padding="sm">内容区块</Card>
            <Card padding="sm">底部区块</Card>
          </Stack>
        </PreviewFrame>
      );
    case "grid":
      return (
        <PreviewFrame>
          <Grid cols={3} gap="sm">
            <Card padding="sm">01</Card>
            <Card padding="sm">02</Card>
            <Card padding="sm">03</Card>
          </Grid>
        </PreviewFrame>
      );
    case "navigation-bar":
      return (
        <PreviewFrame>
          <NavigationBar
            title="账户"
            subtitle="Apple UI"
            left={<Button variant="text">返回</Button>}
            right={<Button variant="text">编辑</Button>}
          />
        </PreviewFrame>
      );
    case "sidebar":
      return (
        <PreviewFrame>
          <div className="max-w-[280px]">
            <Sidebar
              activeId="wallet"
              items={[
                { id: "dashboard", label: "仪表盘", icon: <Home className="h-4 w-4" /> },
                { id: "wallet", label: "钱包", icon: <Wallet className="h-4 w-4" /> },
                { id: "settings", label: "设置", icon: <Settings className="h-4 w-4" /> },
              ]}
            />
          </div>
        </PreviewFrame>
      );
    case "bottom-tab-bar":
      return (
        <PreviewFrame>
          <div className="mx-auto max-w-[320px] overflow-hidden rounded-[32px] border border-black/10 bg-[var(--color-apple-bg)] shadow-[var(--shadow-apple-md)]">
            <div className="p-4 text-sm text-[var(--color-apple-text-secondary)]">
              iPhone 风格底部标签栏预览
            </div>
            <div className="min-h-[220px] bg-[var(--color-apple-bg-secondary)] p-4" />
            <BottomTabBar
              className="!static !inset-auto"
              activeId="search"
              items={[
                { id: "home", label: "首页", icon: <Home className="h-4 w-4" /> },
                { id: "search", label: "搜索", icon: <Search className="h-4 w-4" /> },
                { id: "profile", label: "我的", icon: <User className="h-4 w-4" /> },
              ]}
            />
          </div>
        </PreviewFrame>
      );
    case "tabs":
      return (
        <PreviewFrame>
          <Stack gap="md">
            <Tabs
              ariaLabel="Preview tabs"
              value={tab}
              onChange={setTab}
              items={[
                { value: "overview", label: "概览" },
                { value: "activity", label: "动态" },
                { value: "files", label: "文件" },
              ]}
            />
            <Card padding="md">当前标签：{tab}</Card>
          </Stack>
        </PreviewFrame>
      );
    case "segmented-control":
      return (
        <PreviewFrame>
          <Stack gap="md">
            <SegmentedControl
              aria-label="View mode"
              value={segment}
              onChange={setSegment}
              options={[
                { value: "list", label: "列表" },
                { value: "grid", label: "网格" },
                { value: "focus", label: "专注" },
              ]}
            />
            <p className="text-sm text-[var(--color-apple-text-secondary)]">当前选中：{segment}</p>
          </Stack>
        </PreviewFrame>
      );
    case "card":
      return (
        <PreviewFrame>
          <Card hover>
            <Stack gap="xs">
              <p className="text-sm font-medium">季度收入</p>
              <p className="text-2xl font-semibold">$42,800</p>
              <Badge variant="success">+18%</Badge>
            </Stack>
          </Card>
        </PreviewFrame>
      );
    case "list":
      return (
        <PreviewFrame>
          <List>
            <ListGroup title="偏好设置">
              <ListItem icon={<Bell className="h-4 w-4" />} trailing={<ChevronRight className="h-4 w-4" />}>
                通知
              </ListItem>
              <ListItem icon={<CreditCard className="h-4 w-4" />} description="Visa 尾号 3204">
                支付方式
              </ListItem>
            </ListGroup>
          </List>
        </PreviewFrame>
      );
    case "table":
      return (
        <PreviewFrame>
          <div className="overflow-visible">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell header>名称</TableCell>
                <TableCell header>状态</TableCell>
                <TableCell header>套餐</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Apple ID</TableCell>
                <TableCell>启用中</TableCell>
                <TableCell>专业版</TableCell>
              </TableRow>
              <TableRow onClick={() => {}}>
                <TableCell>iCloud Drive</TableCell>
                <TableCell>同步中</TableCell>
                <TableCell>家庭版</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
        </PreviewFrame>
      );
    case "button":
      return (
        <PreviewFrame>
          <Stack direction="row" gap="sm" wrap>
            <Button>主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="text">文本按钮</Button>
            <Button variant="danger">危险按钮</Button>
          </Stack>
        </PreviewFrame>
      );
    case "input":
      return (
        <PreviewFrame>
          <Input label="邮箱" placeholder="you@example.com" leftIcon={<User className="h-4 w-4" />} />
        </PreviewFrame>
      );
    case "textarea":
      return (
        <PreviewFrame>
          <Textarea label="备注" rows={4} placeholder="补充更多说明..." />
        </PreviewFrame>
      );
    case "select":
      return (
        <PreviewFrame>
          <Stack gap="sm" className="max-w-xl">
            <p className="text-sm text-[var(--color-apple-text-secondary)]">
              这个示例使用了更长的选项文案，点击后可以直接检查下拉面板宽度是否跟随选择器。
            </p>
            <Select
            label="组件分类"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: "design", label: "设计系统与视觉规范" },
              { value: "product", label: "产品体验与交互流程设计" },
              { value: "engineering", label: "工程实现与组件封装能力" },
            ]}
            />
          </Stack>
        </PreviewFrame>
      );
    case "switch":
      return (
        <PreviewFrame>
          <Stack direction="row" justify="between" align="center">
            <div>
              <p className="text-sm font-medium">Automatic updates</p>
              <p className="text-xs text-[var(--color-apple-text-tertiary)]">自动保持应用为最新版本。</p>
            </div>
            <Switch checked={toggle} onChange={setToggle} aria-label="自动更新" />
          </Stack>
        </PreviewFrame>
      );
    case "checkbox":
      return (
        <PreviewFrame>
          <Checkbox checked={toggle} onChange={setToggle} label="通过邮件接收产品更新" />
        </PreviewFrame>
      );
    case "radio":
      return (
        <PreviewFrame>
          <Radio
            name="digest"
            value={radioValue}
            onChange={setRadioValue}
            options={[
              { value: "daily", label: "每日摘要" },
              { value: "weekly", label: "每周摘要" },
              { value: "never", label: "从不发送" },
            ]}
          />
        </PreviewFrame>
      );
    case "toast":
      return <ToastPreview />;
    case "modal":
      return (
        <PreviewFrame>
          <Button onClick={() => setModalOpen(true)}>打开模态框</Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="删除工作区"
            description="这个操作无法撤销。"
          >
            <Stack direction="row" gap="sm" justify="end">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                取消
              </Button>
              <Button variant="danger" onClick={() => setModalOpen(false)}>
                删除
              </Button>
            </Stack>
          </Modal>
        </PreviewFrame>
      );
    case "drawer":
      return (
        <PreviewFrame>
          <Button onClick={() => setDrawerOpen(true)}>打开抽屉</Button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="right" title="快捷设置">
            <Stack gap="md">
              <Switch checked={toggle} onChange={setToggle} aria-label="无线网络" />
              <Input label="网络名称" defaultValue="Apple UI Lab" />
            </Stack>
          </Drawer>
        </PreviewFrame>
      );
    case "tooltip":
      return (
        <PreviewFrame>
          <Stack gap="sm" align="center" className="min-h-[120px] justify-center">
            <p className="text-sm text-[var(--color-apple-text-secondary)]">
              将鼠标悬停在按钮上即可看到提示层。
            </p>
            <Tooltip content="创建一个新的工作区">
              <Button>悬停查看提示</Button>
            </Tooltip>
          </Stack>
        </PreviewFrame>
      );
    case "alert":
      return (
        <PreviewFrame>
          <Alert variant="warning" title="存储空间即将满额" description="请清理空间以保证备份继续运行。" />
        </PreviewFrame>
      );
    case "avatar":
      return (
        <PreviewFrame>
          <Stack direction="row" gap="sm" align="center">
            <Avatar fallback="KY" size="sm" />
            <Avatar fallback="KY" size="md" />
            <Avatar fallback="KY" size="lg" />
          </Stack>
        </PreviewFrame>
      );
    case "badge":
      return (
        <PreviewFrame>
          <Stack direction="row" gap="sm" wrap>
            <Badge>默认</Badge>
            <Badge variant="primary">主要</Badge>
            <Badge variant="success">成功</Badge>
            <Badge variant="warning">警告</Badge>
          </Stack>
        </PreviewFrame>
      );
    case "tag":
      return (
        <PreviewFrame>
          <Stack direction="row" gap="sm" wrap>
            <Tag>设计</Tag>
            <Tag onRemove={() => {}}>工程</Tag>
            <Tag onRemove={() => {}}>研究</Tag>
          </Stack>
        </PreviewFrame>
      );
    case "divider":
      return (
        <PreviewFrame>
          <Stack gap="md">
            <Card padding="sm">通用设置</Card>
            <Divider label="高级选项" />
            <Card padding="sm">自动化</Card>
          </Stack>
        </PreviewFrame>
      );
    case "glass-panel":
      return (
        <PreviewFrame>
          <GlassPanel blur="lg" className="p-6">
            <Stack gap="xs">
              <p className="text-sm font-medium">玻璃面板</p>
              <p className="text-sm text-[var(--color-apple-text-secondary)]">
                适合搜索浮层、悬浮面板和 visionOS 风格布局。
              </p>
            </Stack>
          </GlassPanel>
        </PreviewFrame>
      );
    case "spinner":
      return (
        <PreviewFrame>
          <Stack direction="row" gap="md" align="center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </Stack>
        </PreviewFrame>
      );
    case "skeleton":
      return (
        <PreviewFrame>
          <Stack gap="sm">
            <Skeleton width="40%" height={18} />
            <Skeleton width="100%" height={56} />
            <Skeleton width="72%" height={18} />
          </Stack>
        </PreviewFrame>
      );
    case "progress":
      return (
        <PreviewFrame>
          <Stack gap="sm">
            <Progress value={28} />
            <Progress value={64} />
            <Progress value={92} />
          </Stack>
        </PreviewFrame>
      );
    case "command-palette":
      return (
        <PreviewFrame>
          <Stack gap="sm">
            <p className="text-sm text-[var(--color-apple-text-secondary)]">
              点击按钮，或直接按 <code>Command + K</code> / <code>Ctrl + K</code> 打开命令面板。
            </p>
            <Button onClick={() => setPaletteOpen(true)}>打开命令面板</Button>
          </Stack>
          <CommandPalette
            open={paletteOpen}
            onClose={() => setPaletteOpen(false)}
            items={[
              { id: "create", label: "创建新文件", keywords: ["new", "file"], icon: <Sparkles className="h-4 w-4" />, onSelect: () => setPaletteOpen(false) },
              { id: "settings", label: "打开设置", keywords: ["preferences"], icon: <Settings className="h-4 w-4" />, onSelect: () => setPaletteOpen(false) },
            ]}
          />
        </PreviewFrame>
      );
    case "spotlight-search":
      return (
        <PreviewFrame>
          <Button onClick={() => setSpotlightOpen(true)}>打开聚焦搜索</Button>
          <SpotlightSearch
            open={spotlightOpen}
            onClose={() => setSpotlightOpen(false)}
            results={[
              { id: "dashboard", title: "仪表盘", subtitle: "总览与活动数据", icon: <Grid3X3 className="h-4 w-4" />, onSelect: () => setSpotlightOpen(false) },
              { id: "wallet", title: "钱包", subtitle: "卡片与交易记录", icon: <Wallet className="h-4 w-4" />, onSelect: () => setSpotlightOpen(false) },
            ]}
          />
        </PreviewFrame>
      );
    case "context-menu":
      return (
        <PreviewFrame>
          <ContextMenu
            items={[
              { id: "share", label: "分享", onClick: () => {} },
              { id: "duplicate", label: "复制", onClick: () => {} },
              { id: "divider", label: "divider", divider: true },
              { id: "delete", label: "删除", onClick: () => {} },
            ]}
          >
            <Card padding="md" className="max-w-sm">
              右键或长按这张卡片
            </Card>
          </ContextMenu>
        </PreviewFrame>
      );
    case "floating-toolbar":
      return (
        <PreviewFrame>
          <div className="relative min-h-36">
            <FloatingToolbar
              position="bottom-center"
              className="!absolute !bottom-4 !left-1/2 !right-auto !top-auto"
            >
              <Button size="sm" variant="secondary">分享</Button>
              <Button size="sm">发布</Button>
            </FloatingToolbar>
          </div>
        </PreviewFrame>
      );
    default:
      return (
        <PreviewFrame>
          <p className="text-sm text-[var(--color-apple-text-secondary)]">
            预览即将补充。
          </p>
        </PreviewFrame>
      );
  }
}
