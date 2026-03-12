"use client";

import { useState } from "react";
import { Card, Container, SegmentedControl, Stack } from "@/components";
import { SettingsPage } from "./settings/SettingsPage";
import { WalletPage } from "./wallet/WalletPage";
import { DashboardPage } from "./dashboard/DashboardPage";
import { ControlCenterPage } from "./control-center/ControlCenterPage";
import { VisionOSGlassPage } from "./visionos/VisionOSGlassPage";

type View =
  | "settings"
  | "wallet"
  | "dashboard"
  | "control-center"
  | "visionos";

const OPTIONS: { value: View; label: string }[] = [
  { value: "settings", label: "Settings" },
  { value: "wallet", label: "Wallet" },
  { value: "dashboard", label: "Dashboard" },
  { value: "control-center", label: "Control Center" },
  { value: "visionos", label: "VisionOS" },
];

export function SystemShell() {
  const [view, setView] = useState<View>("settings");

  return (
    <div className="min-h-screen bg-[var(--color-apple-bg)] text-[var(--color-apple-text)]">
      <Container className="py-6">
        <Stack gap="lg">
          <Card padding="md" className="border-[var(--color-apple-border-soft)]">
            <Stack gap="md">
              <Stack direction="row" justify="between" align="center">
                <h1 className="text-xl font-semibold">Apple System Demos</h1>
                <span className="text-[13px] text-[var(--color-apple-text-tertiary)]">
                  Settings, Wallet, Dashboard, Control Center, VisionOS
                </span>
              </Stack>
              <SegmentedControl
                aria-label="System demo"
                options={OPTIONS}
                value={view}
                onChange={(v) => setView(v as View)}
              />
            </Stack>
          </Card>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-apple-border-soft)] bg-[var(--color-apple-bg-secondary)]">
            {view === "settings" && <SettingsPage />}
            {view === "wallet" && <WalletPage />}
            {view === "dashboard" && <DashboardPage />}
            {view === "control-center" && <ControlCenterPage />}
            {view === "visionos" && <VisionOSGlassPage />}
          </div>
        </Stack>
      </Container>
    </div>
  );
}

