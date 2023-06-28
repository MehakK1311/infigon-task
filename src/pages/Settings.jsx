import React, { useState } from 'react'
import Layout from '../layouts/Layout'
import SideBar from '../components/common/SideBar'
import Main from '../components/Settings/Main'
import Header from '../components/common/Header'

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen)
  };

  return (
    <Layout
    header={<Header handleClick={toggleSidebar}/>}
    sidebar={<SideBar handleClick={toggleSidebar}/>}
    >
      <Main/>
    </Layout>
  )
}

export default Settings