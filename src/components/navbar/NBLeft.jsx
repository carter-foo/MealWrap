import { useState } from 'react';
import styled from 'styled-components/macro';
import Dropdown from '@/components/general/Dropdown';
import downIcon from '@/assets/icons/down.svg';

const NewDropdown = styled(Dropdown)`
    top: 95px;
    left: 120px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0px -2px 4px 0px rgb(0 0 0 / 5%);
    border-radius: 4px;
    /* .dd_content { 
        position: absolute;
        /* z-index: 4; */
    /* left: 20px;
    } */
`;

const AddressTitle = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;

    > img {
        width: 25px;
        flex-shrink: 0;
    }
`;

const LogoAddressBlock = styled.div`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    > .logo {
        width: 170px;
        height: 90px;
        background-color: skyblue;
        flex-shrink: 0;
        margin-right: 22px;
    }
    /* margin-right: 0; */
`;

const NBLeft = () => {
    const [visible, setVisible] = useState(false);
    // const [maskDom, setMaskDom] = useState();

    // useEffect(() => {
    //     setMaskDom(document.getElementById("root"));
    // }, []);

    const onClose = () => {
        setVisible(false);
    };
    return (
        <LogoAddressBlock>
            <div className='logo'></div>
            <AddressTitle onClick={() => setVisible(!visible)}>
                <div className='titie'>Choose your location</div>
                <img src={downIcon} alt='' />
            </AddressTitle>
            <NewDropdown
                width='300px'
                height="300px"
                visible={visible}
                onClose={onClose}
                // getContainer={maskDom}
                // visibleMask = {false}
                // contentClassName="dd_content"
            ></NewDropdown>
        </LogoAddressBlock>
    );
};

export default NBLeft;
