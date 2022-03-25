import styled from 'styled-components/macro';
import CategoryBox from './CategoryBox.jsx';
import exampleImg from '@/assets/mockimages/image3.jpg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    padding: 32px 0;

    > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;

        padding-left: 10px
    }

    > .content-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;

        padding: 32px 0;
    }
`;

const MainContent = ({ className }) => {
    const navigate = useNavigate();
    return (
        <Wrapper className={className}>
            <Container>
                <div className="title">All Categories</div>
                <div className="content-container">
                    <CategoryBox imgUrl={exampleImg} onClick={() => navigate('/merchants', { state: { tagName: 'Salad' } })}>
                        Salad
                    </CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                    <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
                </div>
            </Container>
        </Wrapper>
    );
};

export default MainContent;
