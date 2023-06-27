import React from 'react'

const Layout = (props) => {
  return (
    <div>
      <header>
        {props.header}
      </header>
      <div className="flex flex-row">
        <aside className="w-2/12">
          {props.sidebar}
        </aside>
        <main className="w-10/12">
          {props.children}
        </main>
      </div>
      <footer>
        {props.footer}
      </footer>
    </div>
  )
}

export default Layout