import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.onlysignals.www",
  appName: "OnlySignals",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
