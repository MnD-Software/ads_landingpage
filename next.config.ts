import type { NextConfig } from "next";

const cpanelExport = process.env.CPANEL_EXPORT === "true";
const config: NextConfig = {
  poweredByHeader: false,
  ...(cpanelExport ? {
    output: "export" as const,
    basePath: "/order",
    assetPrefix: "/order",
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default config;
