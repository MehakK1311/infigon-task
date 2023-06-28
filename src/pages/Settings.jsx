import Layout from '../layouts/Layout'
import SideBar from '../components/common/SideBar'
import Main from '../components/Settings/Main'
import Header from '../components/common/Header'

const Settings = () => {
  return (
    <Layout
      header={<Header />}
      sidebar={<SideBar />}
    >
      <Main />
    </Layout>
  )
}

export default Settings