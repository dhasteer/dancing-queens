import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Instructor from './InstructorComponent';
import Home from './HomeComponent';
import Donation from './DonationComponent';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  resetContact: () => {dispatch(actions.reset('contact'))},
});

/********************************************************************************************
**
** CREATING THE ROUTING SKELETON FOR THE APP
**
********************************************************************************************/

class Main extends Component {

  render(){

    const ContactPage = () => {
      return(
        <Contact resetContact = {this.props.resetContact}/>
      );
    }

    const HomePage = () => {
      return(
        <Home/>
      );
    }

    const InstructorPage = () => {
      return(
        <Instructor/>
      );
    }

    const DonationPage = () => {
      return(
        <Donation/>
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/contact-us" component={ContactPage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/instructors" component={InstructorPage}/>
          <Route exact path="/donation" component={DonationPage}/>
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(Main));
