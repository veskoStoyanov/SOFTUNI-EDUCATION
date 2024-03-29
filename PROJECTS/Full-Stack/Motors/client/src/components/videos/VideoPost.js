import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

import { Video } from '../';

import './video.css';

import text from '../../infrastructore/textDescription';

import { withAuthLogged } from '../../infrastructore/hocs';
import { fetchVideoAction } from '../../actions/videoActions';

class VideoPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            ready: false
        }
    }

    componentDidMount = async () => {
        toastr.success(text['videos']);

        try {
            await this.props.video('video');

            this.setState({
                videos: this.props.data,
                ready: true
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let noVideo = <h3>No video available!</h3>

        return (
            <div id="videos">
                <h3 className="text-center header">Videos List</h3>
                {this.state.videos.length === 0 ? noVideo : null}
                <ul className="list-group">
                    {this.state.videos.map(p => <Video key={p._id} {...p} />)}
                </ul>
            </div>
        )
    }
}

VideoPost = withAuthLogged(VideoPost);

function mapDispatchToProps(dispatch) {
    return {
        video: (collection) => dispatch(fetchVideoAction(collection))
    }
}

function mapStateToProps(state) {
    return {
        data: state.video
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPost);