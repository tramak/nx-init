import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

export const useWindowClick = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const clickHandler = () => {
      timeout = setTimeout(() => {
        setOpen(false);
      }, 0);
    };

    if (isOpen) {
      window.addEventListener('click', clickHandler);
      window.addEventListener('touchend', clickHandler);
    }

    return () => {
      window.removeEventListener('click', clickHandler);
      window.removeEventListener('touchend', clickHandler);
      clearTimeout(timeout);
    }
  }, [ isOpen, setOpen ]);

  return [isOpen, setOpen];
};
