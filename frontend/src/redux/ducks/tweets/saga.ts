import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweets.api';
import { setLoadingStatus, setTweets, TweetsActionsType } from './actionCreators';
import { LoadingState } from './types';

export function* fetchTweetsRequest() {
  try {
    const data = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(data));
  } catch (error) {
    yield put(setLoadingStatus(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}