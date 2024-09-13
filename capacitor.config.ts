import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.onlysignals.vite",
  appName: "OnlySignals",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
