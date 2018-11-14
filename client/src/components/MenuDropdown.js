import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const MenuDropDown = () => (
  <Menu compact>
    <Dropdown text='Options' options={options} simple item />
  </Menu>
)

export default MenuDropDown;