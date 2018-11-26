import React from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import MenuDropdown from './MenuDropdown';

export default (props) => {
  const styles = {
    largeMenu: {
      marginTop: '0px',
      width: '100%',
      height: '20px',
    },
    drawerButton: {
      margin: "0px",
    },
    projectHeaderTitle: {
      alignSelf: "center",
    },
    spacer: {
      flex: 1,
      flexBasis: '0.000000001px',
    },
    dropDown: {
      width: '50px',
    }
  }
  const { visible, handleShowClick } = props;
  return (
    <Menu style={styles.largeMenu} size={'large'}>
    <Menu.Item><Link to='/'>Azure UI</Link></Menu.Item>
      <Button.Group>
        <Button disabled={visible} onClick={handleShowClick}>
          <Icon name="bars" />
        </Button>
      </Button.Group>
      <div style={styles.spacer}></div>
      <MenuDropdown styles={styles.dropDown}/>
    </Menu>
  );
};