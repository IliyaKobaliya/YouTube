export function VideosError(state = false, action) {
    switch (action.type) {
        case 'VIDEOS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function VideosLoading(state = false, action) {
    switch (action.type) {
        case 'VIDEOS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function VideosSuccess(state = [], action) {
    switch (action.type) {
        case 'VIDEOS_SUCCESS':
            return action.videos;
        default:
            return state;
    }
}