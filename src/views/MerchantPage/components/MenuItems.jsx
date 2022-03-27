import styled from 'styled-components/macro';

const Wrapper = styled.div`
    width: 100%;

    margin-bottom: 10px;
`;

const Container = styled.div`
    width: 100%;

    background-color: #fff;
    border-radius: 8px;

    padding: 24px 40px;
    > .item {
        display: flex;
        flex-direction: column;

        .item_name {
            font-size: 19px;
            margin-bottom: 15px;
        }
        .item_price {
        }
    }
`;

const MenuItems = ({ className, name, price }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <div className="item">
                    <div className="item_name">Dasani</div>
                    <div className="item_price">$1.99</div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default MenuItems;
