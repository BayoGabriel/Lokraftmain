const Green_Bg = ({ width = '100%', height = '100%', className = "", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 238 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <mask
        id="mask0_1628_6603"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="238"
        height="259"
      >
        <rect width="238" height="259" rx="20" fill="#E36867" />
      </mask>
      <g mask="url(#mask0_1628_6603)">
        <rect width="238" height="261" rx="20" fill="#02846B" />
        <circle
          cx="121"
          cy="121"
          r="121"
          transform="matrix(-1 0 0 1 305 -142)"
          fill="url(#paint0_linear_1628_6603)"
        />
        <ellipse
          cx="153"
          cy="151.5"
          rx="153"
          ry="151.5"
          transform="matrix(-1 0 0 1 103 137)"
          fill="url(#paint1_linear_1628_6603)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1628_6603"
          x1="276.637"
          y1="273.654"
          x2="169.609"
          y2="144.783"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1628_6603"
          x1="-48.5379"
          y1="-54.5922"
          x2="151.289"
          y2="120.799"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Green_Bg;
