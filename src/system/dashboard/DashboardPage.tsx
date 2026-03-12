"use client";

import {
  Card,
  Container,
  Grid,
  Progress,
  Stack,
} from "@/components";

function StatWidget(props: { label: string; value: string; trend: string }) {
  return (
    <Card padding="md">
      <Stack gap="xs">
        <span className="text-[13px] text-[var(--color-apple-text-secondary)]">
          {props.label}
        </span>
        <span className="text-xl font-semibold">{props.value}</span>
        <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
          {props.trend}
        </span>
      </Stack>
    </Card>
  );
}

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--color-apple-bg-secondary)]">
      <Container className="py-6">
        <Stack gap="lg">
          <Stack gap="sm">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-[var(--color-apple-text-secondary)]">
              Widget-based Apple-style dashboard layout.
            </p>
          </Stack>

          <Grid cols={3} responsive gap="md">
            <StatWidget label="Balance" value="$12,430" trend="+4.2% vs last week" />
            <StatWidget label="Expenses" value="$2,310" trend="+1.1% vs last week" />
            <StatWidget label="Savings rate" value="36%" trend="+2.3 pts vs last week" />
          </Grid>

          <Grid cols={2} responsive gap="md">
            <Card padding="md">
              <Stack gap="md">
                <Stack direction="row" justify="between" align="center">
                  <h2 className="text-lg font-semibold">Monthly budget</h2>
                  <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                    18 days remaining
                  </span>
                </Stack>
                <Progress value={64} />
              </Stack>
            </Card>

            <Card padding="md">
              <Stack gap="md">
                <h2 className="text-lg font-semibold">Focus</h2>
                <p className="text-[var(--color-apple-text-secondary)]">
                  Widgets are arranged in a responsive grid. Future versions can
                  enable drag & resize interactions backed by Zustand layout state.
                </p>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}

