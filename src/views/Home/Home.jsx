import { Fragment } from 'react';
import NavBar from '@/components/navbar/NavBar';
import MainContent from './components/mainContentBlock/MainContent';

const Home = () => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <MainContent/>
        </Fragment>
    );
};

export default Home;
