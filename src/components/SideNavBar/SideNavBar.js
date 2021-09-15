import React, { Component } from 'react'
import './SideNavBar.css';
import Menu from '../../assets/menu.svg';
import Close from '../../assets/close.svg';

export default class SideNavBar extends Component {
    state = {
        showMenu: false
    }
    render() {
        return (
            <div>
                <div>
                    <img src={Menu} alt="Menu" className={["MenuIcon", this.state.showMenu && "HideMenuIcon"].join(' ')} onClick={() => this.setState({ showMenu: !this.state.showMenu })} />
                </div>
                <div className={["NavContainer", !this.state.showMenu && "HideMenu"].join(' ')}>
                    <img src={Close} alt="close" className={"CloseIcon"} onClick={() => this.setState({ showMenu: false })} />
                    <h3 className={"MenuHeading"}>Menu</h3>
                    <ul>
                        {this.props.data.length > 0 ? this.props.data.map((item) => {
                            return <li>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        }) : "No data available"}

                    </ul>
                </div>
            </div>
        )
    }
}
