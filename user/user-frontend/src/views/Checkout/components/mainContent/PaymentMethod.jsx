import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    > .main_title {
        font-size: 17px;
        font-weight: 600;

        /* margin-bottom: 2px; */
    }

    > .main_selectbar {
        /* border-radius: 16px; */
        border: 1px solid #e9e9ea;
        height: 40px;
        
        display: flex;
        justify-content: center;
        .pm{
            width: 200px;
        }
    }
`;

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <Wrapper>
            <Container>
                <div className="main_title">Payment Method</div>
                {/* {paymentMethod} */}
                <div className="main_selectbar">
                    <select name="" id="" value={paymentMethod} className='pm' onChange={e => setPaymentMethod(() => e.target.value)}>
                        <option value="0">Credit or Debit Card</option>
                        <option value="1">Cash</option>
                    </select>
                </div>
            </Container>
        </Wrapper>
    );
};

export default PaymentMethod;
