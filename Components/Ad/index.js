import React, { useEffect, useState } from 'react';

const Ad = ({ slotId, width, height }) => {
  const [largura, setLargura] = useState(0);
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    setLargura(window.screen.width);
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'inline-block',
        // width: `${largura > 600 ? width : 250}px`,
        // height: `${largura > 600 ? height : 250}px`,
        width: `100%`,
        height: `90px`,
        background: '#fff',
        margin: '10px auto ',
      }}
      data-ad-client="ca-pub-2270636537108959"
      data-ad-slot={slotId}
    />
  );
};

export default Ad;
