// components/Footer.tsx
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61576706516191&sk=about_places",
    label: "Facebook",
    path: "M14 8.5h2.2V6h-2.4c-2.3 0-3.8 1.5-3.8 3.9V12H7.5v2.5H10V21h2.9v-6.5h2.3l.4-2.5h-2.7V10c0-.9.5-1.5 1.6-1.5z",
  },
  {
    href: "https://www.instagram.com/3craftdigital/",
    label: "Instagram",
    path: "M16.8 6.8a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zm-4.8 2.2a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8zm0 2.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM17 3h-10C4.8 3 3 4.8 3 7v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.7 14c0 .9-.8 1.7-1.7 1.7H7c-.9 0-1.7-.8-1.7-1.7V7c0-.9.8-1.7 1.7-1.7h10c.9 0 1.7.8 1.7 1.7v10z",
  },
  {
    href: "https://www.linkedin.com/company/3craftdigital/",
    label: "LinkedIn",
    path: "M6.5 9.2H4V20h2.5V9.2zM5.2 4a1.4 1.4 0 1 0 0 2.8A1.4 1.4 0 0 0 5.2 4zM20 13.5c0-2.6-1.4-4.3-3.7-4.3-1.3 0-2.2.7-2.6 1.4V9.2h-2.4V20h2.4v-5.6c0-1.5.6-2.4 1.9-2.4s1.7 1 1.7 2.4V20H20v-6.5z",
  },
  {
    href: "https://behance.net/",
    label: "Behance",
    path: "M9.4 11.6c1.2-.6 1.8-1.5 1.8-2.8 0-2.2-1.6-3.3-4.5-3.3H3v13.5h4.2c3.1 0 5.1-1.3 5.1-3.9 0-1.8-1.2-3-2.9-3.5zM5.6 7.4h1.7c1.1 0 1.8.5 1.8 1.4 0 1-.7 1.5-1.9 1.5H5.6V7.4zm1.8 8.7H5.6v-3.6h1.9c1.4 0 2.3.6 2.3 1.8 0 1.2-.9 1.8-2.3 1.8zm12.6-5.1c-2.6 0-4.4 1.9-4.4 4.6 0 2.8 1.8 4.6 4.7 4.6 2 0 3.5-1 4-2.7h-2.2c-.2.5-.8.9-1.7.9-1.2 0-2-.7-2.1-2h6.2v-.5c0-2.6-1.6-4.9-4.5-4.9zm0 1.8c1.1 0 1.8.6 2 1.7h-4c.2-1.1 1-1.7 2-1.7zm-2.7-4.2h5.4V7h-5.4v1.6z",
  },
];
const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];
export default function Footer() {
  return (
    <Box
      component="footer"
      className="site-footer"
      sx={{
        position: "relative",
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 5 },
        borderTop: "1px solid rgba(148, 163, 184, 0.18)",
        background: "rgba(2, 6, 23, 0.35)",
        backdropFilter: "blur(12px)",
        color: "rgba(255, 255, 255, 0.78)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={1.5}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  background:
                    "linear-gradient(120deg, #ffffff, #93c5fd 55%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                3Craft Digital
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Design + Development Studio crafting brand systems and digital
                experiences.
              </Typography>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.55)" }}>
                Location: NASTP Karachi
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Stack spacing={1.2}>
              <Typography
                variant="overline"
                sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.28em" }}
              >
                Explore
              </Typography>
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Stack spacing={1.6} sx={{ alignItems: "flex-start" }}>
              <Typography
                variant="overline"
                sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.28em" }}
              >
                Connect
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {SOCIAL_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                    aria-label={item.label}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(15, 23, 42, 0.55)",
                      border: "1px solid rgba(148, 163, 184, 0.22)",
                      color: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(8px)",
                      transition:
                      "transform 0.2s ease, border 0.2s ease, background 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        borderColor: "rgba(59, 130, 246, 0.55)",
                        background: "rgba(59, 130, 246, 0.18)",
                      },
                    }}
                  >
                    <Box
                      component="svg"
                      viewBox="0 0 24 24"
                      sx={{ width: 18, height: 18, fill: "currentColor" }}
                    >
                      <path d={item.path} />
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 5,
            pt: 2.5,
            borderTop: "1px solid rgba(148, 163, 184, 0.12)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 1,
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <Typography variant="caption" sx={{ color: "inherit" }}>
            (c) 2025 3Craft Digital. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "inherit" }}>
            Built in Karachi for global brands.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
