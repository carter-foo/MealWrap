import styled from 'styled-components/macro';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    padding: 4px;
    display: flex;
    align-items: center;

    background-color: #fff;
    border-radius: 2px;

    cursor: pointer;

    > .merchant-img {
        width: 180px;
        height: 150px;
        background-color: red;
        position: relative;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            border-radius: 2px;
        }
    }

    > .merchant-name {
        flex: 2;
        text-align: center;

        font-size: 18px;
        font-weight: 600;
    }

    > .merchant-star {
        flex: 1;
        text-align: center;

        .starWrapper {
            width: 36px;
            height: 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: -0.5px;
            color: #fff;

            background-color: #f43f5e;

            display: inline-block;
            padding: 4px;
            /* vertical-align: middle; */
            /* text-align:center; */
        }
    }
`;

const MerchantBox = ({ className, imgUrl, starNum, merchantName,onClick }) => {
    return (
        <Wrapper className={className}>
            <Container onClick={onClick}>
                <div className="merchant-img">
                    <img src={imgUrl} alt="merchant-img" />
                </div>
                <div className="merchant-name">{merchantName}</div>
                <div className="merchant-star">
                    <div className="starWrapper">{starNum}</div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default MerchantBox;
