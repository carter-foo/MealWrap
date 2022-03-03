import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

const MaskStyle = styled.div`
    display: ${props => props.display};
    position: fixed;
    /* overflow: hidden; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    /* background-color: blue; */
    z-index: 4;
`;

// const doc = window.document;

const Mask = props => {
    const { clickFunc, display } = props;
    console.log(display);
    const node = useRef(document.createElement('div'));
    const container = props.container;
    useEffect(() => {
        console.log('container in mask component', container);
        let appendedChild = !!container && container.appendChild(node.current);
        return () => {
            return !!appendedChild === true
                ? !!container && container.removeChild(appendedChild)
                : undefined;
        };
    }, [container]);

    return createPortal(
        <MaskStyle onClick={clickFunc} display={display}></MaskStyle>,
        node.current
    );
};

export default Mask;
