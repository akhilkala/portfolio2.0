import { useState } from "react";

export interface InputState {
  value: string;
  handleReset: () => void;
  props: {
    value: string;
    onChange: (e: any) => void;
  };
}

const useInputState = (init?: string): InputState => {
  const initialState = init || "";

  const [value, setValue] = useState<string>(initialState);
  const handleChange = (e: any): void => setValue(e.target.value);
  const handleReset = (): void => setValue(initialState);

  const props = { value, onChange: handleChange };

  return { value, props, handleReset };
};

export default useInputState;
