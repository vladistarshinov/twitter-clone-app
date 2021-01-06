import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import React from "react";
import classNames from 'classnames';
import { useStylesHome } from "../pages/Home/styles";

interface AddTweetFormProps {
    classes: ReturnType<typeof useStylesHome>;
    maxRows?: number;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes, 
  maxRows
}: AddTweetFormProps): React.ReactElement => {
  const MAX_LENGTH = 280;

  const [text, setText] = React.useState<string>("");
  const textLimitPercent = (text.length / MAX_LENGTH) * 100;

  const handleChangeTextArea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText("");
  };
  
  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span style={textLimitPercent > 100 ? { color: "tomato" } : {}}>
                {MAX_LENGTH - text.length}
              </span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={textLimitPercent}
                  style={textLimitPercent > 100 ? { color: "red" } : {}}
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="static"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            color="primary"
            variant="contained"
            disabled={textLimitPercent > 100}
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
