import React from 'react'
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
           <TwitterIcon className="sidebar__twitterIcon"/> 
           
           <SidebarOptions active Icon={HomeIcon} text="Home" />
           <SidebarOptions Icon={ExploreIcon} text="Explore" />
           <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
           <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
           <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
           <SidebarOptions Icon={ListAltIcon} text="Lists" />
           <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
           <SidebarOptions Icon={MoreHorizIcon} text="More" />
           {/* <SidebarOptions /> */}
           <Button className="sidebar__tweet" variant="outlined" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;
