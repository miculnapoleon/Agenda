import { NextPage } from 'next'
import { useAppSelector } from '../store/hooks';
import { getThemeValue } from '../store/reducers/mainReducer';


const Home: NextPage = () => {
  const theme = useAppSelector(getThemeValue);


  return (
    <div className={`container h-screen py-4 px-4 ${theme}`}>
    </div>
  )
}

export default Home;
