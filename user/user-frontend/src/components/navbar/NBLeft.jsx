import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Dropdown from '@/components/general/Dropdown';
import downIcon from '@/assets/icons/down.svg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MapImg } from '@/assets/mockimages/map.svg';
import { useRecoilState } from 'recoil';
import { userAddress } from '@/store/store';

const NewDropdown = styled(Dropdown)`
    top: 95px;
    left: 120px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0px -2px 4px 0px rgb(0 0 0 / 5%);
    border-radius: 4px;
    > .dd_content {
        /* width: 100%; */
        /* height: 100%; */
        /* background-color: red; */
        .dd_container {
            width: 100%;
            height: 100%;

            padding: 40px 15px;

            display: flex;
            flex-direction: column;
            align-items: center;

            > div {
                margin-bottom: 10px;
            }

            .address-confirmBtn {
                margin-top: 15px;
                > button {
                    padding: 6px 10px;
                }
            }
        }
    }
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

        cursor: pointer;
    }
    /* margin-right: 0; */
`;

const NBLeft = () => {
    const [addressState, setAddressState] = useState('');
    const [userAdd, setUserAdd] = useRecoilState(userAddress);
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();
    // const [maskDom, setMaskDom] = useState();

    useEffect(() => {
        setAddressState(userAdd);
    }, [userAdd]);

    const onClose = () => {
        setVisible(false);
    };
    return (
        <LogoAddressBlock>
            <div className="logo" onClick={() => navigate('/')}></div>
            {userAdd === '' ? (
                <AddressTitle onClick={() => setVisible(!visible)}>
                    <div className="titie">Choose your location</div>
                    <img src={downIcon} alt="" />
                </AddressTitle>
            ) : (
                <AddressTitle onClick={() => setVisible(!visible)}>
                    {userAdd}
                </AddressTitle>
            )}

            <NewDropdown
                width="300px"
                height="300px"
                visible={visible}
                onClose={onClose}
                // getContainer={maskDom}
                // visibleMask = {false}
                // contentClassName="dd_content"
            >
                <div className="dd_container">
                    <div className="address-img">
                        <MapImg />
                    </div>
                    <div className="address-prompt">Please enter your address</div>
                    <div className="address-input">
                        <input
                            type="text"
                            onChange={e => setAddressState(e.target.value)}
                            value={addressState}
                        />
                    </div>
                    <div className="address-confirmBtn">
                        <button
                            onClick={() => {
                                sessionStorage.setItem('userAddress',addressState);
                                setUserAdd(addressState);
                                setVisible(!visible);
                            }}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </NewDropdown>
        </LogoAddressBlock>
    );
};

export default NBLeft;
