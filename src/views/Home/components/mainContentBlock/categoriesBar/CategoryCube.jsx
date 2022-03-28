/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import Icon from '@/components/general/RoundIcon';
import { useNavigate } from 'react-router-dom';

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

    border: 1px solid #E9E9EA;
    margin-right: 10px;

    > .title {
        margin-top: 2px;
        font-size: 19px;
        font-weight: 600;
    }

    &:hover{
        background-color:#F43F5E;
        cursor: pointer;
    }
`;

const CateCube = props => {

    const navigate = useNavigate();

    const {
        className,
        title,
        iconSrc,
        selected = false,
        width,
        iconSize,
        onClick,
    } = props;
    return (
        <>
            <Wrapper
                className={className}
                selected={selected}
                width={width}
                onClick={onClick}
            >
                {/* <Icon outerSize={iconSize || '25.6px'} src={iconSrc} /> */}
                <div className="title">{title}</div>
            </Wrapper>
        </>
    );
};

export default CateCube;
