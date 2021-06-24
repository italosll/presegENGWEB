import { useState } from 'react';

import Link from 'next/link';

export default function ButtonFloatWhatsapp() {
  const [isButtonTouched, setIsButtonTouched] = useState(false);

  function click() {
    setIsButtonTouched(true);
    setTimeout(() => {
      setIsButtonTouched(false);
      window.open('https://wa.me/5564992649951', '_blank');
    }, 200);
  }

  return (
    <a
      onClick={() => click()}
      className={`
      h-16 w-16 absolute right-5 bottom-5 p-3 rounded-full bg-green-400 focus:outline-none lg:right-10 lg:bottom-10
      ${isButtonTouched && 'animate-scale-in-out'}
      `}
    >
      <img src="static/icons/whatsappIcon.svg" />
    </a>
  );
}
