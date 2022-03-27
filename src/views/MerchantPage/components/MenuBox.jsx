import styled from 'styled-components/macro';
import MenuItems from './MenuItems';


const Wrapper = styled.div`
    width: 100%;

    margin: 40px 0;
`;

const Container = styled.div`
    width: 100%;

/* > .content-container {
        padding: 32px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;
        column-gap: 12px;
    } */

    /* > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;
    } */

    > .title{
        height: 24px;
        font-weight: 600;
        font-size: 23px;

        margin-bottom: 20px;
    }

    > .items{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 12px;
        column-gap: 12px;
    }
    
`;

const MenuBox = ({ className,title,items }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <div className="title">Menu</div>
                <div className="items">
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                </div>
            </Container>
        </Wrapper>
    );
};

export default MenuBox;
