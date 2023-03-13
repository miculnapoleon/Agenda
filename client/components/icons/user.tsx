import React, { useState } from "react"
import IIcons from "./IIcons"

const UserIcon = React.forwardRef(({href, color = 'white', hoverColor='#6D95BB' }: IIcons, ref) => {
    const [iconColor, setIconColor] = useState(color)

    const onMouseOver = () => {
        setIconColor(hoverColor)
    }

    const onMouseOut = () => {
        setIconColor(color)
    }

    return (
        <a href={href} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H11" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 20C17.8807 20 19 18.8807 19 17.5C19 16.1193 17.8807 15 16.5 15C15.1193 15 14 16.1193 14 17.5C14 18.8807 15.1193 20 16.5 20Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 19.5L21 22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    )
})

export default UserIcon