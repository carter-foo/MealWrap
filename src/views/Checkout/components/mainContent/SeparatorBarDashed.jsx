import styled from 'styled-components';

const StyledSeparatorBarDashed = styled.div`
    width: 100%;
    border-top: 1px dashed #e9e9ea;
    background-color: #c4c4c4;
`;

const SeparatorBarDashed = ({ className }) => {
    return <StyledSeparatorBarDashed className={className} />;
};

export default SeparatorBarDashed;
