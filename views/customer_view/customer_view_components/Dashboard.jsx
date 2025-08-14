import Wallet_Balance from "./Wallet_Balance"

const Dashboard = () => {

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2 bg-white">
      <div className="flex gap-3">
        <div className="w-[70%]">
            Vee
        </div>
        <div className="flex flex-col w-[30%] gap-6">
          <Wallet_Balance/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
