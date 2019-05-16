//////////////   React     ///////////////////////
import React, {Component} from 'react';
///////////// Material UI  //////////////////////
import Grid from '@material-ui/core/Grid';
//////////////    Router   /////////////////////
import {Route, Redirect} from 'react-router-dom';
/////////////// Components /////////////////////
import Home from '../Components/Home'
import VideoPage from '../Components/VideoPage'

////////////////////////////////////////////////


class RouterApp extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} lg={10}>
                    <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
                    <Route path={`/home`} component={Home}/>
                    <Route path={"/movie/:id"} component={VideoPage}/>
                </Grid>
            </Grid>

        )
    }
}

export default RouterApp;