import React from "react";
import './Dashboard.css';
import MianInner from '../../Component/Main-Inner-dasboard/MianInner';
import AppHeader from "../../Component/AppHeader/AppHeader";
import AppSideBar from "../../Component/AppSiderbar/AppSideBar";


import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>

      <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
       <AppHeader></AppHeader>
      
        <div class="app-main">
          <AppSideBar></AppSideBar>
          
         
          <div class="app-main__outer">
            
            <MianInner></MianInner>
          
            
          </div>

        </div>
      </div>


    </div>
  )
}

export default Dashboard