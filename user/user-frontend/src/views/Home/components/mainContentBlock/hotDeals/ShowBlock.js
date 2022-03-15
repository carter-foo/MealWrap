import styled from "styled-components/macro";

const Wrapper = styled.div`
    position: relative;
`

const RateStarFrostedGlassWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;

    position: absolute;
    width: 62px;
    height: 32px;
    left: 14px;
    top: 14px;

    background: rgba(31, 39, 45, 0.2);
    backdrop-filter: blur(4px);

    border-radius: 5px;
`;

const TextFrostedGlassWrapper = styled.div`
    position: absolute;
    width: 184px;
    height: 83px;
    left: 8px;
    top: 164px;

    background: rgba(31, 39, 45, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 5px;
`;

const ShowBlocks = props => {
    const {className, style} = props;

    return (
        <Wrapper className={className} style={style}>
            <RateStarFrostedGlassWrapper />
            <TextFrostedGlassWrapper />
        </Wrapper>
    );
}

export default ShowBlocks;