"use client";

import { motion } from "framer-motion";
import {
  Card,
  Container,
  Grid,
  List,
  ListGroup,
  ListItem,
  Stack,
} from "@/components";
import { defaultTransition } from "@/lib/motion";

const cards = [
  {
    id: "primary",
    name: "Apple Card",
    number: "•••• 1234",
    balance: "$2,340.21",
    color: "from-[#ff9f0a] via-[#ff3b30] to-[#bf5af2]",
  },
  {
    id: "savings",
    name: "Savings",
    number: "•••• 5678",
    balance: "$8,120.00",
    color: "from-[#34c759] via-[#30d158] to-[#0a84ff]",
  },
];

const transactions = [
  { id: 1, title: "Apple Store", subtitle: "Yesterday", amount: "-$129.00" },
  { id: 2, title: "App Store", subtitle: "2 days ago", amount: "-$9.99" },
  { id: 3, title: "Refund", subtitle: "3 days ago", amount: "+$29.00" },
];

export function WalletPage() {
  return (
    <div className="min-h-screen bg-[var(--color-apple-bg-secondary)]">
      <Container className="py-6">
        <Stack gap="lg">
          <Stack gap="sm">
            <h1 className="text-2xl font-semibold">Wallet</h1>
            <p className="text-[var(--color-apple-text-secondary)]">
              Multi-layer Apple Wallet card stack with recent activity.
            </p>
          </Stack>

          <div className="relative h-64">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute inset-0"
                style={{ top: index * 24 }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={defaultTransition}
              >
                <Card
                  padding="lg"
                  className="h-full overflow-hidden rounded-2xl border-0 bg-gradient-to-br text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                  style={{ backgroundImage: undefined }}
                >
                  <Stack className="h-full" justify="between">
                    <Stack gap="xs">
                      <span className="text-sm opacity-80">{card.name}</span>
                      <span className="text-xl font-semibold">
                        {card.number}
                      </span>
                    </Stack>
                    <Stack gap="xs" align="end">
                      <span className="text-xs opacity-80">Current Balance</span>
                      <span className="text-2xl font-semibold">
                        {card.balance}
                      </span>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </div>

          <Grid cols={1} responsive gap="md">
            <Card padding="none">
              <List>
                <ListGroup title="Recent Activity">
                  {transactions.map((tx) => (
                    <ListItem
                      key={tx.id}
                      description={tx.subtitle}
                      trailing={<span className="font-medium">{tx.amount}</span>}
                    >
                      {tx.title}
                    </ListItem>
                  ))}
                </ListGroup>
              </List>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
}
