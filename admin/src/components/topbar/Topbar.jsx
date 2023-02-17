import React from 'react'
import "./topbar.css";
import { FiBell } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FaAsymmetrik } from 'react-icons/fa';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo"><FaAsymmetrik />   admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <FiBell style={{ fontSize: "25px" }} />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <FiGlobe style={{ fontSize: "25px" }} />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <FiSettings style={{ fontSize: "25px" }} />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}
