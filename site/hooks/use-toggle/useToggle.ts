import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle: any = () => setValue((t) => !t);
  return [value, toggle, setValue];
};

export { useToggle };
