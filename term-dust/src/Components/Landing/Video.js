import React, {Component} from 'react';

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=zxlH3NvS2TI'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                <track default
                        kind="captions"
                        srcLang="en"/>
                Your browser does not support the video tag.
            </video>
        )
    }
}

export default Video;