import React from 'react';
import TableInner from '../../Component/TableInner/TableInner';
import CompressionSection from '../../Component/CompressionSection/CompressionSection';

import { useNavigate } from "react-router-dom";
import AppSideBar from '../../Component/AppSiderbar/AppSideBar';
import AppHeader from '../../Component/AppHeader/AppHeader';

const Compression = () => {
  const navigate = useNavigate();
  const table = () => {
    navigate('/table')
  }
  const compression = () => {
    navigate('/compression')
  }
  const Dashboard = () => {
    navigate('/Dashboard')
  }
  return (
    <div>
      <div>

        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <AppHeader></AppHeader>
          

          <div class="app-main">
            <AppSideBar></AppSideBar>
            <div class="app-main__outer">


           <CompressionSection></CompressionSection>

            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Compression;