"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(NAV_ITEMS[0].href);
  const lastHrefRef = useRef<string>(NAV_ITEMS[0].href);

  const handleNavClick = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      window.history.pushState(null, "", href);
      setActiveHref(href);
    }
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => {
      const el = document.querySelector<HTMLElement>(item.href);
      return { href: item.href, el };
    }).filter((item): item is { href: string; el: HTMLElement } => Boolean(item.el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const nextHref = `#${visible.target.id}`;
        if (lastHrefRef.current !== nextHref) {
          lastHrefRef.current = nextHref;
          setActiveHref(nextHref);
        }
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0.1, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section.el));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background:
          "linear-gradient(180deg, rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.55))",
        backdropFilter: "blur(18px) saturate(1.2)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: 90, gap: 3 }}
        >
          <Link
            href="#hero"
            underline="none"
            color="inherit"
            onClick={handleNavClick("#hero")}
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Box
              sx={{
                width: 62,
                height: 62,
                borderRadius: "999px",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
                border: "1px solid rgba(148, 163, 184, 0.25)",
                background: "rgba(15, 23, 42, 0.35)",
                boxShadow: "0 12px 28px rgba(2, 6, 23, 0.35)",
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
                sx={{
                  fontWeight: 700,
                  color: "#f9fafb",
                  letterSpacing: "0.02em",
                }}
              >
                3Craft Digital
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(148, 163, 184, 0.85)",
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
                onClick={handleNavClick(item.href)}
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  position: "relative",
                  paddingBottom: "6px",
                  "&:hover": { color: "#fff" },
                  ...(activeHref === item.href && {
                    color: "#fff",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "10%",
                      right: "10%",
                      bottom: 0,
                      height: 2,
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.95), rgba(59,130,246,0))",
                    },
                  }),
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
                borderRadius: "999px",
                px: 2.4,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.92), rgba(29,78,216,0.92))",
                boxShadow: "0 14px 34px rgba(15, 23, 42, 0.45)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,1), rgba(29,78,216,1))",
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
                border: "1px solid rgba(148, 163, 184, 0.25)",
                background: "rgba(2, 6, 23, 0.55)",
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
            background: "rgba(2, 6, 23, 0.95)",
            backdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
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
                  onClick={(event) => {
                    handleNavClick(item.href)(event);
                    setOpen(false);
                  }}
                  sx={{
                    borderRadius: "12px",
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { background: "rgba(59, 130, 246, 0.12)" },
                    ...(activeHref === item.href && {
                      background: "rgba(59, 130, 246, 0.2)",
                    }),
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
                borderRadius: "999px",
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
