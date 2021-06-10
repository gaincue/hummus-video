import {Sequence, Video} from 'remotion';
import {Subtitle} from './Subtitle';

export const Demovideo = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Video
				style={{width: '100%'}}
				src="https://hummus-s3.s3-ap-southeast-1.amazonaws.com/lesson_01/ep_01.mp4"
			/>
			<Sequence from={70} durationInFrames={65}>
					<Subtitle text="Olive loves eating" />
			</Sequence>
            <Sequence from={135} durationInFrames={65}>
					<Subtitle text="She loves to eat rice" />
			</Sequence>
            <Sequence from={200} durationInFrames={100}>
					<Subtitle text="noodles, chickens, vegetables" />
			</Sequence>
            <Sequence from={300} durationInFrames={90}>
					<Subtitle text="and most of all, bananas!" />
			</Sequence>
			<Sequence from={400} durationInFrames={Infinity}>
				<button
					type="button"
					style={{width: '250px', height: '120px', fontSize: '50px'}}
					onClick={() => console.log('button clicked')}
				>
					Test
				</button>
			</Sequence>
		</div>
	);
};
