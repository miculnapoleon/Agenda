
interface IProps {
    handleClick?: () => void,
    name: string,
    width?: string,
    fill?: string,
    color?: string
}

const Button = ({ handleClick, name, width='w-32', fill='bg-white', color='text-black' }: IProps) => {
    return (
        <div data-testid="btn"
            onClick={handleClick} 
            className={`rounded ${fill} h-4.5 ${width} border border-solid border-black text-center ${color} cursor-pointer font-sans font-medium hover:${fill}_hover`}>
            {name}
        </div>
    )
}

export default Button;