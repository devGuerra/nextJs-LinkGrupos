import React from 'react';
import { useRouter } from 'next/router';
import AdSense from 'react-adsense';

export const GetParam = (key) => {
  const router = useRouter();
  const queryList = router.query;
  const result = queryList[key];
  return result;
};

export const ads = (size) => {
  if (process.browser) {
    // Client-side-only code
    const { href } = window.location;
    if (href.includes('gerazap')) {
      switch (size) {
        case 'smallBanner':
          return (
            <AdSense.Google
              class="adsbygoogle"
              style={{ display: 'block', width: '300px', height: '250px' }}
              client="ca-pub-2270636537108959"
              slot="5480228173"
              format=""
              responsive=""
            />
          );
        case 'banner':
          return (
            <AdSense.Google
              class="adsbygoogle"
              style={{
                display: 'block',
                width: window.innerWidth,
                height: '90px',
              }}
              client="ca-pub-2270636537108959"
              slot="9000794686"
              format=""
              responsive=""
            />
          );
        default:
          return window.innerWidth < 768 ? (
            <AdSense.Google
              class="adsbygoogle"
              style={{ display: 'block', width: '300px', height: '250px' }}
              client="ca-pub-2270636537108959"
              slot="9252076129"
              format=""
              responsive=""
            />
          ) : (
            <AdSense.Google
              class="adsbygoogle"
              style={{
                display: 'block',
                width: window.innerWidth,
                height: '90px',
              }}
              client="ca-pub-2270636537108959"
              slot="6037847552"
              format=""
              responsive=""
            />
          );
      }
    }
  }
};
