import React from 'react'

const HoverRing = () => {
    return (
        <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <circle cx="12" cy="12" r="11.5" stroke="url(#paint0_linear_0_490)" />
            <g opacity="0.01">
                <circle cx="12" cy="12" r="12" stroke="url(#paint1_linear_0_490)" />
                <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_0_490" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#55DDFF" />
                    <stop offset="1" stopColor="#C058F3" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_490" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#55DDFF" />
                    <stop offset="1" stopColor="#C058F3" />
                </linearGradient>
            </defs>
        </svg></div>
    )
}

export default HoverRing