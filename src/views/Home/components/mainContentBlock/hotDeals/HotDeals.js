import styled from 'styled-components/macro';
import HdSwiper from './HotDealsSwiper';

const Wrapper = styled.div`
    width: 100%;
    /* padding: 0 20px; */
    margin-top: 20px;

    > .title{
        font-size: 24px;
        font-weight: 800;

        margin-bottom: 16px;
    }
`

const HotDeals = props => {
    const { className } = props;
    return <>
        <Wrapper className={className}>
            <div className="title">Hot Deals</div>
            <HdSwiper/>
        </Wrapper>
    </>
}

export default HotDeals;