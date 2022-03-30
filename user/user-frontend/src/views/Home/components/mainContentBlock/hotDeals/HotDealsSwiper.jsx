import styled from 'styled-components/macro';
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
// import image3 from '@/assets/mockimages/image3.jpg';
// import image4 from '@/assets/mockimages/image4.jpg';
import ShowBlock from './ShowBlock';
import lodash from 'lodash'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const StyledSwiper = styled(Swiper)`
    div{
        text-align: unset;
    }
    .tiga-swiper-indicator {
        svg {
            fill: #fff;
        }
    }
`;

const StyledSwiperItemsWrap = styled.div`
    display: flex;

    && {
        justify-content: flex-start;
    }

    height: 100%;

    > div {
        height: 255px;
        width: 200px;
        flex-shrink: 0;
        margin-right: 10px;

        border-radius: 5px;

        background-size: cover;
        background-position: center center;
        
    }

    > div:last-child {
        margin: 0;
    }
`;

// const toChunk = (ori, nPerArr) => {
//     const realNPerArr = nPerArr - 1;
//     const newSwiperData = [];
//     for (var i = 0, len = ori.length; i < len; i += realNPerArr) {
//         const newItems = ori.slice(i, i + realNPerArr);
//         if (newSwiperData.length !== 0) {
//             newSwiperData[newSwiperData.length - 1].push(newItems[0]);
//         }
//         newSwiperData.push(newItems);
//     }

//     /* The last step : put the first item into itself */
//     // newSwiperData[newSwiperData.length - 1].push(newSwiperData[0][0]);
//     console.log(newSwiperData);

//     let theLastArr = newSwiperData[newSwiperData.length - 1];

//     if (theLastArr.length < nPerArr) {
//         newSwiperData[newSwiperData.length - 1] = theLastArr.concat(
//             ori.slice(0, nPerArr - theLastArr.length),
//         );
//     }

//     return JSON.parse(JSON.stringify(newSwiperData));
// };

const SwiperApp = ({swiperData}) => {
    const swiperRef = useRef(null);

    const [newData,setNewData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setNewData(() => lodash.chunk(swiperData, 5));
        // const getRate = async () =>{
        //     const res = axios.
        // }
    }, [swiperData])
    
    // console.log('HotDeals', newData);

    return (
        <>
            <StyledSwiper
                className="demo"
                autoPlay={0}
                touchable={true}
                selectedIndex={0}
                showIndicators={true}
                indicator={null}
                showDots={false}
                dots={null}
                direction="horizontal"
                loop={true}
                ref={swiperRef}
                style={{}}
            >
                {newData.map((item, key) => (
                    <StyledSwiperItemsWrap key={key}>
                        {item.map((subItem, key) => {
                            return (
                                <ShowBlock
                                    key={key}
                                    style={{
                                        backgroundImage: `url('/api/v1/product/image?id=${subItem.id}')`,
                                    }}
                                    name={subItem.name}
                                    price={subItem.price}
                                    
                                    onClick={() => navigate('/merchants',{state:{mid:subItem.merchant_id}})}
                                ></ShowBlock>
                            );
                        })}
                    </StyledSwiperItemsWrap>
                ))}
            </StyledSwiper>
        </>
    );
};

export default SwiperApp;
