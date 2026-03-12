"use client";

import {
  Card,
  Container,
  Grid,
  GlassPanel,
  Progress,
  Stack,
  Switch,
} from "@/components";

export function ControlCenterPage() {
  return (
    <div className="min-h-screen bg-[var(--color-apple-bg-secondary)]">
      <Container className="py-6">
        <Stack gap="lg">
          <Stack gap="sm">
            <h1 className="text-2xl font-semibold">Control Center</h1>
            <p className="text-[var(--color-apple-text-secondary)]">
              macOS-style quick controls with glass panels and toggles.
            </p>
          </Stack>

          <Grid cols={3} responsive gap="md">
            <GlassPanel className="p-4">
              <Stack gap="md">
                <Stack direction="row" justify="between" align="center">
                  <span className="text-[15px] font-medium">Wi‑Fi</span>
                  <Switch
                    aria-label="Wi‑Fi"
                    checked
                    onChange={() => {}}
                  />
                </Stack>
                <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                  Home Wi‑Fi • Connected
                </span>
              </Stack>
            </GlassPanel>

            <GlassPanel className="p-4">
              <Stack gap="md">
                <Stack direction="row" justify="between" align="center">
                  <span className="text-[15px] font-medium">Bluetooth</span>
                  <Switch
                    aria-label="Bluetooth"
                    checked
                    onChange={() => {}}
                  />
                </Stack>
                <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                  Magic Keyboard, AirPods
                </span>
              </Stack>
            </GlassPanel>

            <GlassPanel className="p-4">
              <Stack gap="md">
                <span className="text-[15px] font-medium">Display</span>
                <Progress value={72} />
                <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                  Brightness
                </span>
              </Stack>
            </GlassPanel>
          </Grid>

          <Card padding="md">
            <Stack gap="sm">
              <span className="text-[15px] font-medium">Now Playing</span>
              <span className="text-[13px] text-[var(--color-apple-text-secondary)]">
                Music controls, AirPlay targets and other tiles can be added as
                separate widgets in this layout.
              </span>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}

