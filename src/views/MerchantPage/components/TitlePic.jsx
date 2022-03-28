import styled from 'styled-components/macro';

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    > .titleimg {
        width: 100%;
        height: 200px;
        background-color: red;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const TitlePic = ({ className, imgSrc }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <div className="titleimg">
                    <img src={imgSrc} alt="merchant Img" />
                </div>
            </Container>
        </Wrapper>
    );
};

export default TitlePic;
