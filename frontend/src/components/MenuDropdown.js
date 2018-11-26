import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';

const options = [
  { key: 1, text: 'Shipper', value: 1 },
  { key: 2, text: 'Customs', value: 2 },
  { key: 3, text: 'Consignee', value: 3 },
]

const MenuDropDown = () => (
  <Menu compact>
    <Dropdown placeholder='Choose role' options={options} simple item />
  </Menu>
)

export default MenuDropDown;

