import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {Demovideo} from './HelloWorld/Demovideo'

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
