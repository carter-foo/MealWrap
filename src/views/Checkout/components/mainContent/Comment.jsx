import styled from 'styled-components/macro';

const Wrapper = styled.div`
    width: 100%;
`;
const Container = styled.div`
    > .addpromo_title {
        font-weight: 600;
        font-size: 16px;

        margin-bottom: 16px;
    }

    > .commentArea{
        display: block;
        width: 100%;
    }
`;

const Comment = ({comment, setComment}) => {
    return (
        <Wrapper>
            <Container>
                <div className="addpromo_title">Comment</div>
                {/* {comment} */}
                <textarea type="text" className='commentArea' value={comment} onChange={e => setComment(() => e.target.value)}/>
            </Container>
        </Wrapper>
    );
};

export default Comment;
