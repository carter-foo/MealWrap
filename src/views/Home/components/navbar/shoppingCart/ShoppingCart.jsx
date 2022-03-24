import Drawer from '@/components/general/Drawer';
import styled from 'styled-components/macro';
import { ReactComponent as DiscountImg } from '@/assets/mockimages/Card.svg';
import MerchantBlock from './components/MerchantBlock';

const Wrapper = styled.div``;
const Container = styled.div`
    .shoppingCartElements {
        width: 100%;
        padding-bottom: 50px;
    }
`;

const ShoppingCart = ({ className, onClose, visible, children }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <Drawer onClose={onClose} visible={visible} className="drawer">
                    <div className="shoppingCartElements">
                        <div className="discountimg">
                            <DiscountImg />
                        </div>
                        <div className="elementContainer">
                            <MerchantBlock />
                            <MerchantBlock />
                            <MerchantBlock />
                            <MerchantBlock />
                        </div>
                    </div>
                </Drawer>
            </Container>
        </Wrapper>
    );
};

export default ShoppingCart;
