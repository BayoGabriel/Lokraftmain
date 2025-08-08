const Card = ({svg, heading, description}) => {
  return (
    <div className="flex flex-col p-4 rounded-[12px] bg-[#FFFBFB] border border-[#D9D9D9] gap-3">
        <div>{svg}</div>
        <h6 className="font-[600] text-[#333333] encode-sans text-lg">{heading}</h6>
        <p className="font-[400] text-[#707070] text-sm">{description}</p>
    </div>
  )
}

export default Card