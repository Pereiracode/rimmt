import React, { Component } from 'react';
import Routes from './routes';
import Toolbar from './components/Toolbar/Toolbar';
import MenuLadim from './components/MenuLadim/MenuLadim';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
    state = {
      menuLadimOpen: false
    };

    menuLadimClickHandler = () => {
      this.setState((prevState) => {
        return {menuLadimOpen: !prevState.menuLadimOpen};
      });
    };

backdropClickHandler = () => {
    this.setState({menuLadimOpen: false});

}


  render() {
    let backdrop; 

    if (this.state.menuLadimOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
   
    
  return (
    <div style={{height: '100%'}}>
    <Toolbar menuClickHandler={this.menuLadimClickHandler}/>
    <MenuLadim show={this.state.menuLadimOpen} />
        {backdrop}
    <Routes/>
    </div>
  );
}
}

export default App;
