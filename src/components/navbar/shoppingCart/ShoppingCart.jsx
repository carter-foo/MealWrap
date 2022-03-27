import Drawer from '@/components/general/Drawer';
import styled from 'styled-components/macro';
import { ReactComponent as DiscountImg } from '@/assets/mockimages/Card.svg';
import MerchantBlock from './components/MerchantBlock';
import { shoppingCartArr } from '@/store/store';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
// const [sc, setSC] = useRecoilState(shoppingCartArr);

const Wrapper = styled.div``;
const Container = styled.div`
    .shoppingCartElements {
        width: 100%;
        padding-bottom: 50px;
        margin-right: 30px;
    }

    > .discountimg {
        width: 100%;
        svg {
            width: 100%;
        }
    }
`;

const ShoppingCart = ({ className, onClose, visible, children }) => {
    const sc = useRecoilValue(shoppingCartArr);

    // useEffect(() => {
    //   console.log("mounted");
    
    //   return () => {
    //     console.log("unmounted");
    //   }
    // }, [sc])
    

    return (
        <Wrapper className={className}>
            <Container>
                <Drawer onClose={onClose} visible={visible} className="drawer">
                    <div className="shoppingCartElements">
                        <div className="discountimg">
                            <DiscountImg />
                        </div>
                        <div className="elementContainer">
                            {sc.map((item, index) => {
                                return <MerchantBlock merchant={item} key={index} mIndex={index} />;
                            })}
                        </div>
                    </div>
                </Drawer>
            </Container>
        </Wrapper>
    );
};

export default ShoppingCart;
