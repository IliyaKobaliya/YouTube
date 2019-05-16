import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {VideosError, VideosLoading, VideosSuccess} from './getVideos'

const rootReducer = (history) => combineReducers({
    VideosError, VideosLoading, VideosSuccess,
    router: connectRouter(history),
});
export default rootReducer;