import React from 'react';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default (props) => {
    const { handleSidebarHide, sidebarVisible} = props;
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarVisible}
            width='thin'
          >
          <Menu.Item as='a'>
            <Link to="/"><Icon name='home' />Azure UI</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to="/helloworld">Hello World!</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            {/* <Link to="/contracts"></Link> */}
            Contracts
          </Menu.Item>
        </Sidebar>
    )
}