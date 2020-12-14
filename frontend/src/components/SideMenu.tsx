import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import { Button, IconButton, Typography } from '@material-ui/core';

 import { useStylesHome } from '../pages/Home';

 interface SideMenuProps {
     classes: ReturnType<typeof useStylesHome>;
 }
 
  export const SideMenu: React.FC<SideMenuProps> = ({ 
     classes 
  }: SideMenuProps): React.ReactElement => {
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
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <EmailIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon
                        color="inherit"
                        className={classes.sideMenuListItemIcon}
                    />
                    <Typography
                    className={classes.sideMenuListItemLabel}
                    variant="h6"
                    >
                    Профиль
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton} color="primary" variant="contained" fullWidth> Твитнуть</Button>
            </li>
        </ul>
     );
 };

 //export default SideMenu;
 