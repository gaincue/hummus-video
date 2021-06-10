import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';

interface Props {
	text: string,
}

export const Subtitle: React.FC<Props> = (prop): JSX.Element => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		// <div
		// 	style={{
		// 		fontFamily: 'Helvetica, Arial',
		// 		fontSize: 50,
		// 		textAlign: 'center',
		// 		position: 'absolute',
		// 		// bottom: 140,
		// 		top: 120,
		// 		width: '100%',
		// 		opacity,
		// 	}}
		// >
		// 	Edit{' '}
		// 	<code
		// 		style={{
		// 			color: COLOR_1,
		// 		}}
		// 	>
		// 		src/Video.tsx
		// 	</code>{' '}
		// 	and save to reload.
		// </div>

		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 70,
				textAlign: 'center',
				position: 'absolute',
				// marginRight: '6px',
				// bottom: 140,
				top: 110,
				width: '100%',
				opacity,
			}}
		>
			{prop.text}
		</div>
	);
};
