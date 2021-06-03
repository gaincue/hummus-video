import {Video, Sequence} from 'remotion';
import {Subtitle} from './Subtitle';

export const Demovideo = () => {
    return (
        <div style={{flex: 1, backgroundColor: 'white'}}>
            <Video
                style={{width: "100%"}}
                src="https://hummus-s3.s3-ap-southeast-1.amazonaws.com/lesson_01/ep_01.mp4"
            />
            <Sequence from={100} durationInFrames={Infinity}>
					<Subtitle />
			</Sequence>
            <Sequence from={200} durationInFrames={Infinity}>
                <button style={{width: "250px", height: "120px", fontSize: "50px"}}>test</button>
            </Sequence>
        </div>
    )
}