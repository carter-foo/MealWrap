import React from 'react';
import styled from 'styled-components/macro';
import logo from '../../logo512.png';

const RoundDiv = styled.div`
    border-radius: 50%;
    width: ${props => props.outerSize || '50px'};
    height: ${props => props.outerSize || '50px'};
    /* background-color: yellow; */
    border: 1.5px solid #e9e9ea;
    position: relative;
    /* box-shadow: 1px 0px #e9e9ea inset; */
    flex-shrink: 0;

    > img {
        display: block;
        width: ${props => props.innerSize || 'inherit'};
        height: ${props => props.innerSize || 'inherit'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* object-fit: cover; */
    }
`;

const RoundIcon = props => {
    const { src=logo, outerSize, innerSize, className } = props;
    return (
        <RoundDiv outerSize={outerSize} innerSize={innerSize} className={className}>
            <img src={src} alt="logo" />
        </RoundDiv>
    );
};

export default RoundIcon;
