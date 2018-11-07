import React from 'react';
import { Button, Menu, Icon, Segment, Sidebar } from 'semantic-ui-react';
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

// const styles = {
//     largeMenu: {
//       marginTop: '0px',
//       width: '100%',
//       height: '20px',
//     },
//     drawerButton: {
//       margin: "0px",
//     }
//   }
// class Header extends React.Component {
//   state = { visible: false }

//   handleHideClick = () => this.setState({ visible: false })
//   handleShowClick = () => this.setState({ visible: true })
//   handleSidebarHide = () => this.setState({ visible: false })

//   render() {
//     const { visible } = this.state;

//     return (
//       <div>
//         <Button.Group>
//           <Button disabled={visible} onClick={this.handleShowClick}>
//             <Icon name="bars" />
//           </Button>
//         </Button.Group>

//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={visible}
//             width='thin'
//           >
//             <Menu.Item as='a'>
//               <Icon name='home' />
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//           </Sidebar>

//         <Sidebar.Pusher>
//             <Segment basic>
//               <Menu style={styles.largeMenu} size={'large'}>
//                 {/* <Menu.Menu style={styles.drawerButton}>
//                   <Menu.Item><Icon name="bars" /></Menu.Item>
//                 </Menu.Menu> */}
//                 <Menu.Item><Link to='/'>Azure UI</Link></Menu.Item>
//                 <Menu.Menu position="right">
//                   <Menu.Item><Link to='/someLink'><Icon name='tasks' />Some Link</Link></Menu.Item>
//                 </Menu.Menu>
//               </Menu>
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   }
// };

// export default Header;