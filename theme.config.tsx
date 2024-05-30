import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  // logo: <span style={{ fontWeight: "600" }}>Vivakits</span>,
  faviconGlyph: "V",
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
  sidebar: {
    titleComponent: ({ title, type }) => {
      if(title=="Get Started"){
        return <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                    <path d="M22 22L2 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M4 22V9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M20 9.5V13.5M20 22V17.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#1C274C" stroke-width="1.5"/>
                  </svg>  
                  {title}
               </div>
      }if(title=="Components"){
        return <div className="flex items-center gap-2">
                  <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  
                  {title}
               </div>
      }if(title=="Support"){
        return <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="25px" height="25px"  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="12" cy="16" r="1" fill="#1C274C"></circle> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>  
                  {title}
               </div>
      }if(title=="Discover"){
        return <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 0 24 24"><path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z" fill="#1C274C"/></svg>
                  {title}
               </div>
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0
  },
};

export default config;
