import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  // logo: <span style={{ fontWeight: "600" }}>Vivakits</span>,
  logo:(
    <>
      <Image src="/vivakits.png" width={150} height={80} alt="Vivakits" />
    </>
  ),
  project: {
    link: "https://github.com/vivasoft-ltd",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/vivasoft-ltd",
  footer: {
    text: (
       <span>
        Vivakits {new Date().getFullYear()} ©{' '}
        <a href="https://vivasoftltd.com" target="_blank">
          powered by Vivasoft Limited.
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Vivakits",
    };
  },
};

export default config;
