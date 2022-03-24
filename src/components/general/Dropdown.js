/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import logo from '@/assets/icons/closeIcon.svg';
import DropdownMask from './Mask';
// * @param {destroyOnClose} bool 关闭时销毁里面的子元素
// * @param {drawerStyle} object 用来设置抽屉弹出层样式

/**
 * Dropdown window
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

const DropdownWrap = styled.div`
    /* width: ${props => props.width}; */
    /* overflow: hidden; */
    z-index: ${props => props.zIndex};
    position: absolute;
    /* top: 100px; */
    background-color: red;
`;

const DropdownContent = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    overflow:hidden;
`;

const CloseBtn = styled.div`
    display: ${props => (props.display==='true' ? 'block' : 'none')};
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

const Dropdown = props => {
    const {
        contentClassName,
        visibleCloseIcon = true,
        getContainer = document.getElementById('root'),
        maskClosable = true,
        visibleMask = true,
        width = '300px',
        height = '300px',
        zIndex = 2,
        onClose,
        children,
        // drawerStyle,
        // destroyOnClose,
        // placement = 'right',
        // getContainer = false,
    } = props;

    /* Hooks ------------------------------------------------ */
    let [visible, setVisible] = useState(props.visible);
    let [container, setContainer] = useState();

    useEffect(() => {
        setVisible(props.visible);
    }, [props.visible]);

    useEffect(() => {
        setContainer(getContainer);
    }, [getContainer]);

    /* Hooks ------------------------------------------------ */

    /* Handle events ---------------------------------------- */
    const handleClose = () => {
        setVisible(false);
        onClose && onClose();
    };

    /* Handle events ---------------------------------------- */
    // width={visible ? 'unset' : '0px'}
    return (
        <DropdownWrap zIndex={zIndex} className={props.className}>
            {!!visibleMask && (
                <DropdownMask clickFunc={maskClosable ? handleClose : null} display={visible ? 'block' : 'none'} container={container}></DropdownMask>
            )}
            <DropdownContent className="dd_content" width={visible ? width : '0px'} height={visible ? height : '0px'}>
                {children}
                {!!visibleCloseIcon && (
                    <CloseBtn onClick={handleClose} display={visible.toString()}>
                        <img src={logo} alt="close" />
                    </CloseBtn>
                )}
            </DropdownContent>
        </DropdownWrap>
    );
};

export default Dropdown;
