import type { ReactNode } from "react";
import { DocsShell } from "@/app/_components/DocsShell";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
