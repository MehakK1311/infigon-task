import React from 'react'
import Layout from '../layouts/Layout'
import SideBar from '../components/common/SideBar'
import Main from '../components/Settings/Main'

const Settings = () => {
  return (
    <Layout
      sidebar={<SideBar/>}
    >
      <Main/>
    </Layout>
  )
}

export default Settings