declare const useFetch: <T>(url: string, options?: RequestInit) => {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
};
export default useFetch;
