export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface ITweet {
    user: {
        fullname: string;
        username: string;
        avatarURL: string;
    }
    text: string;
}

export interface ITweetsState {
    items: ITweet[];
    loadingState: LoadingState;
}