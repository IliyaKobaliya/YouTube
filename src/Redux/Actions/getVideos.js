import * as axios from 'axios';

export function VideosError(bool) {
    console.log(`ошибка загрузки видео`);
    return {
        type: 'VIDEOS_ERRORED',
        hasErrored: bool
    };
}

export function VideosLoading(bool) {
    console.log(`загрузка видео ${ bool ? `началась` : `закончилась`}`);
    return {
        type: 'VIDEOS_LOADING',
        isLoading: bool
    };
}


export function VideosSuccess(videos) {
    console.log(
        `Видео загружены`
    );
    return {
        type: 'VIDEOS_SUCCESS',
        videos
    };
}


export function getVideos(url) {
    return (dispatch) => {
        dispatch(VideosLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(VideosLoading(false));
                return response
            })
            .then(response => dispatch(VideosSuccess(response.data.items)))
            .catch(() => dispatch(VideosError(true)));
    };
}
