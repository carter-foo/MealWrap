import styled from 'styled-components/macro';
import MenuBox from './MenuBox';

const Wrapper = styled.div`
    width: 100%;

    margin-bottom: 40px;
`;

const Container = styled.div`
    width: 100%;

    > .m-infos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 24px 30px;

        background-color: #fff;

        .title {
            font-size: 26px;
            font-weight: 600;
        }

        .star-wrapper {
            /* flex: 1; */
            text-align: center;

            .star {
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
            }
        }
    }
`;

const MerchantInfo = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <div className="m-infos">
                    <div className="title">Mia Pasta by REEF Kitchens</div>
                    <div className="star-wrapper">
                        <div className="star">9.9</div>
                    </div>
                </div>
                <MenuBox />
            </Container>
        </Wrapper>
    );
};

export default MerchantInfo;
