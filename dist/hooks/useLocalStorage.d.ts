declare const useLocalStorage: <T>(key: string, initialValue: T) => [T, (value: T) => void];
export default useLocalStorage;
