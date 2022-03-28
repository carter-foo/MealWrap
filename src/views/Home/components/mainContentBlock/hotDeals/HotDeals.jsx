import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import HdSwiper from './HotDealsSwiper';

const Wrapper = styled.div`
    width: 100%;
    /* padding: 0 20px; */
    margin-top: 20px;

    > .title {
        font-size: 24px;
        font-weight: 800;

        margin-bottom: 16px;
    }
`;

const HotDeals = props => {
    const { className,swiperData } = props;

    const [newSwiperData, setNewSwiperData] = useState([]);
    // const swiperData = ['#99CCCC', '#FFCC99', '#FFCCCC', '#FFFFCC', '#CCFFFF', '#6723EE', '#444444'];
    // const imgUrl = URL.createObjectURL(image1);
    // const swiperData = [image1, image2, image1, image2, image1, image2];

    useEffect(() => {
        let dataArr = [];
        if(JSON.stringify(swiperData) === '{}'){
            setNewSwiperData(() => []);
        }else{
            for (let i = 0; i < 10; i++) {
                const ele = swiperData[i];
                dataArr.push(ele);
            }
            // let dataArr = lodash.cloneDeep(swiperData);
            // console.log("dataArr:",dataArr);
            setNewSwiperData(() => dataArr);
        }

        return () => dataArr = void(0);
    }, [swiperData]);
    

    return (
        <>
            <Wrapper className={className}>
                <div className="title">Hot Deals</div>
                <HdSwiper swiperData={newSwiperData}/>
            </Wrapper>
        </>
    );
};

export default HotDeals;
