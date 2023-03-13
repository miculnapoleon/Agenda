import React, { useState } from "react"
import IIcons from "./IIcons"

const LogoutIcon = React.forwardRef(({ href, color = 'white', hoverColor='#6D95BB' }: IIcons, ref) => {
    const [iconColor, setIconColor] = useState(color)

    const onMouseOver = () => {
        setIconColor(hoverColor)
    }

    const onMouseOut = () => {
        setIconColor(color)
    }

    return (
        <a href={href} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <svg  className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 22.5H13.5C13.8977 22.4996 14.279 22.3414 14.5602 22.0602C14.8414 21.779 14.9996 21.3977 15 21V18.75H13.5V21H4.5V3H13.5V5.25H15V3C14.9996 2.6023 14.8414 2.221 14.5602 1.93978C14.279 1.65856 13.8977 1.5004 13.5 1.5H4.5C4.1023 1.5004 3.721 1.65856 3.43978 1.93978C3.15856 2.221 3.0004 2.6023 3 3V21C3.0004 21.3977 3.15856 21.779 3.43978 22.0602C3.721 22.3414 4.1023 22.4996 4.5 22.5Z" fill={iconColor} />
                <path d="M15.4395 15.4395L18.129 12.75H7.5V11.25H18.129L15.4395 8.5605L16.5 7.5L21 12L16.5 16.5L15.4395 15.4395Z" fill={iconColor} />
            </svg>
        </a>
    )
})

export default LogoutIcon