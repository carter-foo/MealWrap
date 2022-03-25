import styled from 'styled-components/macro';
import CategoryBox from './CategoryBox.jsx'
import exampleImg from "@/assets/mockimages/image3.jpg"

const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    padding: 32px 0;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-items: center;
    align-items: center;
    row-gap: 20px;
`;

const MainContent = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Container>
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
                <CategoryBox imgUrl={exampleImg}>Salad</CategoryBox>
            </Container>
        </Wrapper>
    );
};

export default MainContent;
