import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton} from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined }from "@material-ui/icons"
import SidebarChat from "./SidebarChat"
function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebar__header">
                <Avatar src ='https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/jessica-chua/entertainment/2019/jun/rdj%20clean%20earth/main-rdj.jpg?ext=.jpg' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className ="sidebar__search">
                    <div className="sidebar__searchcontainer">
                        <SearchOutlined />
                        <input type="text" placeholder="Start new search"/>
                    </div>
                </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                

            </div>
        </div>
    )
}

export default Sidebar
