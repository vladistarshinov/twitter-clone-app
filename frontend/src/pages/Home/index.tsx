import React from "react";
import {
  InputAdornment,
  Grid,
  Paper,
  Typography,
  Container,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

import { SideMenu } from "../../components/SideMenu";
import Tweet from "../../components/Tweet";
import { useStylesHome } from "./styles";

import { Theme, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";

import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
// import { useStylesHome } from "../pages/Home/styles";

const Home = (): React.ReactElement => {
  const classes = useStylesHome();

  const SearchTextField = withStyles((theme: Theme) => ({
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        backgroundColor: "#E6ECF0",
        padding: 0,
        paddingLeft: 15,
        "&.Mui-focused": {
          backgroundColor: "#fff",
          "& fieldset": {
            borderWidth: 1,
            borderColor: theme.palette.primary.main,
          },
          "& svg path": {
            fill: theme.palette.primary.main,
          },
        },
        "&:hover": {
          "& fieldset": { borderColor: "transparent" },
        },
        "& fieldset": {
          borderColor: "transparent",
          borderWidth: 1,
        },
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
      },
    },
  }))(TextField);

  const MAX_LENGTH = 280;

  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100);

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
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>

            <Paper>
              <div className={classes.addForm}>
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
                        <span
                          style={
                            textLimitPercent > 100 ? { color: "tomato" } : {}
                          }
                        >
                          {MAX_LENGTH - text.length}
                        </span>
                        <div className={classes.addFormCircleProgress}>
                          <CircularProgress
                            variant="static"
                            size={20}
                            thickness={5}
                            value={textLimitPercent}
                            style={
                              textLimitPercent > 100 ? { color: "red" } : {}
                            }
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
              <div className={classes.addFormBottomLine} />
            </Paper>
            <div className={classes.tweetsCentered}>
              {/* <CircularProgress /> */}
            </div>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                  user={{
                    fullname: "Glafira Zhur",
                    username: "GlafiraZhur",
                    avatarURL:
                      "https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                  }}
                  classes={classes}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
