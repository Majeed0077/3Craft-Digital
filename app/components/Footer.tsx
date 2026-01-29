// components/Footer.tsx
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

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
    href: "https://x.com/3Craftdigital",
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.57l-5.144-6.738-5.904 6.738H1.574l7.73-8.835L1.5 2.25h6.736l4.646 6.106L18.244 2.25zm-1.161 17.52h1.833L7.24 4.126H5.274l11.809 15.644z",
  },
  {
    href: "mailto:info@3craftdigital.com",
    label: "Email",
    path: "M4 6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v11c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 20 4 18.9 4 17.5v-11zm2.4-.5l5.6 3.9L17.6 6H6.4zm11.6 2.7l-5.5 3.8c-.3.2-.7.2-1 0L6 8.7V17.5c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5V8.7z",
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
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, rgba(3, 7, 19, 0.96), rgba(3, 7, 19, 1))",
        color: "rgba(255, 255, 255, 0.9)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
              gap: { xs: 3, md: 5 },
            }}
          >
            <Box>
              <Stack spacing={1.5}>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: "0.32em",
                    color: "rgba(148, 163, 184, 0.7)",
                  }}
                >
                  LET’S WORK TOGETHER
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#f8fafc",
                    fontSize: "clamp(2rem, 5vw, 2.4rem)",
                    lineHeight: 1.25,
                  }}
                >
                  Design that demands attention.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(226, 232, 240, 0.85)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  3Craft Digital builds brand systems and digital experiences, built for clarity, precision,
                  and long-term value.
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "rgba(226, 232, 240, 0.8)",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "rgba(226, 232, 240, 0.75)" }}>
                    NASTP Karachi
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                  <Button
                    href="#contact"
                    variant="contained"
                    sx={{
                      width: { xs: "100%", sm: "fit-content" },
                      maxWidth: { sm: 360 },
                      minWidth: { sm: 240 },
                      height: 50,
                      borderRadius: 12,
                      textTransform: "none",
                      fontWeight: 600,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      background:
                        "linear-gradient(180deg, rgba(46, 75, 145, 0.95), rgba(28, 54, 110, 0.95))",
                      boxShadow: "0 10px 22px rgba(7, 16, 36, 0.45)",
                      transition:
                        "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(180deg, rgba(58, 92, 170, 0.98), rgba(36, 66, 130, 0.98))",
                        borderColor: "rgba(255, 255, 255, 0.22)",
                        boxShadow: "0 14px 28px rgba(15, 30, 60, 0.45)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Start a project
                  </Button>
                  <Link
                    href="#portfolio"
                    underline="none"
                    sx={{
                      color: "rgba(236, 240, 255, 0.9)",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      justifyContent: { xs: "center", sm: "flex-start" },
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#ffffff",
                      },
                      "&:hover .cta-arrow": {
                        transform: "translateX(4px)",
                      },
                      "& .cta-underline": {
                        width: 0,
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.5)",
                        transition: "width 0.2s ease",
                        display: "block",
                      },
                      "&:hover .cta-underline": {
                        width: "100%",
                      },
                    }}
                  >
                    <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
                      <span>See work</span>
                      <span className="cta-underline" />
                    </Box>
                    <Box component="span" className="cta-arrow" sx={{ transition: "transform 0.2s ease" }}>
                      →
                    </Box>
                  </Link>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ alignSelf: { md: "stretch" } }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: { xs: 2.5, md: 3 },
                  "@media (max-width: 360px)": {
                    gridTemplateColumns: "1fr",
                  },
                }}
              >
                <Box>
                  <Stack spacing={1}>
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: "0.35em", color: "rgba(148, 163, 184, 0.75)" }}
                    >
                      Explore
                    </Typography>
                    <Stack spacing={0.8} alignItems="flex-start">
                      {NAV_LINKS.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          underline="none"
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.75,
                            color: "rgba(226, 232, 240, 0.85)",
                            fontWeight: 500,
                            transition: "color 0.2s ease, transform 0.2s ease",
                            "&:hover": {
                              color: "#ffffff",
                              transform: "translateX(2px)",
                            },
                          }}
                        >
                          <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            sx={{
                              width: 12,
                              height: 12,
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: 2,
                              opacity: 0.6,
                            }}
                          >
                            <path d="M8 6l6 6-6 6" />
                          </Box>
                          {item.label}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
                <Box>
                  <Stack spacing={1}>
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: "0.35em", color: "rgba(148, 163, 184, 0.75)" }}
                    >
                      Connect
                    </Typography>
                    <Stack spacing={0.8} alignItems="flex-start">
                      {SOCIAL_LINKS.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          underline="none"
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.75,
                            color: "rgba(226, 232, 240, 0.85)",
                            fontWeight: 500,
                            transition: "color 0.2s ease, transform 0.2s ease",
                            "&:hover": {
                              color: "#ffffff",
                              transform: "translateX(2px)",
                            },
                          }}
                        >
                          <Box
                            component="svg"
                            viewBox="0 0 24 24"
                            sx={{ width: 14, height: 14, fill: "currentColor", opacity: 0.8 }}
                          >
                            <path d={item.path} />
                          </Box>
                          {item.label}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              pt: 4,
              pb: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              fontSize: "0.78rem",
              color: "rgba(148, 163, 184, 0.75)",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 0.4, sm: 1 }}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography variant="caption" sx={{ color: "inherit" }}>
                © 2025 3Craft Digital. All rights reserved.
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(148, 163, 184, 0.82)", display: { xs: "none", sm: "inline" } }}
              >
                •
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(197, 206, 224, 0.85)" }}
              >
                From Karachi for global brands.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
