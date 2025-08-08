import { Send_Money } from "@/public"
import Card from "./Card"

const Second_Section = () => {
    const Card_Data = [
        {
            svg: Send_Money,
            heading: 'Top-up',
            description: 'Add money to your wallet'
        },
        {
            svg: Send_Money,
            heading: 'Send money',
            description: 'Send money to 80+ countries instantly'
        },
        {
            svg: Send_Money,
            heading: 'Withdraw',
            description: ''
        },
        {
            svg: Send_Money,
            heading: 'Invoice',
            description: ''
        },
    ]
  return (
    <div className="">
        <div className="grid grid-cols-4 max-md:grid-cols-2">
            {Card_Data.map((item,index) => (
                <Card
                    key={index}
                    svg={item.svg}
                    heading={item.heading}
                    description={item.description}
                />
            ))}
        </div>
    </div>
  )
}

export default Second_Section