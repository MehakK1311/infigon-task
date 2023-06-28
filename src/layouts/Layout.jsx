import React from "react";
import { useWindowSize } from "usehooks-ts";
import SideBar from '../components/common/SideBar'
import Header from '../components/common/Header'

const Layout = (props) => {
  const { width } = useWindowSize();

  return (
    <div>
      {width >= 1020 ? (
        <div className="flex flex-row">
          <aside className="w-2/12">
            <SideBar />
          </aside>
          <main className="w-10/12">
            {props.children}
          </main>
        </div>
      ) : (
        <>
          <div className={`fixed top-0 left-0 right-0 z-50  shadow-md`}>
            <Header />
          </div>
          <main >
            {props.children}
          </main>
        </>
      )}
    </div>
  )
}

export default Layout;
