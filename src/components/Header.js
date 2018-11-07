import React from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default (props) => {
  const styles = {
    largeMenu: {
      marginTop: '0px',
      width: '100%',
      height: '20px',
    },
    drawerButton: {
      margin: "0px",
    }
  }
  const { visible, handleShowClick } = props;
  return (
    <Menu style={styles.largeMenu} size={'large'}>
      {/* <Menu.Menu style={styles.drawerButton}>
        <Menu.Item><Icon name="bars" /></Menu.Item>
      </Menu.Menu> */}
      <Button.Group>
        <Button disabled={visible} onClick={handleShowClick}>
          <Icon name="bars" />
        </Button>
      </Button.Group>

      <Menu.Item><Link to='/'>Azure UI</Link></Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item><Link to='/someLink'><Icon name='tasks' />Some Link</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};