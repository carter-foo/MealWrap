/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import Icon from '@/components/general/RoundIcon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    height: 80px;
    width: 150px;
    border-radius: 5px;
    background-color: ${props => props.selected && '#F43F5E'};

    > .title {
        margin-top: 7px;
        font-size: 17px;
    }
`;

const CateCube = props => {
    const { className, title, iconSrc, selected = false, width, iconSize } = props;
    return (
        <>
            <Wrapper className={className} selected={selected} width={width}>
                <Icon outerSize={iconSize || '25.6px'} src={iconSrc} />
                <div className="title">{title}</div>
            </Wrapper>
        </>
    );
};

export default CateCube;
