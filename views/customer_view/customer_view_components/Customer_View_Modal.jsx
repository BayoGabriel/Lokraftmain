"use client"

import { Fragment } from "react"
// import Header from "./Header"
import Sidebar from "@/components/Sidebar"

const Customer_View_Modal = ({ children }) => {
 

  return (
      <Fragment>
        <div className="flex gap-2 min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 flex-col gap-2">
            {/* <Header /> */}
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
export default Customer_View_Modal
