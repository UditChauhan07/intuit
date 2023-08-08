import React from 'react';
import { useNavigate } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard/Dashboard';

function AppSideBar() {
    const navigate = useNavigate();
  const table = () => {
    navigate('/table')
  }
  const Compression = () => {
    navigate('/compression')
  }
  const Dashboard = () => {
    navigate('/Dashboard')
  }
  return (
    <div>
        <div className='AppSideBar'>
        <div class="app-sidebar sidebar-shadow">
            <div class="app-header__logo">
              <div class="logo-src"></div>
              <div class="header__pane ml-auto">
                <div><button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button></div>
              </div>
            </div>
            <div class="app-header__mobile-menu">
              <div><button type="button" class="hamburger hamburger--elastic mobile-toggle-nav"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button></div>
            </div>
            <div class="app-header__menu"><span><button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"><span class="btn-icon-wrapper"><i class="fa fa-ellipsis-v fa-w-6"></i></span></button></span></div>
            <div class="scrollbar-sidebar">
              <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu">
                  <li class="app-sidebar__heading">Dashboards</li>
                  <li><a onClick={Dashboard} class="mm-active"><i class="metismenu-icon pe-7s-rocket"></i> Dashboard </a></li>
                  <li class="app-sidebar__heading">UI Components</li>

                  {/* <li><a ><i class="metismenu-icon pe-7s-car"></i> Components <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i></a>
                    <ul>

                      <li><a ><i class="metismenu-icon"></i>Coming Soon</a></li>
                      
                    </ul>
                  </li> */}
                  <li><a onClick={table} ><i class="metismenu-icon pe-7s-display2"></i> Sale Report </a></li>
                  <li><a onClick={Compression} ><i class="metismenu-icon pe-7s-display2"></i> Compression Report</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default AppSideBar