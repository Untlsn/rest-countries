import { KeyboardEvent } from 'react';

const handleKey = (fn: () => void, key: string) => {
  return <T extends HTMLElement>({ key: pressKey }: KeyboardEvent<T>) => {
    if (key == pressKey) fn();
  };
};

export default handleKey;