import styled from 'styled-components/macro';
import SwiperApp from './MainSwiper';
import CateBar from './categoriesBar/CategoriesBar';
import HotDeals from './hotDeals/HotDeals';
import TopOfTheWeek from './topOfTheWeek/TopOfTheWeek';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 920px;
    min-height: calc(100vh - 90px);
    padding: 32px 0;
`;

const BreakBar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #c4c4c4;
    margin-top: 15px;
`;

const MainContent = props => {
    const { className } = props;
    const [productdata, setProductdata] = useState({});

    useEffect(() => {
      const request = async()=>{
          try {
            const res = await axios.get('/api/v1/product/all')
            console.log(res.data.data);
            setProductdata(() => res.data.data);
          } catch (err) {
              console.error(err);
          }
      }
      request()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <Wrapper>
            <SwiperApp className={className} swiperData={productdata}/>
            <CateBar />
            <BreakBar />
            <HotDeals />
            <TopOfTheWeek />
        </Wrapper>
    );
};
// const StyledMainContent = styled.div`
//     width: 100%;
//     height: 800px;
//     background-color: black;
// `;

export default MainContent;
