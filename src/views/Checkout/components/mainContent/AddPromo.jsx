import styled from 'styled-components/macro';

const Wrapper = styled.div``;
const Container = styled.div`
    > .addpromo_title{
        font-weight:600;
        font-size: 16px;

        margin-bottom: 16px;
    }
`;

const AddPromo = props => {
    return (
        <Wrapper>
            <Container>
                <div className="addpromo_title">Add Voucher or Promo Code</div>
                <input type="text" />
            </Container>
        </Wrapper>
    );
};

export default AddPromo;
