import React, { Component } from 'react'
import './Dashboard.css';
import SideNavBar from '../../components/SideNavBar/SideNavBar';

export default class Dashboard extends Component {
    state = {
        sideBarList: [
            { name: "Homepage", url: "#" },
            { name: "Projects", url: "#" },
            { name: "Contact Us", url: "#" },
        ]
    }
    render() {
        return (
            <div>
                <h1 className={"Heading"}> Dashboard</h1>
                <SideNavBar data={this.state.sideBarList} />
            </div>
        )
    }
}
