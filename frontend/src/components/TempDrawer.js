import React, { Component} from 'react';
import { Button, Menu, Icon, Segment, Sidebar } from 'semantic-ui-react';

class TempDrawer extends Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const sideList = (
            <div>
                <div>Stuff</div>
            </div>
        );
        return (
            <div>
                <Menu.Item><Icon name="bars" /></Menu.Item>
            </div>
        )
    }
}

export default TempDrawer;