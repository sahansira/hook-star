"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
exports.default = useDebounce;
