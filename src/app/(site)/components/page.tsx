import Link from "next/link";
import { Badge, Card, Grid, Stack } from "@/components";
import { getGroupedComponentDocs } from "@/app/_docs/_data/component-docs";

export default function ComponentsPage() {
  const groups = getGroupedComponentDocs();

  return (
    <Stack gap="lg" className="gap-8">
      <Stack gap="sm">
        <h1 className="text-3xl font-semibold">组件</h1>
        <p className="max-w-3xl text-[15px] leading-7 text-[var(--color-apple-text-secondary)]">
          每个组件现在都拥有独立的文档页面，包含功能说明、实时预览、核心入参和使用示例。你可以从左侧菜单直接切换，也可以从下面的分类目录进入。
        </p>
      </Stack>

      {groups.map((group) => (
        <Stack key={group.category} gap="md">
          <Stack direction="row" gap="sm" align="center">
            <h2 className="text-xl font-semibold">{group.label}</h2>
            <Badge>{group.items.length}</Badge>
          </Stack>

          <Grid cols={2} gap="lg" responsive>
            {group.items.map((item) => (
              <Link key={item.slug} href={`/components/${item.slug}`} className="block">
                <Card padding="md" hover className="h-full">
                  <Stack gap="sm">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[14px] leading-6 text-[var(--color-apple-text-secondary)]">
                      {item.summary}
                    </p>
                    <p className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                      /components/{item.slug}
                    </p>
                  </Stack>
                </Card>
              </Link>
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
}
