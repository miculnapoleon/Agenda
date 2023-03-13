import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export interface IOptions {
    type?: string;
    id?: number;
} 

interface IProps {
    width?: string;
    options: IOptions[];
    handleSelected?: (value: IOptions) => void;
    isSearchable?: boolean;
}

const Dropdown = ({width='w-44', options, handleSelected, isSearchable=true}: IProps) => {
    const [selected, setSelected]: [IOptions, Dispatch<SetStateAction<{}>>] = useState({})
    const [showMenu, setShowMenu] = useState(false)
    const [searchedValue, setSearchedValue] = useState('')
    const searchRef: any = useRef()

    useEffect(() => {
        setSearchedValue('');
        if(showMenu && searchRef.current) {
            searchRef.current.focus()
        }
    },[showMenu])

    useEffect(() => {
        setSelected({type: 'Select...'})
    },[])

    const getOptions = () => {
        if(!isSearchable) {
            return options;
        }

        return options.filter(option => option.type && option.type.toLowerCase().indexOf(searchedValue.toLowerCase()) >= 0)
    }

    const openMenu = (e: any) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchedValue(e.target.value)
    }

    const handleSelection = (option: IOptions) => {
        setSelected(option)
        setShowMenu(false)
        handleSelected && handleSelected(selected)
    }

    return (
        <div onClick={openMenu} className={`rounded ${width} border border-solid border-black h-8 relative`}>
            <div className="mx-1 my-1">
                {selected.type}
            </div>
            {showMenu && <div className={`rounded ${width} border border-solid absolute top-8`}>
                {isSearchable && <input value={searchedValue} ref={searchRef} onChange={handleInputChange} className="w-40 rounded border border-solid mx-1.5 my-1 " />}
                {getOptions().map(option => 
                    <div onClick={() => handleSelection(option)} className="hover:bg-blue cursor-pointer mx-1.5" key={option.id}>{option.type}</div>
                )}
            </div>}
        </div>
    )
}

export default Dropdown;