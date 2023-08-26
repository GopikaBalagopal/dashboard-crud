import React from "react";
import "./Navbar.css";
import {
  Input,
  InputGroup,
  Button,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import {
  AiOutlineSearch,
  AiOutlineInfoCircle,
  AiOutlineUnorderedList,
  AiTwotoneMail,
} from "react-icons/ai";
import { CgBoy } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiFontSize } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="InputNavbaruser">
          <InputGroup className="Inputbar">
            <Input placeholder="Search for..." />
            <Button>
              <AiOutlineSearch />
            </Button>
          </InputGroup>
        </div>
        <div className="user">
          <ul>
            <li>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle className="nav-link" tag="a">
                  <BsFillBellFill />
                  <sup style={{ color: "white", backgroundColor: "red" }}>3+</sup>
                </DropdownToggle>
                <DropdownMenu className="Dropdownlist" >
                  <DropdownItem href="#" tag="a">
                    Notification 1
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Notification 2
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Notification 3
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Notification 4
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Notification 5
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle className="nav-link" tag="a">
                  <AiTwotoneMail />
                  <sup style={{ color: "white", backgroundColor: "red" }}>7</sup>
                </DropdownToggle>
                <DropdownMenu className="Dropdownlist" >
                  <DropdownItem href="#" tag="a">
                    Mail 1
                  </DropdownItem>

                  <DropdownItem href="#" tag="a">
                    Mail 2
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Mail 3
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Mail 4
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Mail 5
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Mail 6
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    Mail 7
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle className="nav-link" tag="a">
                  <span className="Navbarname">Admin</span>
                  <CgBoy style={{ fontSize: "50px" }} />
                </DropdownToggle>
                <DropdownMenu className="Dropdownlist">
                  <DropdownItem href="#" tag="a">
                    <AiOutlineInfoCircle
                      style={{ fontSize: "25px", "marginRight": "15px" }}
                    />
                    Profile
                  </DropdownItem>

                  <DropdownItem href="#" tag="a">
                    <FiSettings
                      style={{ fontSize: "25px", "marginRight": "15px" }}
                    />
                    Settings
                  </DropdownItem>
                  <DropdownItem href="#" tag="a">
                    <AiOutlineUnorderedList
                      style={{ fontSize: "25px", "marginRight": "15px" }}
                    />
                    Activity log
                  </DropdownItem>
                  <hr></hr>
                  <DropdownItem>
                    <FiLogOut
                      style={{ fontSize: "25px", "margin-right": "15px" }}
                    />
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
