import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearAuthToken} from '../local-storage';

import * as actions from '../actions';

import './Nav.css';

export class Nav extends Component {



    logOut() {
      this.props.dispatch(actions.clearAuth());
      this.props.dispatch(actions.toggleModal(false));
      clearAuthToken();
    }

    render() {
      let landingPageTabs, parentTabs, sitterTabs, logoutTab;

      if(this.props.currentView === 'landing-page'){
        landingPageTabs = (
          <div className="nav-button right">
            <button className="nav-bttn signup btn"><Link to="/signup" className="nav-bttn">Signup</Link></button>
            <button className="nav-bttn login btn"><Link to="/login" className="nav-bttn">Login</Link></button>
          </div>
        )
      }

      if(this.props.currentView === 'signup'){
        landingPageTabs = (
          <div className="nav-button right">
            <button className="nav-bttn signup btn"><Link to="/signup" className="nav-bttn">Signup</Link></button>
            <button className="nav-bttn login btn"><Link to="/login" className="nav-bttn">Login</Link></button>
          </div>
        )
      }

      if(this.props.currentView === 'login'){
        landingPageTabs = (
          <div className="nav-button right">
            <button className="nav-bttn signup btn"><Link to="/signup" className="nav-bttn">Signup</Link></button>
            <button className="nav-bttn login btn"><Link to="/login" className="nav-bttn">Login</Link></button>
          </div>
        )
      }


      if(this.props.currentView === 'parent'){
        parentTabs = (
          <div className="nav-button-container">
            <button className="nav-bttn parent-dashboard"><Link to="/parent/dashboard" className="nav-bttn">Dashboard</Link></button>
            <button className="nav-bttn nav-student-classes"><Link to="/parent/notifications" className="nav-bttn">Notifications</Link></button>
          </div>
        )
      }

      if(this.props.currentView === 'sitter'){
        sitterTabs = (
          <div className="nav-button">
            <button className="nav-bttn sitter-dashboard"><Link to="/sitter/dashboard" className="nav-bttn">Dashboard</Link></button>
            <button className="nav-bttn sitter-notifications"><Link to="/sitter/dashboard" className="nav-bttn">Notifications</Link></button>
          </div>
        )
      }

      if(this.props.currentView === 'parent' || this.props.currentView === 'sitter'){
        logoutTab = (
          <div className="nav-bttn log-out-tabs">
            <button className="logout btn" onClick={() => this.logOut()}><Link to="/" className="nav-bttn">Logout</Link></button>
          </div>
        )
      }

      return(
        <div className="nav-bar">
            <Link to="/" className="logo-container">
              <img className="logo" src="https://imgur.com/D1o9XQM.png" alt="logo"/>
              <span className="sitter-finder">Sitter Finder</span>
            </Link>

          {landingPageTabs}
          {parentTabs}
          {sitterTabs}
          {logoutTab}

        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    currentView: state.view.selectedView,
    // alertID: state.alert.userPanic[0] ? state.alert.userPanic[0]._id : 0,
  })

  export default connect(mapStateToProps)(Nav)
