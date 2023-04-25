import { useEffect, useRef, useReducer, useCallback } from 'react';

const useAccordion = () => {
  const [selectSwitch, setSelectSwitch] = useReducer(
    (selectSwitch) => !selectSwitch,
    false
  );
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
    }
  }, [selectSwitch, getTotalScrollHeight]);

  return [elementRef, setSelectSwitch];
};

export default useAccordion;
