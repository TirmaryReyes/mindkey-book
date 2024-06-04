'use client';

import { useEffect } from 'react';

const PinterestTag = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://s.pinimg.com/ct/core.js';
    script.onload = () => {
      window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments));
      };
      window.pintrk.queue = [];
      window.pintrk.version = '3.0';
      window.pintrk('load', '2614262213837', { em: '<user_email_address>' });
      window.pintrk('page');
    };

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src="https://ct.pinterest.com/v3/?event=init&tid=2614262213837&pd[em]=<hashed_email_address>&noscript=1"
      />
    </noscript>
  );
};

export default PinterestTag;
