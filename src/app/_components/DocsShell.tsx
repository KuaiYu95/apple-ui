import type { ReactNode } from "react";
import { Container } from "@/components";
import { DocsSidebar } from "@/app/_docs/_components/DocsSidebar";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-40px)] bg-[var(--color-apple-bg)] text-[var(--color-apple-text)]">
      <Container padding="none" className="px-4 pb-8 md:px-6">
        <div className="relative">
          <aside
            className="fixed top-6 bottom-6 hidden w-80 md:block"
            style={{
              left: "max(24px, calc(50vw - 600px + 24px))",
            }}
          >
            <DocsSidebar />
          </aside>
          <main className="min-w-0 pt-6 md:pt-8 md:pl-[calc(20rem+1.5rem)]">
            {children}
          </main>
        </div>
      </Container>
    </div>
  );
}
