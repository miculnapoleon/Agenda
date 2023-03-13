import React, { useState } from "react";
import IIcons from "./IIcons";

const HomeIcon = React.forwardRef(({ href, color = "#fff", hoverColor = '#6D95BB' }: IIcons, ref) => {
    const [iconColor, setIconColor] = useState(color)

    const onMouseOver = () => {
        setIconColor(hoverColor)
    }

    const onMouseOut = () => {
        setIconColor(color)
    }

    return (
        <a href={href} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <svg className="cursor-pointer hover:text-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill={iconColor} />
            </svg>
        </a>
    )
})

export default HomeIcon;