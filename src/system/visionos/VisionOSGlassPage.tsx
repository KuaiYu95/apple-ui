"use client";

import { motion } from "framer-motion";
import { Container, GlassPanel, Stack } from "@/components";
import { defaultTransition } from "@/lib/motion";

export function VisionOSGlassPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05030a] via-[#050816] to-[#02040a] text-white">
      <Container className="py-10">
        <Stack gap="xl" align="center">
          <Stack gap="sm" align="center">
            <h1 className="text-3xl font-semibold">VisionOS Space</h1>
            <p className="max-w-xl text-center text-[15px] text-white/70">
              Floating glass panels with depth, blur and subtle motion, inspired
              by visionOS.
            </p>
          </Stack>

          <div className="relative h-[340px] w-full max-w-3xl">
            <motion.div
              className="absolute left-8 top-10 w-60"
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={defaultTransition}
            >
              <GlassPanel className="border-white/10 bg-white/8 p-4 text-left shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <Stack gap="sm">
                  <span className="text-[13px] uppercase tracking-wide text-white/60">
                    Focus Mode
                  </span>
                  <span className="text-[15px]">
                    Distractions are minimized. Notifications are delivered
                    quietly.
                  </span>
                </Stack>
              </GlassPanel>
            </motion.div>

            <motion.div
              className="absolute right-6 top-0 w-72"
              initial={{ y: 40, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ...defaultTransition, delay: 0.05 }}
            >
              <GlassPanel className="border-cyan-400/20 bg-cyan-400/10 p-5 text-left shadow-[0_50px_120px_rgba(0,255,255,0.4)]">
                <Stack gap="md">
                  <span className="text-[13px] uppercase tracking-wide text-cyan-200/80">
                    Space widgets
                  </span>
                  <span className="text-[32px] font-semibold leading-tight">
                    72%
                  </span>
                  <span className="text-[13px] text-cyan-50/80">
                    Ambient light • Depth aware • Motion‑responsive
                  </span>
                </Stack>
              </GlassPanel>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-1/2 w-72 -translate-x-1/2"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              <GlassPanel className="border-white/15 bg-black/40 p-4 text-left shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                <Stack gap="xs">
                  <span className="text-[13px] text-white/60">
                    VisionOS UI System
                  </span>
                  <span className="text-[15px] text-white/80">
                    Use GlassPanel, motion variants and 3D‑like layering to
                    build immersive experiences.
                  </span>
                </Stack>
              </GlassPanel>
            </motion.div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

