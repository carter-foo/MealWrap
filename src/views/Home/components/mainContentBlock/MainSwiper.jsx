import styled from 'styled-components/macro';
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
// import lodash from 'lodash';
// import image1 from '@/assets/mockimages/image1.jpg';
// import image2 from '@/assets/mockimages/image2.jpg';

const StyledSwiperItemsWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    > div {
        height: 100%;
        flex: 1;
        margin-right: 5px;

        background-size: cover;
        background-position: center center;
        cursor: pointer;
    }

    > div:last-child {
        margin: 0;
    }
`;

const toChunk = (ori, nPerArr) => {
    if (!!!ori) {
        return [];
    }
    // console.log(ori);
    const newSwiperData = [];
    for (var i = 0, len = ori.length; i < len; i += nPerArr) {
        newSwiperData.push(ori.slice(i, i + nPerArr));
    }

    let theLastArr = newSwiperData[newSwiperData.length - 1];

    if (theLastArr.length < nPerArr) {
        newSwiperData[newSwiperData.length - 1] = theLastArr.concat(
            ori.slice(0, nPerArr - theLastArr.length),
        );
    }

    return JSON.parse(JSON.stringify(newSwiperData));
};

const SwiperApp = ({ swiperData }) => {
    const swiperRef = useRef(null);
    const [newSwiperData, setNewSwiperData] = useState([]);
    // const swiperData = ['#99CCCC', '#FFCC99', '#FFCCCC', '#FFFFCC', '#CCFFFF', '#6723EE', '#444444'];
    // const imgUrl = URL.createObjectURL(image1);
    // const swiperData = [image1, image2, image1, image2, image1, image2];

    useEffect(() => {
        let dataArr = [];
        if(JSON.stringify(swiperData) === '{}'){
            setNewSwiperData(() => []);
        }else{
            for (let i = 0; i < 3; i++) {
                const ele = swiperData[i];
                dataArr.push(ele.id);
            }
            // let dataArr = lodash.cloneDeep(swiperData);
            // console.log(dataArr);
            setNewSwiperData(() => toChunk(dataArr, 2));
        }

        return () => dataArr = null;
    }, [swiperData]);

    // const newData = toChunk([1,2,3,4], 2);

    // const swipeTo = () => {
    //     const swiperInstance = swiperRef.current;
    //     const currPage = index * 1 + '';
    //     swiperInstance?.swipeTo(parseInt(currPage, 10));
    // };

    // const prev = () => {
    //     const swiperInstance = swiperRef.current;
    //     swiperInstance?.prev();
    // };

    // const next = () => {
    //     const swiperInstance = swiperRef.current;
    //     swiperInstance?.next();
    // };

    // const onChange = (currPage, prevPage) => {
    //     console.log(currPage, prevPage);
    // };

    return (
        // <StyledSwiperWrap>
        <>
            <Swiper
                className="demo"
                autoPlay={3000}
                selectedIndex={0}
                showIndicators={true}
                indicator={null}
                dots={null}
                direction="horizontal"
                loop={true}
                ref={swiperRef}
                // onChange={onChange}
                style={{
                    height: '217px',
                }}
            >
                {newSwiperData.map((item, key) => (
                    <StyledSwiperItemsWrap key={key}>
                        {item.map((subItem, key) => {
                            return (
                                <div
                                    key={key}
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_staticPath}/api/v1/product/image?id=${subItem}')`,
                                    }}
                                ></div>
                            );
                        })}
                    </StyledSwiperItemsWrap>
                ))}
            </Swiper>
            {/* </StyledSwiperWrap> */}
        </>
    );
};

export default SwiperApp;
export { toChunk };
