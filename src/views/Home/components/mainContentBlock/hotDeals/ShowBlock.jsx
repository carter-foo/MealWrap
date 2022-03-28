import styled from 'styled-components/macro';
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';

const Wrapper = styled.div`
    position: relative;

    cursor: pointer;
`;

const RateStarFrostedGlassWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 10px 0; */

    position: absolute;
    width: 62px;
    height: 32px;
    left: 14px;
    top: 14px;

    background: rgba(31, 39, 45, 0.2);
    backdrop-filter: blur(4px);

    border-radius: 5px;

    color: #fff;
    font-weight: 600;

    > .rate {
        font-size: 16px;
        margin-left: 4px;
        margin-top: 3px;
    }
`;

const TextFrostedGlassWrapper = styled.div`
    position: absolute;
    width: 184px;
    height: 83px;
    left: 8px;
    top: 164px;

    background: rgba(31, 39, 45, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 5px;
    padding: 10px;

    color: #fff;
    font-weight: 600;
    > .name {
        font-size: 14px;
        /* width: 87px; */
        height: 34px;
        margin-bottom: 8px;
    }

    > .price {
        font-size: 18px;
    }
`;

const StyledStarIcon = styled(StarIcon)`
    width: 14px;
    path {
        fill: #fb923c;
    }
`;

const ShowBlocks = props => {
    // ,rate
    const { className, style,name="Bowl of Porridge with Fruits",price="$ 9.21",onClick } = props;

    return (
        <Wrapper className={className} style={style} onClick={onClick}>
            <RateStarFrostedGlassWrapper>
                <StyledStarIcon />
                <div className="rate">9.9</div>
            </RateStarFrostedGlassWrapper>
            <TextFrostedGlassWrapper>
                <div className="name">{name}</div>
                <div className="price">$ {price}</div>
            </TextFrostedGlassWrapper>
        </Wrapper>
    );
};

export default ShowBlocks;
