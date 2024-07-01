import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { bsc } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "8b4cdf4d2dbeee4e5a4a316c78a08ad0";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Lumox Studio",
  description: "We are a gaming studio",
  url: "https://lumoxstudio.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [bsc] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
