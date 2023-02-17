import "./sidebar.css";
import { HiHome } from 'react-icons/hi';

import {
    MdOutlineTimeline,
    MdOutlineTrendingUp,
    MdPermIdentity,
    MdStorefront,
    MdAttachMoney,
    // MdBarChart,
    MdMailOutline,
    // MdDynamicFeed,
    // MdChatBubbleOutline,
    // MdWorkOutline,
    // MdReport
} from 'react-icons/md';

import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link className="link" to="/">
                            <li className="sidebarListItem active">
                                <HiHome className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MdOutlineTimeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <MdOutlineTrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link className="link" to="/users">
                            <li className="sidebarListItem">
                                <MdPermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link className="link" to="/products">
                            <li className="sidebarListItem">
                                <MdStorefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <Link className="link" to="/orders">
                            <li className="sidebarListItem">
                                <MdAttachMoney className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            <MdBarChart className="sidebarIcon" />
                            Reports
                        </li> */}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MdMailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        {/* <li className="sidebarListItem">
                            <MdDynamicFeed className="sidebarIcon" />
                            Feedback
                        </li> */}
                        {/* <li className="sidebarListItem">
                            <MdChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li> */}
                    </ul>
                </div>
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MdWorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <MdOutlineTimeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <MdReport className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}