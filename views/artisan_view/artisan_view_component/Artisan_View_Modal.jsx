"use client"

import { Fragment } from "react"
import Header from "./Header"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }) {
 

  return (
      <Fragment>
        <div className="flex gap-2 w-full">
          <div className="w-[20%]"><Sidebar /></div>
          <main className="w-[78%]">
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

