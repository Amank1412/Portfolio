"use client";

import Script from "next/script";

export function Analytics() {
  return (
    <>
      <Script id="lemon-squeezy">{`window.lemonSqueezyAffiliateConfig = { store: "portfolio" };`}</Script>
      <Script src="https://lmsqueezy.com/affiliate.js" defer></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2QZC4DVDMN`}
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2QZC4DVDMN');
        `}
      </Script>
    </>
  );
}
