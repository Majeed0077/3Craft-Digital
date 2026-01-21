"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(2, 6, 23, 0.55)",
        backdropFilter: "blur(18px) saturate(1.15)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: 88 }}
        >
          <Link
            href="#hero"
            underline="none"
            color="inherit"
            sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "999px",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Image
                src="/Image/3-mark-logo-design.png"
                alt="3Craft Digital logo"
                width={60}
                height={60}
                priority
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "#f9fafb" }}
              >
                3Craft Digital
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "#6b7280",
                }}
              >
                Design that demands attention
              </Typography>
            </Box>
          </Link>

          <Stack
            direction="row"
            spacing={2.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  fontWeight: 600,
                  position: "relative",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              href="#contact"
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.92), rgba(29,78,216,0.92))",
                boxShadow: "0 14px 34px rgba(15, 23, 42, 0.45)",
                "&:hover": {
                  background: "rgba(29, 78, 216, 0.95)",
                },
              }}
            >
              Start a Project
            </Button>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                width: 44,
                height: 44,
                borderRadius: "12px",
                border: "1px solid #1f2937",
                background: "rgba(2, 6, 23, 0.6)",
              }}
              aria-label="Open menu"
            >
              <Box
                sx={{
                  width: 18,
                  height: 2,
                  borderRadius: "999px",
                  background: "#e5e7eb",
                  position: "relative",
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    width: 18,
                    height: 2,
                    borderRadius: "999px",
                    background: "#e5e7eb",
                  },
                  "&::before": { top: -6 },
                  "&::after": { top: 6 },
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "rgba(2, 6, 23, 0.9)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Stack spacing={2}>
            <List sx={{ p: 0 }}>
              {NAV_ITEMS.map((item) => (
                <ListItemButton
                  key={item.href}
                  component="a"
                  href={item.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { background: "rgba(59, 130, 246, 0.12)" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
            <Button
              href="#contact"
              variant="contained"
              onClick={() => setOpen(false)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.92), rgba(29,78,216,0.92))",
              }}
            >
              Start a Project
            </Button>
          </Stack>
        </Container>
      </Drawer>
    </Box>
  );
}
