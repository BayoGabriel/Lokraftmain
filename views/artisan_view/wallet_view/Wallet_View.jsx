import { Fragment } from "react"
import First_Component from "./wallet_view_components/First_Component"
import Second_Section from "./wallet_view_components/Second_Section"

const Wallet_View = () => {
  return (
    <Fragment>
        <First_Component/>
        <Second_Section/>
    </Fragment>
  )
}

export default Wallet_View