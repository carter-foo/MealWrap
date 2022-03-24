import Drawer from '@/components/general/Drawer';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;
const Container = styled.div``;

const ShoppingCart = ({ className, onClose, visible }) => {
    return (
        <Wrapper className={className}>
            <Container>
                {/* <SCDropdown visibleCloseIcon={false} width="327px" height="calc(100vh - 90px)" visible={visible} onClose={onClose} /> */}
                <Drawer onClose={onClose} visible={visible}>
                    
                </Drawer>
            </Container>
        </Wrapper>
    );
};

export default ShoppingCart;
