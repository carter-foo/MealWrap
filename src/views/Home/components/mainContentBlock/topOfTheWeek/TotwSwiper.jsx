import styled from 'styled-components/macro';
import React, { useRef } from 'react';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
import ShowBlock from './ShowBlock';
import image5 from '@/assets/mockimages/image5.png';
import image6 from '@/assets/mockimages/image6.png';
import image7 from '@/assets/mockimages/image7.png';

const StyledSwiperItemsWrap = styled.div`
    display: flex;
    && {
        justify-content: unset;
    }

    height: 100%;
    > div {
        height: 106px;
        width: 327px;
        flex-shrink: 0;
        margin-right: 16px;

        border-radius: 5px;
    }

    > div:last-child {
        margin: 0;
    }
`;

const toChunk = (ori, nPerArr) => {
    const realNPerArr = nPerArr - 1;
    const newSwiperData = [];
    for (var i = 0, len = ori.length; i < len; i += realNPerArr) {
        const newItems = ori.slice(i, i + realNPerArr);
        if (newSwiperData.length !== 0) {
            newSwiperData[newSwiperData.length - 1].push(newItems[0]);
        }
        newSwiperData.push(newItems);
    }

    /* The last step : put the first item into itself */
    // newSwiperData[newSwiperData.length - 1].push(newSwiperData[0][0]);

    let theLastArr = newSwiperData[newSwiperData.length - 1];

    if (theLastArr.length < nPerArr) {
        newSwiperData[newSwiperData.length - 1] = theLastArr.concat(
            ori.slice(0, nPerArr - theLastArr.length),
        );
    }

    return JSON.parse(JSON.stringify(newSwiperData));
};

const SwiperApp = () => {
    const swiperRef = useRef(null);
    // const [index, setIndex] = useState();
    // const swiperData = ['#99CCCC', '#FFCC99', '#FFCCCC', '#FFFFCC', '#CCFFFF', '#6723EE', '#444444'];

    const swiperData = [
        {
            url: image5,
            title: 'Rice Noodle with Egg',
            price: '10.77',
        },
        {
            url: image6,
            title: 'Special Salad',
            price: '10.77',
        },
        {
            url: image7,
            title: 'Delicious Soup',
            price: '10.77',
        },
        {
            url: image5,
            title: 'Rice Noodle with Egg',
            price: '10.77',
        },
        {
            url: image6,
            title: 'Special Salad',
            price: '10.77',
        },
        {
            url: image7,
            title: 'Delicious Soup',
            price: '10.77',
        },
        {
            url: image5,
            title: 'Rice Noodle with Egg',
            price: '10.77',
        },
        {
            url: image6,
            title: 'Special Salad',
            price: '10.77',
        },
        {
            url: image7,
            title: 'Delicious Soup',
            price: '10.77',
        },
    ];

    const newData = toChunk(swiperData, 3);

    console.log('TOTW', newData);

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
                // onChange={onChange}
                style={{}}
            >
                {newData.map((item, key) => (
                    <StyledSwiperItemsWrap key={key}>
                        {item.map((subItem, key) => {
                            // console.log("subItem",subItem);
                            return (
                                <ShowBlock
                                    key={key}
                                    imageSrc={subItem.url}
                                    title={subItem.title}
                                    price={subItem.price}
                                    style={{
                                        // backgroundImage: `url(${subItem})`,
                                        backgroundColor: subItem,
                                    }}
                                ></ShowBlock>
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
