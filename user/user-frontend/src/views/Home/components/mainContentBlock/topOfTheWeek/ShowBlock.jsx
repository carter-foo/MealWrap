import styled from 'styled-components/macro';
import likeIcon from '@/assets/icons/like.svg';
// import logoIcon from '@/logo.svg';
import image6 from '@/assets/mockimages/image6.png';

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    background-color: #fff;
`;

const FlexShowBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 20px;
    /* outline: 2px solid black; */

    position: absolute;
    width: 320px;
    height: 85px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    > div {
        flex-shrink: 0;
    }

    .image {
        img {
            width: 85px;
        }
    }

    .title {
        font-size: 16px;
        font-weight: 600;

        margin-bottom: 12px;
    }

    .price {
        font-size: 20px;
        font-weight: 600;
    }

    .totwLike {
        img {
            width: 20px;
            height: 20px;
            /* background-color: #8f9396; */
        }
    }
`;

const ShowBlocks = props => {
    const { className, style, imageSrc, title, price } = props;

    return (
        <Wrapper className={className} style={style}>
            <FlexShowBox>
                <div className="image">
                    <img src={imageSrc || image6} alt="" />
                </div>
                <div className="title-price">
                    <div className="title">{title || 'Salad'}</div>
                    <div className="price">{price || '$10.77'}</div>
                </div>
                <div id="totwLike" className="totwLike">
                    <img src={likeIcon} alt="" />
                </div>
            </FlexShowBox>
        </Wrapper>
    );
};

export default ShowBlocks;
