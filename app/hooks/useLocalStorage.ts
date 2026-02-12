import { useCallback, useMemo } from 'react';

const useLocalStorage = (key: string, initialValue: unknown) => {
  const setStoredValue = useCallback(
    (newValue: unknown) => localStorage.setItem(key, JSON.stringify(newValue)),
    [],
  );

  return useMemo(
    () => [
      JSON.parse(localStorage.getItem(key) ?? JSON.stringify(initialValue)),
      setStoredValue,
    ],
    [],
  );
};

export default useLocalStorage;
