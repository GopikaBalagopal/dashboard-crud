import React from "react";
import "./Sidebar.css";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { GiLightningSpanner } from "react-icons/gi";
import { AiFillFolderOpen} from "react-icons/ai";
import { BiBarChartAlt } from "react-icons/bi";
import { BsTable } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import logo from'./logoicon.png';
import { CgHello } from "react-icons/cg";

export default function Sidebar() {
  return (
    <div>
      <div className="Sidebar">
        
        <div className="logo">
        <CgHello style={{ fontSize: "50px" }} />
          
          <span className="sidebarname">
            SB ADMIN <sup>2</sup>
          </span>
        </div>
        <hr></hr>
        {/* Menu */}
        <div className="menu">
          {/* Dashboard */}
          <Link className="Sidebarlink" to="/dashboard">
            <div className="menuItem">
              <div className="icon">
                <AiFillDashboard />
              </div>
              <span><span className="sidebarname">Dashboard</span></span>
              
            </div>
            <hr></hr>
          </Link>
          

         <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle className="nav-link" tag="a">


              <div className="menuItem">

                <div className="icon">
                  <FiSettings />
                </div><span className="Utility"><span className="sidebarname">Components </span></span>
              </div>

            </DropdownToggle>
            <DropdownMenu className="Dropdownlist" >
              <Link className="Sidebarlink" to='/Buttons'><DropdownItem href="#" tag="a">
                Buttons
              </DropdownItem></Link>

              <Link className="Sidebarlink" to='/Cards'><DropdownItem href="#" tag="a">
                Cards
              </DropdownItem></Link>
            </DropdownMenu>
          </UncontrolledDropdown>


          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle className="nav-link" tag="a">


              <div className="menuItem">

                <div className="icon">
                  <GiLightningSpanner />
                </div><span className="Utility"><span className="sidebarname">Utilities</span></span>
              </div>

            </DropdownToggle>
            <DropdownMenu className="Dropdownlist" >
              <Link className="Sidebarlink" to='/Utilitycolors'><DropdownItem href="#" tag="a">
                Colors
              </DropdownItem></Link>

              <Link className="Sidebarlink" to='/Utilityborders'><DropdownItem href="#" tag="a">
                Borders
              </DropdownItem></Link>
            </DropdownMenu>
          </UncontrolledDropdown>

          <hr></hr>

          {/* Pages */}
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle className="nav-link" tag="a">
              <div className="menuItem">
                <div className="icon">
                  <AiFillFolderOpen />
                </div>
                <span className="sidebarname">Pages</span>
              </div>
            </DropdownToggle>
            <DropdownMenu className="Dropdownlist" >
              <DropdownItem href="#" tag="a">
                Log In
              </DropdownItem>

              <DropdownItem href="#" tag="a">
                Register
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* Charts */}

          <Link className="Sidebarlink" to='/Charts'>
            <div className="menuItem">
              <div className="icon">
                <BiBarChartAlt />
              </div><span className="sidebarname">Charts</span>
            </div>
            <hr></hr>
          </Link>

          {/* Charts */}
          <Link className="Sidebarlink" to='/Table'>
            <div className="menuItem">
              <div className="icon">
                <BsTable />
              </div>
              <span className="sidebarname">Tables</span>
            </div></Link>

          <hr></hr>
        </div>
      </div>

    </div>
  );
}

//    