"use client"

import { Fragment } from "react"
import Header from "./Header"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }) {
 

  return (
      <Fragment>
        <div className="flex gap-2 bg-gray-50">
          <Sidebar />
          <main>
            <Header />
            <div>
              {children}
              <Fragment />
              
              <Fragment />
            </div>
          </main>
        </div>
      </Fragment>
  )
}

