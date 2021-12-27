import React, {Component} from 'react';
import './dist/header.css';
import { SearchOutlined,SettingFilled } from '@ant-design/icons';
import { Button } from 'antd';
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

    render(){
        return(
          <div className="header">
          <div className="left-header" >
              <div>Coins</div>
              <div>Exchange</div>
              <div>Swap</div>
          </div>
          <div className="center-header" >
              <img className="logo" src="https://coincap.io/static/logos/black.svg" />
          </div>
          <div className="right-header" >
              <div>
              <SearchOutlined />
              </div>
              <div>
              <SettingFilled />
              </div>
              <div>
              <Button className="btn">Connect Wallet</Button>
              </div>
          </div>
      </div>
        )
    }
}

// function mapStateToProps(state) {
//     const {toggleStatus} = state.appReducer;
//     return {toggleStatus}
// }

export default Header;
