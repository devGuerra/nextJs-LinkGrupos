import React, { useEffect } from 'react';

const Ad = ({ slotId, width, height }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-2270636537108959"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-slot={slotId}
    />
  );
};

export default Ad;
