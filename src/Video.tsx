import {Composition} from 'remotion';
import {Demovideo} from './HelloWorld/Demovideo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={Demovideo}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
