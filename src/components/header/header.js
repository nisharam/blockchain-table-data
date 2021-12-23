import React, {Component} from 'react';
import { withRouter, NavLink } from 'react-router-dom'
// import { connect } from 'react-redux';
// import './header.css';
// import { handleDrawerToggleChange } from '../../../actions/index';

class Header extends Component{
  toggleHeader(e) {
    const navMenu = document.querySelectorAll(".navigation-menu");
    for (let i = 0; i < navMenu.length; i++) {
        navMenu[i].classList.toggle("Navbar__ToggleShow");
    }
}
// handleDrawerToggle(e){
//     this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
//   }
  componentWillMount(){
  }
    render(){
        return(
      <div>header</div>
        )
    }
}

// function mapStateToProps(state) {
//     const {toggleStatus} = state.appReducer;
//     return {toggleStatus}
// }

export default Header;
