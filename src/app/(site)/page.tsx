"use client";

import { Card, Stack } from "@/components";
import Link from "next/link";

export default function HomePage() {
  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <h1 className="text-3xl font-semibold">Apple UI 组件文档</h1>
        <p className="max-w-2xl text-[15px] text-[var(--color-apple-text-secondary)]">
          面向 Apple 风格 Web 界面的组件系统文档，包含设计令牌、组件说明、实时预览和系统级示例页面。
        </p>
      </Stack>

      <Stack direction="row" gap="sm" wrap>
        <Link
          href="/components"
          className="inline-flex min-h-[44px] items-center rounded-full bg-[var(--color-apple-primary)] px-5 text-sm font-medium text-white transition hover:opacity-90"
        >
          浏览组件
        </Link>
        <Link
          href="/systems"
          className="inline-flex min-h-[44px] items-center rounded-full bg-[var(--color-apple-bg-secondary)] px-5 text-sm font-medium text-[var(--color-apple-text)] transition hover:opacity-90"
        >
          查看系统示例
        </Link>
      </Stack>

      <Card padding="md" className="max-w-2xl">
        <h2 className="mb-3 text-lg font-semibold">快速开始</h2>
        <ol className="list-decimal space-y-2 pl-5 text-[15px] text-[var(--color-apple-text-secondary)]">
          <li>使用你熟悉的包管理器安装组件库依赖。</li>
          <li>在应用根部包裹 <code>ThemeProvider</code> 和 <code>ToastProvider</code>。</li>
          <li>
            使用 <code>Container</code>、<code>Stack</code>、<code>Grid</code> 等布局组件，以及
            <code>Button</code>、<code>Card</code>、<code>Tabs</code> 等基础组件搭建页面。
          </li>
        </ol>
      </Card>

      <Card padding="md" className="max-w-2xl">
        <h2 className="mb-3 text-lg font-semibold">仓库文档</h2>
        <p className="text-[15px] text-[var(--color-apple-text-secondary)]">
          仓库内还保留了一份更完整的中文组件说明：
          <code>apple-ui/docs/COMPONENTS.zh-CN.md</code>
          ，适合离线查看组件职责、API 概览和优化建议。
        </p>
      </Card>
    </Stack>
  );
}
