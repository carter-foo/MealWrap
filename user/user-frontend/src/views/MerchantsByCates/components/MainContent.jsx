import styled from 'styled-components/macro';
import MerchantBox from './MerchantBox';
import exampleImg from '@/assets/mockimages/image4.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    padding: 32px 0;
    /* display: flex;
    flex-direction: column;

    margin-bottom: 10px; */

    > .content-container {
        padding: 32px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;
        column-gap: 12px;
    }

    > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;
    }
`;

const MainContent = ({ className, tagName = 'Offers' }) => {
    const [merchants, setMerchants] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!!tagName) {
            const request = async () => {
                try {
                    const res = await axios('/api/v1/merchanttag/tagname', {
                        params: {
                            tagName,
                        },
                    });
                    console.log(res.data.data);
                    setMerchants(res.data.data);
                } catch (error) {
                    console.error(error);
                }
            };

            request();
        } else {
            setMerchants([]);
        }
    }, [tagName]);

    return (
        <Wrapper className={className}>
            <Container>
                <div className="title">{`Restaurant with tag '${tagName}'`}</div>
                <div className="content-container">
                    {merchants.map((item, index) => {
                        return (
                            <MerchantBox
                                key={index}
                                merchantName="Xixixi"
                                starNum={item.rating}
                                imgUrl={exampleImg}
                                onClick={() => navigate("/merchants",{state:{mid:item.id}})}
                            />
                        );
                    })}
                    {/* <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    />
                    <MerchantBox
                        merchantName="Xixixi"
                        starNum="9.9"
                        imgUrl={exampleImg}
                    /> */}
                </div>
            </Container>
        </Wrapper>
    );
};

export default MainContent;
