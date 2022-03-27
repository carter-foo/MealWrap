import styled from 'styled-components/macro';
import MenuItems from './MenuItems';

const Wrapper = styled.div`
    width: 100%;

    margin: 40px 0;
`;

const Container = styled.div`
    width: 100%;

    > .title{
        height: 24px;
        font-weight: 600;
        font-size: 22px;

        margin-bottom: 20px;
    }

    > .items{
        display: flex;
        flex-direction: column;

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
                </div>
            </Container>
        </Wrapper>
    );
};

export default MenuBox;
