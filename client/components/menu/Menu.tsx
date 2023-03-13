import FinanceIcon from "../icons/finance";
import HomeIcon from "../icons/home";
import LogoutIcon from "../icons/logout";
import UserIcon from "../icons/user";
import Link from 'next/link';

const ITEMS = [
    {
        type: (color?: string, hoverColor?: string): JSX.Element => <HomeIcon color={color} hoverColor={hoverColor}/>,
        path: '/dashboard'
    },
    {
        type: (color?: string, hoverColor?: string): JSX.Element => <FinanceIcon color={color} hoverColor={hoverColor}/>,
        path: '/finance'
    },
    {
        type: (color?: string, hoverColor?: string): JSX.Element => <UserIcon color={color} hoverColor={hoverColor}/>,
        path: '/user'
    }
]

const Menu = () => {
    return (
        <div data-testid="menu" className="container w-16 bg-black h-full rounded pl-1 grid grid-col-1 grid-rows-4 pt-4 pb-4 justify-items-center">
            <div className="text-white text-lg cursor-pointer">
                <Link href={'/dashboard'}>{'_ A'}</Link>
            </div>
            <div className="grid row-span-2  pb-64">
                {ITEMS.map((item, id) => (
                    <div key={id}>
                        <Link passHref href={item.path}>{item.type()}</Link>
                    </div>
                ))}
            </div>
            <div className="grid row-span-1 items-end">
                <LogoutIcon />
            </div>
        </div>
    )
}

export default Menu;