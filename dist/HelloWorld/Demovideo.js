"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demovideo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const remotion_1 = require("remotion");
const Subtitle_1 = require("./Subtitle");
const Demovideo = () => {
    return (jsx_runtime_1.jsxs("div", Object.assign({ style: { flex: 1, backgroundColor: 'white' } }, { children: [jsx_runtime_1.jsx(remotion_1.Video, { style: { width: "100%" }, src: "https://hummus-s3.s3-ap-southeast-1.amazonaws.com/lesson_01/ep_01.mp4" }, void 0),
            jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: 100, durationInFrames: Infinity }, { children: jsx_runtime_1.jsx(Subtitle_1.Subtitle, {}, void 0) }), void 0),
            jsx_runtime_1.jsx(remotion_1.Sequence, Object.assign({ from: 200, durationInFrames: Infinity }, { children: jsx_runtime_1.jsx("button", Object.assign({ style: { width: "250px", height: "120px", fontSize: "50px" } }, { children: "test" }), void 0) }), void 0)] }), void 0));
};
exports.Demovideo = Demovideo;
