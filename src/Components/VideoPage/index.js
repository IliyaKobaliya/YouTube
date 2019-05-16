import React, {Component} from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";

const styles = {
    video: {
        width: `100vw`, height: `90vh`
    }
};

class VideoPage extends Component {
    componentWillMount() {
        if (this.props.video === undefined) {
            this.props.history.push(`/home`);
        }
    }

    render() {
        if (this.props.video === undefined) {
            return null;
        }
        let video = this.props.video;
        const {classes} = this.props;
        return (
            <div>
                <iframe id="video1"
                        className={classes.video}
                        src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allowFullScreen/>
                <Typography variant="h5">{video.snippet.title}</Typography>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        test: state.VideosSuccess,
        video: state.VideosSuccess.find(video => video.id.videoId === String(ownProps.match.params.id)),
    }
};
export default withStyles(styles)(connect(mapStateToProps)(VideoPage));