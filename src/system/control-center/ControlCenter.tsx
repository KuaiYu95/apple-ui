"use client";

import { GlassPanel, Stack, Switch } from "@/components";

function ControlRow(props: { label: string; description?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="text-[15px]">{props.label}</div>
        {props.description ? (
          <div className="text-[12px] text-[var(--color-apple-text-tertiary)]">
            {props.description}
          </div>
        ) : null}
      </div>
      <Switch
        checked
        onChange={() => {}}
        aria-label={props.label}
      />
    </div>
  );
}

export function ControlCenter() {
  return (
    <div className="flex min-h-[320px] items-center justify-center bg-[var(--color-apple-bg-secondary)] py-8">
      <GlassPanel className="flex max-w-xl flex-wrap gap-4 p-4">
        <Stack gap="sm" className="w-40">
          <div className="text-[13px] text-[var(--color-apple-text-tertiary)]">
            Connectivity
          </div>
          <ControlRow label="Wi‑Fi" description="Home 5G" />
          <ControlRow label="Bluetooth" description="On" />
        </Stack>
        <Stack gap="sm" className="w-40">
          <div className="text-[13px] text-[var(--color-apple-text-tertiary)]">
            Focus
          </div>
          <ControlRow label="Do Not Disturb" />
          <ControlRow label="Sleep" />
        </Stack>
      </GlassPanel>
    </div>
  );
}

