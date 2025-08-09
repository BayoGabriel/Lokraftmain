import { Fragment } from "react"
import First_Component from "./wallet_view_components/First_Component"
import Second_Section from "./wallet_view_components/Second_Section"
import Recent_Transactions from "./wallet_view_components/Recent_Transactions"

const Wallet_View = () => {
  return (
    <Fragment>
        <First_Component/>
        <Second_Section/>
        <Recent_Transactions/>
    </Fragment>
  )
}

export default Wallet_View