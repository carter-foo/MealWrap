import styled from 'styled-components/macro'


const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    padding: 32px 0;
    /* display: flex;
    flex-direction: column;

    margin-bottom: 10px; */

    > .content-container {
        padding: 32px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;
        column-gap: 12px;
    }

    > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;
    }
`;


const MainContent = ({className}) => {
    return (
        <Wrapper className={className}>
            <Container>
                
            </Container>
        </Wrapper>
    )
}

export default MainContent;