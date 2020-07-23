import React, { useEffect } from 'react';

const Ad = ({ slotId, width, height }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'inline-block',
        width: `${width}px`,
        height: `${height}px`,
      }}
      data-ad-client="ca-pub-2270636537108959"
      data-ad-slot={slotId}
    />
  );
};

export default Ad;
