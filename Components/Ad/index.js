import React, { useEffect } from 'react';

const Ad = ({ slotId, width, height }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <ins
      data-ad-slot={slotId}
      data-full-width-responsive="true"
      data-ad-format="auto"
      data-ad-client="ca-pub-2270636537108959"
      style={{ display: 'block' }}
      className="adsbygoogle"
    />
  );
};

export default Ad;
