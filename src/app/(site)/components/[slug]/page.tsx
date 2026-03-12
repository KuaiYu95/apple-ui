import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Card, Grid, Stack } from "@/components";
import { categoryLabels, componentDocs, getComponentDoc } from "@/app/docs/_data/component-docs";
import { ComponentDocPreview } from "@/app/docs/_components/ComponentDocPreview";

export function generateStaticParams() {
  return componentDocs.map((doc) => ({ slug: doc.slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) notFound();

  const index = componentDocs.findIndex((item) => item.slug === doc.slug);
  const previous = index > 0 ? componentDocs[index - 1] : null;
  const next = index < componentDocs.length - 1 ? componentDocs[index + 1] : null;

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Stack direction="row" gap="sm" align="center" wrap>
          <Badge variant="primary">{categoryLabels[doc.category]}</Badge>
          <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">/components/{doc.slug}</span>
        </Stack>
        <h1 className="text-3xl font-semibold">{doc.name}</h1>
        <p className="max-w-3xl text-[15px] leading-7 text-[var(--color-apple-text-secondary)]">
          {doc.summary}
        </p>
        <p className="max-w-3xl text-[15px] leading-7 text-[var(--color-apple-text-secondary)]">
          {doc.description}
        </p>
      </Stack>

      <Card padding="md">
        <Stack gap="md">
          <h2 className="text-lg font-semibold">实时预览</h2>
          <ComponentDocPreview slug={doc.slug} />
        </Stack>
      </Card>

      <Grid cols={2} gap="lg" responsive>
        <Card padding="md">
          <Stack gap="md">
            <h2 className="text-lg font-semibold">能力说明</h2>
            <ul className="space-y-2 text-[15px] text-[var(--color-apple-text-secondary)]">
              {doc.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </Stack>
        </Card>

        <Card padding="md">
          <Stack gap="md">
            <h2 className="text-lg font-semibold">路由位置</h2>
            <p className="text-[15px] text-[var(--color-apple-text-secondary)]">
              每个组件文档现在都有独立路由，并且可以通过左侧菜单互相跳转。
            </p>
            <div className="rounded-2xl bg-[var(--color-apple-bg-secondary)] px-4 py-3 text-[13px] text-[var(--color-apple-text-tertiary)]">
              当前路由：/components/{doc.slug}
            </div>
          </Stack>
        </Card>
      </Grid>

      <Card padding="md">
        <Stack gap="md">
          <h2 className="text-lg font-semibold">使用示例</h2>
          <pre className="overflow-auto rounded-2xl bg-[var(--color-apple-bg-secondary)] p-4 text-[13px] leading-6 text-[var(--color-apple-text)]">
            <code>{doc.usage}</code>
          </pre>
        </Stack>
      </Card>

      <Card padding="md">
        <Stack gap="md">
          <h2 className="text-lg font-semibold">参数说明</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-apple-text-tertiary)]/15 text-[var(--color-apple-text-tertiary)]">
                  <th className="px-3 py-3 font-medium">参数名</th>
                  <th className="px-3 py-3 font-medium">类型</th>
                  <th className="px-3 py-3 font-medium">默认值</th>
                  <th className="px-3 py-3 font-medium">说明</th>
                </tr>
              </thead>
              <tbody>
                {doc.props.map((prop) => (
                  <tr key={prop.name} className="border-b border-[var(--color-apple-text-tertiary)]/10 align-top">
                    <td className="px-3 py-3 font-mono text-[13px] text-[var(--color-apple-text)]">
                      {prop.name}
                      {prop.required ? <span className="ml-2 text-[var(--color-apple-danger)]">*</span> : null}
                    </td>
                    <td className="px-3 py-3 font-mono text-[13px] text-[var(--color-apple-text-secondary)]">{prop.type}</td>
                    <td className="px-3 py-3 font-mono text-[13px] text-[var(--color-apple-text-tertiary)]">
                      {prop.defaultValue ?? "—"}
                    </td>
                    <td className="px-3 py-3 text-[14px] text-[var(--color-apple-text-secondary)]">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Stack>
      </Card>

      {doc.typeDefinitions?.length ? (
        <Card padding="md">
          <Stack gap="md">
            <h2 className="text-lg font-semibold">类型展开</h2>
            <p className="text-[15px] text-[var(--color-apple-text-secondary)]">
              当参数使用了自定义对象类型时，这里会继续展开该类型的字段定义，方便直接查看完整结构。
            </p>
            <Stack gap="md">
              {doc.typeDefinitions.map((typeDef) => (
                <div
                  key={typeDef.name}
                  className="overflow-hidden rounded-2xl border border-[var(--color-apple-text-tertiary)]/12"
                >
                  <div className="border-b border-[var(--color-apple-text-tertiary)]/12 bg-[var(--color-apple-bg-secondary)] px-4 py-3">
                    <p className="font-mono text-[14px] font-medium text-[var(--color-apple-text)]">
                      {typeDef.name}
                    </p>
                    <p className="mt-1 text-[14px] text-[var(--color-apple-text-secondary)]">
                      {typeDef.description}
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-[var(--color-apple-text-tertiary)]/12 text-[var(--color-apple-text-tertiary)]">
                          <th className="px-3 py-3 font-medium">字段</th>
                          <th className="px-3 py-3 font-medium">类型</th>
                          <th className="px-3 py-3 font-medium">说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {typeDef.fields.map((field) => (
                          <tr key={`${typeDef.name}-${field.name}`} className="border-b border-[var(--color-apple-text-tertiary)]/10 align-top last:border-b-0">
                            <td className="px-3 py-3 font-mono text-[13px] text-[var(--color-apple-text)]">
                              {field.name}
                              {field.required ? <span className="ml-2 text-[var(--color-apple-danger)]">*</span> : null}
                            </td>
                            <td className="px-3 py-3 font-mono text-[13px] text-[var(--color-apple-text-secondary)]">
                              {field.type}
                            </td>
                            <td className="px-3 py-3 text-[14px] text-[var(--color-apple-text-secondary)]">
                              {field.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </Stack>
          </Stack>
        </Card>
      ) : null}

      <Grid cols={2} gap="lg" responsive>
        {previous ? (
          <Card padding="md">
            <Stack gap="sm">
              <p className="text-[13px] text-[var(--color-apple-text-tertiary)]">上一个组件</p>
              <Link href={`/components/${previous.slug}`} className="text-base font-medium text-[var(--color-apple-text)] hover:text-[var(--color-apple-primary)]">
                {previous.name}
              </Link>
            </Stack>
          </Card>
        ) : <div />}

        {next ? (
          <Card padding="md">
            <Stack gap="sm" align="end">
              <p className="text-[13px] text-[var(--color-apple-text-tertiary)]">下一个组件</p>
              <Link href={`/components/${next.slug}`} className="text-base font-medium text-[var(--color-apple-text)] hover:text-[var(--color-apple-primary)]">
                {next.name}
              </Link>
            </Stack>
          </Card>
        ) : <div />}
      </Grid>

      <Stack direction="row" gap="sm" wrap>
        <Link
          href="/components"
          className="inline-flex min-h-[44px] items-center rounded-full bg-[var(--color-apple-text)] px-5 text-sm font-medium text-[var(--color-apple-bg)] transition hover:opacity-90"
        >
          返回组件目录
        </Link>
        <Link
          href="/systems"
          className="inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-medium text-[var(--color-apple-text-secondary)] transition hover:bg-black/5 hover:text-[var(--color-apple-text)] dark:hover:bg-white/10"
        >
          前往系统示例
        </Link>
      </Stack>
    </Stack>
  );
}
