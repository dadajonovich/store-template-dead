import { useState, useEffect, useRef } from 'react';

function useAccordion(selectSwitch) {
  const [, setHeight] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;

      const clientHeight = element.scrollHeight;
      console.log(clientHeight);
      setHeight(clientHeight);
      element.style.maxHeight = selectSwitch ? clientHeight + 'px' : '0';
    }
  }, [selectSwitch]);

  return [elementRef];
}

export default useAccordion;
