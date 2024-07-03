"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useClipboard = () => {
    const [clipboard, setClipboard] = (0, react_1.useState)('');
    const copyToClipboard = (0, react_1.useCallback)((text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => setClipboard(text));
        }
    }, []);
    return [clipboard, copyToClipboard];
};
exports.default = useClipboard;
