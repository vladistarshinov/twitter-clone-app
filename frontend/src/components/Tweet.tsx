import React from 'react';
import classNames from 'classnames';
import { 
  IconButton,
  Paper,
  Typography,
  Avatar
} from "@material-ui/core";
import { useStylesHome } from '../pages/Home/styles';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

interface TweetProps {
    classes: ReturnType<typeof useStylesHome>;
    user: {
      fullname: string;
      username: string;
      avatarURL: string;
    }
    text: string;
}

const Tweet: React.FC<TweetProps> = ({ 
  classes,
  text,
  user
}: TweetProps): React.ReactElement => {
    return (
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватар пользователя ${user.fullname}`}
          src={user.avatarURL}
        />
          <div>
            <Typography>
              <b>{user.fullname}</b>
              &nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>1 ч</span>

            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
            <div className={classes.tweetFooter}>
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 20 }} />
                </IconButton>  
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <RepostIcon style={{ fontSize: 20 }} />
                </IconButton>  
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 20 }} />
                </IconButton>  
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 20 }} />
                </IconButton>  
              </div>
            </div>
          </div>
      </Paper>
    );
};

export default Tweet;
