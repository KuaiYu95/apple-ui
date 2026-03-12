"use client";

import { useAppleBreakpoint } from "@/hooks/useAppleBreakpoint";
import {
  Card,
  Container,
  Grid,
  List,
  ListGroup,
  ListItem,
  NavigationBar,
  Sidebar,
  Stack,
  Switch,
} from "@/components";

export function SettingsPage() {
  const platform = useAppleBreakpoint();

  const content = (
    <List className="max-w-xl">
      <ListGroup title="General">
        <ListItem description="Appearance, language, date & time">
          General
        </ListItem>
        <ListItem description="AirDrop, Handoff, Continuity Camera">
          AirDrop & Handoff
        </ListItem>
      </ListGroup>
      <ListGroup title="Privacy & Security">
        <ListItem description="Location services, contacts, photos">
          Privacy
        </ListItem>
        <ListItem
          description="App permissions, system services"
          trailing={
            <Switch
              aria-label="Analytics"
              checked
              onChange={() => {}}
            />
          }
        >
          Analytics
        </ListItem>
      </ListGroup>
    </List>
  );

  if (platform === "ios") {
    return (
      <div className="min-h-screen bg-[var(--color-apple-bg-secondary)]">
        <NavigationBar title="Settings" />
        <Container className="py-4">{content}</Container>
      </div>
    );
  }

  if (platform === "ipad") {
    return (
      <div className="min-h-screen bg-[var(--color-apple-bg-secondary)]">
        <NavigationBar title="Settings" />
        <Container className="py-4">
          <Grid cols={2} gap="lg" responsive>
            <Card padding="none">
              <Sidebar
                items={[
                  { id: "general", label: "General" },
                  { id: "privacy", label: "Privacy" },
                  { id: "notifications", label: "Notifications" },
                ]}
              />
            </Card>
            <Card padding="md">{content}</Card>
          </Grid>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-apple-bg)]">
      <Container className="py-6">
        <Stack direction="row" gap="lg">
          <Card padding="none" className="w-64 shrink-0">
            <Sidebar
              items={[
                { id: "general", label: "General" },
                { id: "privacy", label: "Privacy" },
                { id: "notifications", label: "Notifications" },
                { id: "advanced", label: "Advanced" },
              ]}
            />
          </Card>
          <Card padding="lg" className="flex-1">
            <Stack gap="md">
              <h2 className="text-lg font-semibold">General</h2>
              {content}
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
