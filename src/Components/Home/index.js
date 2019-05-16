import React, {Component} from 'react';
import './App.css';
import {API_HOST} from "../../Config";
import {connect} from 'react-redux'
import {getVideos} from '../../Redux/Actions/getVideos';
import {withStyles} from "@material-ui/core/styles/index";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    search: {
        display: `flex`,
        flexDirection: `row`,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: `#EEE`,
        color: `black`,
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: '30%',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    }
});


class HomeApp extends Component {
    state = {
        searchText: ``
    };

    onsearch = () => {
        console.log(API_HOST + this.state.searchText);
        this.props.getVideos(API_HOST + this.state.searchText)
    };


    render() {
        const {classes} = this.props;
        return (
            <div className="App">
                <AppBar position="fixed" color={`secondary`}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            YouTube
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <IconButton onClick={this.onsearch}
                                        className={classes.iconButton} aria-label="Search">
                                <SearchIcon/>
                            </IconButton>
                            <InputBase
                                placeholder="Search…"
                                type="text"
                                onChange={(event) => {
                                    this.setState({searchText: event.target.value})
                                }}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <div style={{
                    marginTop: `10vh`,
                    display: `flex`,
                    alignItems: `center`,
                    flexDirection: `column`
                }}>
                    {this.props.Videos.map(video =>
                            <Card  key={video.id.videoId} style={{marginBottom: `20px`, width: `700px`}}
                                  className={classes.card}>
                                <Link to={`/movie/${video.id.videoId}`}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={video.snippet.thumbnails.medium.url}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body1">
                                            {video.snippet.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Link>
                            </Card>
                    )}
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        Videos: state.VideosSuccess,
        Error: state.VideosError,
        Loading: state.VideosLoading

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVideos: (url) => dispatch(getVideos(url)),
    };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeApp);


export default withStyles(styles)(Home);
