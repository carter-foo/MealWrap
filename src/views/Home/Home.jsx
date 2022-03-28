import { Fragment, useEffect } from 'react';
import NavBar from '@/components/navbar/NavBar';
import MainContent from './components/mainContentBlock/MainContent';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '@/store/loginStore';


const Home = () => {
    const info = useRecoilValue(loginInfo)
    useEffect(() => {
      console.log(info);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return (
        <Fragment>
            <NavBar />
            <MainContent />
        </Fragment>
    );
};

export default Home;
