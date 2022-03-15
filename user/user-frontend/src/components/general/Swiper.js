import styled from 'styled-components/macro';
import React, { useRef } from 'react';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';

const StyledSwiperItemsWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    > div {
        height: 100%;
        flex: 1;
        margin-right: 5px;
    }

    > div:last-child {
        margin: 0;
    }
`;

const toChunk = (ori, nPerArr) => {
    const newSwiperData = [];
    for (var i = 0, len = ori.length; i < len; i += nPerArr) {
        newSwiperData.push(ori.slice(i, i + nPerArr));
    }

    let theLastArr = newSwiperData[newSwiperData.length - 1];

    if (theLastArr.length < nPerArr) {
        newSwiperData[newSwiperData.length - 1] = theLastArr.concat(ori.slice(0, nPerArr - theLastArr.length));
    }

    return JSON.parse(JSON.stringify(newSwiperData));
};

const SwiperApp = () => {
    const swiperRef = useRef(null);
    // const [index, setIndex] = useState();
    const swiperData = ['#99CCCC', '#FFCC99', '#FFCCCC', '#FFFFCC', '#CCFFFF', '#6723EE', '444444'];

    const newData = toChunk(swiperData, 2);

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
                {newData.map((item, key) => (
                    <StyledSwiperItemsWrap key={key}>
                        <div style={{ backgroundColor: item[0] }}>{/* {key + 1} */}</div>
                        <div style={{ backgroundColor: item[1] }}>{/* {key + 1} */}</div>
                    </StyledSwiperItemsWrap>
                ))}
            </Swiper>
            {/* </StyledSwiperWrap> */}
        </>
    );
};

export default SwiperApp;
export {toChunk};
