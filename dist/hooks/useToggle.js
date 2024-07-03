"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useToggle = (initialValue = false) => {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const toggle = () => {
        setValue(prevValue => !prevValue);
    };
    return [value, toggle];
};
exports.default = useToggle;
