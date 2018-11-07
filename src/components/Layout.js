import React from 'react';
import {Container, Menu, Icon, Sidebar} from 'semantic-ui-react';
import Header from './Header';
import SidebarMenu from './SidebarMenu';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
    }
  }

  handleShowClick = () => {
    this.setState({ sidebarVisible: true })
  }

  handleSidebarHide = () => {
    this.setState({ sidebarVisible: false })
  }

  render() {
    const { sidebarVisible } = this.state;
    const props = this.props;
    return (
      <Container>

        <SidebarMenu sidebarVisible={sidebarVisible} handleSidebarHide={this.handleSidebarHide} />

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <Header visible={sidebarVisible} handleShowClick={this.handleShowClick}/>
        {props.children}

      </Container>
    );
  };
}


export default Layout;