import { useState } from "react";
import { useWindowSize } from "usehooks-ts";

const Layout = (props) => {

  const { width } = useWindowSize();

  return (
    <div>
      {
        width >= 1020 ? (
          <div className="flex flex-row">
            <aside className="w-2/12">
              {props.sidebar}
            </aside>
            <main className="w-10/12">
              {props.children}
            </main>
          </div>
        ) : (
          <>
            <header>
              {props.header}
            </header>
            <main>
              {props.children}
            </main>
          </>
        )
      }

      <footer>
        {props.footer}
      </footer>
    </div>
  )
}

export default Layout