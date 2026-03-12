"use client";

import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Tabs,
  Checkbox,
  CommandPalette,
  Container,
  ContextMenu,
  Divider,
  Drawer,
  FloatingToolbar,
  GlassPanel,
  Grid,
  Input,
  List,
  ListGroup,
  ListItem,
  Modal,
  Progress,
  Radio,
  SegmentedControl,
  Select,
  Skeleton,
  Spinner,
  SpotlightSearch,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tag,
  Textarea,
  toast,
  Tooltip,
  useAppleBreakpoint,
  useTheme,
} from "@/components";
import { useState } from "react";

export default function PlaygroundPage() {
  const [segment, setSegment] = useState("one");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const { resolved, setTheme } = useTheme();
  const platform = useAppleBreakpoint();

  return (
    <div className="min-h-screen bg-[var(--color-apple-bg)] text-[var(--color-apple-text)]">
      <header className="border-b border-[var(--color-apple-text-tertiary)]/20 bg-[var(--color-apple-bg)] px-4 py-4">
        <Container maxWidth="lg" padding="none" className="px-4">
          <Stack direction="row" justify="between" align="center">
            <h1 className="text-xl font-semibold">Apple UI Playground</h1>
            <Stack direction="row" gap="sm" align="center">
              <span className="text-sm text-[var(--color-apple-text-tertiary)]">
                {platform}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
              >
                {resolved === "dark" ? "Light" : "Dark"}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <Stack gap="lg">
            <section>
              <h2 className="mb-4 text-lg font-semibold">Layout</h2>
              <Grid cols={1} responsive gap="md">
                <Card padding="md" hover>
                  <p>Card with hover and default padding.</p>
                </Card>
                <Card padding="lg">
                  <p>Card with large padding.</p>
                </Card>
              </Grid>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Buttons</h2>
              <Stack direction="row" gap="sm" wrap>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="text">Text</Button>
                <Button
                  variant="primary"
                  onClick={() => toast.success("Saved")}
                >
                  Toast demo
                </Button>
              </Stack>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Form</h2>
              <Stack gap="md" className="max-w-sm">
                <Input label="Email" placeholder="you@example.com" />
                <div className="flex items-center gap-3">
                  <Switch
                    checked={switchChecked}
                    onChange={setSwitchChecked}
                    aria-label="Toggle option"
                  />
                  <span className="text-[15px]">Switch</span>
                </div>
                <Textarea label="About you" placeholder="Tell us something..." />
                <Tabs
                  ariaLabel="Form context"
                  items={[
                    { value: "profile", label: "Profile" },
                    { value: "security", label: "Security" },
                    { value: "notifications", label: "Notifications" },
                  ]}
                  value={segment}
                  onChange={setSegment}
                />
              </Stack>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Selections</h2>
              <Grid cols={1} responsive gap="md">
                <Select
                  label="Favorite fruit"
                  placeholder="Choose one"
                  value=""
                  options={[
                    { value: "apple", label: "Apple" },
                    { value: "orange", label: "Orange" },
                    { value: "banana", label: "Banana" },
                  ]}
                />
                <div className="flex flex-col gap-2">
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    label="Receive notifications"
                  />
                  <Radio
                    name="plan"
                    value="pro"
                    options={[
                      { value: "free", label: "Free" },
                      { value: "pro", label: "Pro" },
                      { value: "enterprise", label: "Enterprise" },
                    ]}
                    onChange={() => {}}
                  />
                </div>
              </Grid>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Lists & Tables</h2>
              <Grid cols={1} responsive gap="md">
                <List className="max-w-md">
                  <ListGroup title="Settings">
                    <ListItem description="Apple-style list item">
                      General
                    </ListItem>
                    <ListItem description="Account & security">
                      Account
                    </ListItem>
                  </ListGroup>
                </List>
                <Card padding="none">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell header>Name</TableCell>
                        <TableCell header>Status</TableCell>
                        <TableCell header>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Alice</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Admin</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bob</TableCell>
                        <TableCell>Invited</TableCell>
                        <TableCell>Member</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </Grid>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Display & Loading</h2>
              <Stack direction="row" gap="md" align="center" wrap>
                <Avatar fallback="JD" size="sm" />
                <Avatar fallback="AB" size="lg" />
                <Badge variant="primary">Badge</Badge>
                <Badge variant="success">Done</Badge>
                <Tag onRemove={() => {}}>Tag</Tag>
                <Divider className="h-6" />
                <Spinner size="md" />
                <Progress value={60} className="w-32" />
                <Skeleton width={80} height={16} />
              </Stack>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Overlays</h2>
              <Stack direction="row" gap="sm">
                <Button variant="secondary" onClick={() => setModalOpen(true)}>
                  Open Modal
                </Button>
                <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
                  Open Drawer
                </Button>
                <Tooltip content="Tooltip text" placement="top">
                  <Button variant="text">Hover for tooltip</Button>
                </Tooltip>
              </Stack>
              <Alert
                variant="info"
                title="Info"
                description="This is an alert message."
                className="mt-2 max-w-md"
              />
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">Advanced</h2>
              <Stack direction="row" gap="sm" wrap>
                <Button onClick={() => setCmdOpen(true)}>Command Palette</Button>
                <Button onClick={() => setSpotlightOpen(true)}>Spotlight</Button>
                <SegmentedControl
                  aria-label="Playground segmented control"
                  options={[
                    { value: "one", label: "One" },
                    { value: "two", label: "Two" },
                    { value: "three", label: "Three" },
                  ]}
                  value={segment}
                  onChange={setSegment}
                />
              </Stack>
              <div className="mt-4">
                <ContextMenu
                  items={[
                    { id: "share", label: "Share" },
                    { id: "duplicate", label: "Duplicate" },
                    { id: "divider", label: "divider", divider: true },
                    { id: "delete", label: "Delete" },
                  ]}
                >
                  <GlassPanel className="max-w-md p-6">
                    Right click this panel to open a context menu.
                  </GlassPanel>
                </ContextMenu>
              </div>
            </section>
          </Stack>
        </Container>
      </main>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Delete item"
        description="This action cannot be undone."
      >
        <Stack direction="row" gap="sm" justify="end">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setModalOpen(false)}>
            Delete
          </Button>
        </Stack>
      </Modal>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Quick settings"
      >
        <Stack gap="md">
          <Input label="Name" placeholder="Enter name" />
          <Switch
            checked={switchChecked}
            onChange={setSwitchChecked}
            aria-label="Enable feature"
          />
        </Stack>
      </Drawer>

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        items={[
          { id: "new", label: "New File", onSelect: () => setCmdOpen(false) },
          { id: "open", label: "Open Settings", onSelect: () => setCmdOpen(false) },
        ]}
      />

      <SpotlightSearch
        open={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
        results={[
          { id: "dashboard", title: "Dashboard", onSelect: () => setSpotlightOpen(false) },
          { id: "wallet", title: "Wallet", onSelect: () => setSpotlightOpen(false) },
        ]}
      />

      <FloatingToolbar position="bottom-right">
        <Button size="sm">Save</Button>
        <Button size="sm" variant="secondary">Share</Button>
      </FloatingToolbar>
    </div>
  );
}
