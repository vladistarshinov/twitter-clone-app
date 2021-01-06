import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { Button, IconButton, Typography, Hidden } from '@material-ui/core';

import { useStylesHome } from '../pages/Home/styles';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';

interface SideMenuProps {
    classes: ReturnType<typeof useStylesHome>;
}
 
  export const SideMenu: React.FC<SideMenuProps> = ({ 
     classes 
  }: SideMenuProps): React.ReactElement => {

  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

     return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton
                        className={classes.logo}
                        aria-label="twitter"
                        color="primary"
                    >
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography
                            className={classes.sideMenuListItemLabel}
                            variant="h6"
                        >
                            Поиск
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Hidden smDown>
                        <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6"
                        >
                        Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <EmailIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Hidden smDown>
                        <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6"
                        >
                        Сообщения
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Hidden smDown>
                        <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6"
                        >
                        Закладки
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Hidden smDown>
                        <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6"
                        >
                        Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Hidden smDown>
                        <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6"
                        >
                        Профиль
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={handleClickOpenAddTweet} className={classes.sideMenuTweetButton} color="primary" variant="contained" fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp><CreateIcon /></Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                    <div style={{ width: 550 }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
     );
 };

 //export default SideMenu;
 