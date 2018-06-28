//===========//
// Header.js //
//===========//
import React from 'react'
import ContactModal from '../../Components/ContactModal'

class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isActive: false,
      showModal: false
    }
  }

  toggleModal = () =>{
    this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    let about;
    let projects;
    let contact;

    switch(this.props.lang){
      case 'eng':
        about = 'ABOUT'
        projects = 'PROJECTS'
        contact = 'CONTACT'
        break;
      case 'jp':
        about = 'アバウトミー'
        projects = 'プロジェクト'
        contact = 'コンタクト'
        break;
      case 'pl':
        about = 'O MNIE'
        projects = 'PROJEKTY'
        contact = 'KONTAKT'
        break;
      default:
        about = 'ABOUT'
        projects = 'PROJECTS'
        contact = 'CONTACT'
    }

    return (
      <nav className="navbar is-transparent is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end navbar-menu-override">
            <div className="navbar-item" href="">
              {about}
            </div>
            <div className="navbar-item" href="">
              {projects}
            </div>            
            <div className="navbar-item" onClick={this.toggleModal}>
              {contact}
            </div>
          </div>
        </div>

        <ContactModal toggleModal={this.toggleModal} showModal={this.state.showModal}/>

      </nav>
    )
  }
}

export default Header