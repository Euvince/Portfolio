import type { NextConfig } from "next";

const config: NextConfig = {
  // "/" n'a pas de page : on redirige vers la langue par défaut.
  async redirects() {
    return [{ source: "/", destination: "/fr", permanent: false }];
  },
};

export default config;
