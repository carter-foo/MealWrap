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

        margin-bottom: 5px;
    }

    > .main_selectbar {
        border: 1px solid #e9e9ea;
        height: 40px;

        display: flex;
        justify-content: center;
        .tips {
            width: 200px;
        }
    }
`;

const Tips = ({ tipPercent, setTipPercent }) => {
    return (
        <Wrapper>
            <Container>
                <div className="main_title">Tip</div>
                {/* {tipPercent} */}
                <div className="main_selectbar">
                    <select
                        name=""
                        id=""
                        value={tipPercent}
                        className="tips"
                        onChange={e => setTipPercent(() => e.target.value)}
                    >
                        <option value="0.1">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.2">20%</option>
                        <option value="0.25">25%</option>
                    </select>
                </div>
            </Container>
        </Wrapper>
    );
};

export default Tips;
