"use client";

import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";

export default function ScrollToggle() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToggle = () => {
    if (atTop) {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      window.scrollTo({ top: maxScroll, behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
      onClick={handleScrollToggle}
      className="scroll-toggle"
      sx={{
        position: "fixed",
        right: { xs: 16, md: 28 },
        bottom: { xs: 16, md: 28 },
        width: 48,
        height: 48,
        borderRadius: "999px",
        border: "1px solid rgba(148, 163, 184, 0.35)",
        background: "rgba(2, 6, 23, 0.65)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        boxShadow: "0 12px 28px rgba(2, 6, 23, 0.45)",
        "&:hover": {
          background: "rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 0.55)",
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 24 24"
        sx={{
          width: 20,
          height: 20,
          transform: atTop ? "rotate(180deg)" : "none",
          transition: "transform 0.2s ease",
          fill: "currentColor",
        }}
      >
        <path d="M12 5l6 6-1.4 1.4L13 8.8V20h-2V8.8L7.4 12.4 6 11z" />
      </Box>
    </IconButton>
  );
}
