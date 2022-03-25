import styled from 'styled-components/macro';

const Wrapper = styled.div`
    
`;

const Container = styled.div`
    width: 210px;
    height: 150px;
    background-color: blueviolet;
    background: ${props => (props.imgUrl ? `url(${props.imgUrl}) no-repeat center center` : 'blueviolet')};
    background-size: cover;

    cursor: pointer;

    position: relative;
    > .title {
        position: absolute;
        bottom: 12px;
        left: 15px;

        font-weight: 600;
        color: #fff;
    }

    > .overlay {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0) 15%, rgba(0, 0, 0, 0.9) 100%);
    }
`;

const CategoryBox = ({imgUrl, children,onClick }) => {
    // console.log(imgUrl);
    return (
        <Wrapper onClick={onClick}>
            <Container imgUrl={imgUrl}>
                <div className="overlay" ></div>
                <div className="title">{children}</div>
            </Container>
        </Wrapper>
    );
};

export default CategoryBox;