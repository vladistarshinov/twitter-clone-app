import produce, { Draft } from 'immer';
import { TweetActions, TweetsActionsType } from './actionCreators';
import { LoadingState, ITweetsState } from './types';

const initialTweetsState: ITweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<ITweetsState>, action: TweetActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;
        case TweetsActionsType.SET_LOADING_STATUS:
            draft.loadingState = action.payload;
            break;
        default:
            break;
    }
}, initialTweetsState);