"use client"

import { Fragment } from "react"
import Header from "./Header"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }) {
 

  return (
      <Fragment className="">
        <div className="flex gap-2 min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 flex-col gap-2">
            <Header />
            <div className="mt-2">
              {children}
              <Fragment />
              
              <Fragment />
            </div>
          </main>
        </div>
      </Fragment>
  )
}

