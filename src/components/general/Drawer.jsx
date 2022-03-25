/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import logo from '@/assets/icons/closeIcon.svg';
import { createPortal } from 'react-dom';

/**
 * Drawer
 * @param {visible} bool Dropdown is visible if it is ture
 * @param {visibleCloseIcon} bool Whether to display the closing button in the upper right corner
 * @param {getContainer} HTMLElement mounted dom element node, false to mount on #root
 * @param {maskClosable} bool Whether close the dropdown by clicking the mask area
 * @param {visibleMask} bool Whether if the mask is visible
 * @param {width} number|string  width of the dropdown
 * @param {height} number|string height of the dropdown
 * @param {zIndex} number Adjust the zIndex(CSS)
 * @param {placement} string The opening direction of the Dropdown
 * @param {onClose} string Callback after closing
 */

const DrawerContentWrap = styled.div`
    overflow: hidden;
    z-index: ${props => props.zIndex};
    position: absolute;
    right: 0;
    width: 327px;
    height: 100%;

    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0px -2px 4px 0px rgb(0 0 0 / 5%);
    border-radius: 4px;

    /* background-color: red; */
`;

const DrawerContentContainer = styled.div`
    /* position:relative; */
    width: ${props => props.width};
    height: ${props => props.height};
    overflow-y: auto;
    /* overflow-y: overlay; */
    /* overflow-x: hidden; */
`;

const CloseBtn = styled.div`
    display: ${props => (props.display === 'true' ? 'block' : 'none')};
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    > img {
        width: inherit;
        /* width: 100px; */
        height: inherit;
        /* background-color: yellowgreen; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const DrawerContent = props => {
    const {
        // visibleCloseIcon = false,
        // maskClosable = true,
        className,
        width = '100%',
        height = '100%',
        zIndex = 2,
        children,
        // destroyOnClose,
    } = props;

    return (
        <DrawerContentWrap zIndex={zIndex} className={className}>
            <DrawerContentContainer width={!!width ? width : 'unset'} height={!!height ? height : 'unset'}>
                {children}
                {/* {!!visibleCloseIcon && (
                    <CloseBtn onClick={handleClose}>
                        <img src={logo} alt="close" />
                    </CloseBtn>
                )} */}
            </DrawerContentContainer>
        </DrawerContentWrap>
    );
};

const DrawerWrapper = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.7);
`;

const MaskStyle = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.3);
    /* z-index: 4; */
`;

const Drawer = props => {
    const { onClose, visible, children, className } = props;

    const handleClose = () => {
        onClose && onClose();
    };

    // const node = useRef(document.createElement('div'));
    // const container = props.container || document.getElementById('root');

    // useEffect(() => {
    //     console.log('container in mask component', container);
    //     let appendedChild = !!container && container.appendChild(node.current);
    //     return () => {
    //         return !!appendedChild === true ? !!container && container.removeChild(appendedChild) : undefined;
    //     };
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // return createPortal(
    //     <DrawerWrapper visible={visible} className={className}>
    //         <MaskStyle onClick={handleClose}></MaskStyle>
    //         <DrawerContent>
    //             {children}
    //         </DrawerContent>
    //     </DrawerWrapper>,
    //     node.current,
    // );
    return (
        <DrawerWrapper visible={visible} className={className}>
            <MaskStyle onClick={handleClose}></MaskStyle>
            <DrawerContent>
                {children}
            </DrawerContent>
        </DrawerWrapper>
    );
};

export default Drawer;
