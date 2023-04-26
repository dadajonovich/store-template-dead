import { useEffect, useRef, useCallback } from 'react';

const useAccordion = (selectSwitch) => {
  const elementRef = useRef();

  const getTotalScrollHeight = useCallback((element) => {
    let totalHeight = element.scrollHeight;
    for (let i = 0; i < element.children.length; i++) {
      totalHeight += getTotalScrollHeight(element.children[i]);
    }
    return totalHeight;
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      element.style.maxHeight = selectSwitch
        ? getTotalScrollHeight(element) + 'px'
        : '0';
      element.style.overflow = 'hidden';
      element.style.transition = 'max-height 0.25s ease-in-out';
    }
  }, [selectSwitch, getTotalScrollHeight]);

  return [elementRef];
};

export default useAccordion;
