import axios from 'axios';
import { ITweetsState } from '../../redux/ducks/tweets/types';

export const TweetsApi = {
    fetchTweets(): Promise<ITweetsState['items']> {
        return axios.get('https://trycode.pw/c/2OBQ1.json').then(({ data }) => data);
    }     
}