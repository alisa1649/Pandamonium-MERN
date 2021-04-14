import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/profile'}>Profile</Link>
                    {/* <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="left-nav-bar">
                    <Link to={'/dashboard'} className="heading">
                        <div className="panda">
                            <img src="/panda.png" alt="panda icon" />
                        </div>
                    </Link>

                    <Link to={'/dashboard'} className="heading">
                        <h1>Pandamonium</h1>
                    </Link>
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;
