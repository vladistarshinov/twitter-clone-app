import React from "react";
import {
  makeStyles,
  withStyles,
  createStyles,
  InputBase,
  Grid,
  IconButton,
  Paper,
  Typography,
  Container,
  Avatar,
} from "@material-ui/core";
import classNames from 'classnames';
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import grey from "@material-ui/core/colors/grey";
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
    margin: "15px 0",
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 15,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: "0",
    borderBottom: "0",
  },
  tweetsHeader: {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    '& :hover': {
      backgroundColor: 'rgb(245, 248, 250)',
      cursor: 'pointer'
    } 
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 450
  }
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useStylesHome();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton
                className={classes.logo}
                aria-label="twitter"
                color="primary"
              >
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="search"
                //color="primary"
              >
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="notification"
                //color="primary"
              >
                <NotificationIcon
                  color="inherit"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="email"
                //color="primary"
              >
                <EmailIcon
                  color="inherit"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="bookmark"
                //color="primary"
              >
                <BookmarkIcon
                  color="inherit"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="list"
                //color="primary"
              >
                <ListIcon
                  color="inherit"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="profile"
                //color="primary"
              >
                <UserIcon
                  color="inherit"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <Avatar
                    alt="User Avatar"
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography>
                    <b>mxhxvoid</b>
                    <span className={classes.tweetUserName}> @mahavoid</span>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Слушаю краем уха экскурсовода в нижегородском кремле:
                    «Против России в 1941 году ополчился весь Евросоюз». Какой
                    Евросоюз, деревянная башка? Знайте, что пропаганда доберётся
                    до вас даже через «гидов». Ищите нормальных неформальных
                    экскурсоводов!
                  </Typography>
                  <div className={classes.tweetFooter}>
                    <div>
                      <IconButton color="primary">
                        <CommentIcon style={{ fontSize: 20 }} />
                      </IconButton>  
                      <span>1</span>
                    </div>
                    <div>
                      <IconButton color="primary">
                        <RepostIcon style={{ fontSize: 20 }} />
                      </IconButton>  
                    </div>
                    <div>
                      <IconButton color="primary">
                        <LikeIcon style={{ fontSize: 20 }} />
                      </IconButton>  
                    </div>
                    <div>
                      <IconButton color="primary">
                        <ShareIcon style={{ fontSize: 20 }} />
                      </IconButton>  
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
