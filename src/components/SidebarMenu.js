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
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>

          </Sidebar>
    )
}