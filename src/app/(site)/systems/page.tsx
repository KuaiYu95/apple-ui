"use client";

import { Card, Grid, Stack } from "@/components";
import { SystemShell } from "@/system/SystemShell";

export default function SystemsPage() {
  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <h1 className="text-2xl font-semibold">系统示例</h1>
        <p className="text-[15px] text-[var(--color-apple-text-secondary)]">
          由组件组合而成的高层级体验示例，包括设置页、钱包、仪表盘、控制中心和 visionOS 风格玻璃界面。
        </p>
      </Stack>

      <Grid cols={1} gap="lg">
        <Card padding="none">
          <SystemShell />
        </Card>
      </Grid>
    </Stack>
  );
}
