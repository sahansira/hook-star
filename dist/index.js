"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClipboard = exports.useTimeout = exports.useInterval = exports.useWindowSize = exports.useOnClickOutside = exports.usePrevious = exports.useToggle = exports.useDebounce = exports.useLocalStorage = exports.useFetch = void 0;
var useFetch_1 = require("./hooks/useFetch");
Object.defineProperty(exports, "useFetch", { enumerable: true, get: function () { return __importDefault(useFetch_1).default; } });
var useLocalStorage_1 = require("./hooks/useLocalStorage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return __importDefault(useLocalStorage_1).default; } });
var useDebounce_1 = require("./hooks/useDebounce");
Object.defineProperty(exports, "useDebounce", { enumerable: true, get: function () { return __importDefault(useDebounce_1).default; } });
var useToggle_1 = require("./hooks/useToggle");
Object.defineProperty(exports, "useToggle", { enumerable: true, get: function () { return __importDefault(useToggle_1).default; } });
var usePrevious_1 = require("./hooks/usePrevious");
Object.defineProperty(exports, "usePrevious", { enumerable: true, get: function () { return __importDefault(usePrevious_1).default; } });
var useOnClickOutside_1 = require("./hooks/useOnClickOutside");
Object.defineProperty(exports, "useOnClickOutside", { enumerable: true, get: function () { return __importDefault(useOnClickOutside_1).default; } });
var useWindowSize_1 = require("./hooks/useWindowSize");
Object.defineProperty(exports, "useWindowSize", { enumerable: true, get: function () { return __importDefault(useWindowSize_1).default; } });
var useInterval_1 = require("./hooks/useInterval");
Object.defineProperty(exports, "useInterval", { enumerable: true, get: function () { return __importDefault(useInterval_1).default; } });
var useTimeout_1 = require("./hooks/useTimeout");
Object.defineProperty(exports, "useTimeout", { enumerable: true, get: function () { return __importDefault(useTimeout_1).default; } });
var useClipboard_1 = require("./hooks/useClipboard");
Object.defineProperty(exports, "useClipboard", { enumerable: true, get: function () { return __importDefault(useClipboard_1).default; } });
