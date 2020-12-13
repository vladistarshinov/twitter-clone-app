import React from 'react';
import { makeStyles, Typography, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    //height: "calc(100vh - 84px)",
    height: '100vh'
  },
  blueInfoSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#71C9F8",
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden'
  },
  blueInfoSideTwitterIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%', 
    transform: 'translate(-50%, -50%)',
    width: '380%',
    height: '380%'
  },
  blueInfoSideList: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 350,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontSize: 18,
      fontWeight: 700
    }
  },
  blueInfoSideListIcons: {
    fontSize: 32,
    marginRight: 20
  },
  blueInfoSideListItem: {
    marginBottom: 40
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%'
  },
  loginSideTwitterIcon: {
    fontSize: 45
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginTop: 15,
    marginBottom: 50 
  }
}));

const SignIn = () => {
  const classes = useStylesSignIn();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueInfoSide}>
        <TwitterIcon 
          color="primary" 
          className={classes.blueInfoSideTwitterIcon} 
        />
        <ul className={classes.blueInfoSideList}>
          <li className={classes.blueInfoSideListItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueInfoSideListIcons} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueInfoSideListItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueInfoSideListIcons} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueInfoSideListItem}>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon className={classes.blueInfoSideListIcons} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon 
            color="primary" 
            className={classes.loginSideTwitterIcon} 
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 15 }}
            variant="contained" 
            color="primary" 
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            fullWidth
          >
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
