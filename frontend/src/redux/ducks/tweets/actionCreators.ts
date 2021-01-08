import { Action } from "redux";
import { ITweetsState, LoadingState } from "./types";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS'
}


export interface ISetTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: ITweetsState['items'];
}

export interface ISetLoadingStatusAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATUS;
    payload: LoadingState;
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (payload: ITweetsState['items']): ISetTweetsAction => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const setLoadingStatus = (payload: LoadingState): ISetLoadingStatusAction => ({
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetActions = ISetTweetsAction | IFetchTweetsAction | ISetLoadingStatusAction;