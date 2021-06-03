'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.RemotionVideo = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const remotion_1 = require('remotion');
const Demovideo_1 = require('./HelloWorld/Demovideo');
const RemotionVideo = () => {
	return jsx_runtime_1.jsx(
		jsx_runtime_1.Fragment,
		{
			children: jsx_runtime_1.jsx(
				remotion_1.Composition,
				{
					id: 'HelloWorld',
					component: Demovideo_1.Demovideo,
					durationInFrames: 300,
					fps: 30,
					width: 1920,
					height: 1080,
				},
				void 0
			),
		},
		void 0
	);
};
exports.RemotionVideo = RemotionVideo;
