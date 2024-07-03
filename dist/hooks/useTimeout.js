"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useTimeout = (callback, delay) => {
    const savedCallback = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        savedCallback.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(() => {
        if (delay !== null) {
            const id = setTimeout(() => {
                if (savedCallback.current) {
                    savedCallback.current();
                }
            }, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
};
exports.default = useTimeout;
