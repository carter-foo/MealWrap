import styled from 'styled-components/macro';
import MerchantInfo from './MerchantInfo';
import TitlePic from './TitlePic';
import exampleImg from '@/assets/mockimages/image2.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    /* padding: 32px 0; */
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;

    /* > .content-container {
        padding: 32px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;
        column-gap: 12px;
    } */

    /* > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;
    } */
`;

const MainContent = ({ className, mid }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(!!mid){
            const request = async () => {
                try {
                    const res = await axios('/api/v1/product/merchant_id',{
                        params:{
                            merchantId: mid
                        }
                    })
                    console.log(res.data.data);
                    setProducts(res.data.data);
                } catch (error) {
                    console.error(error);
                }
            }
            request()
        }else{
            setProducts([]);
        }
    }, [mid]);

    return (
        <Wrapper className={className}>
            <Container>
                <TitlePic imgSrc={exampleImg} />
                <MerchantInfo products={products}/>
            </Container>
        </Wrapper>
    );
};

export default MainContent;
