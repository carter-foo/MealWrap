import styled from 'styled-components/macro';
import exampleImg from '@/assets/mockimages/image4.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { loginInfo } from '@/store/loginStore';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* margin-bottom: 10px; */
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;

    &::before {
        content: '';
        background: ${props =>
            `rgba(0,0,0,0.7) url(${props.bkg}) no-repeat center / cover`};
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.4;
    }

    > .login-window {
        width: 380px;
        height: 582px;
        padding: 40px 32px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */

        > .logo {
            width: 130px;
            height: 80px;
            background-color: skyblue;
        }

        > .titles {
            div {
                text-align: center;
                letter-spacing: 0.25px;
            }

            .title {
                font-size: 24px;
                font-weight: 600;

                margin-bottom: 12px;
            }

            .sub-title {
                font-size: 14px;
                color: #9fa2b4;
            }
        }

        > .titles {
            margin-top: 32px;
            margin-bottom: 48px;
        }

        > .inputs {
            width: 100%;
            > div {
                width: 100%;
                margin-bottom: 24px;
                > .title {
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 15px;
                    letter-spacing: 0.3px;

                    color: #9fa2b4;

                    margin-bottom: 6px;
                }
                > .input {
                    width: 100%;
                    input {
                        width: 100%;
                        /* height: 42px; */
                        padding: 11px 8px 11px 16px;
                        border: 1px solid #f0f1f7;
                        box-sizing: border-box;
                        border-radius: 8px;

                        &::placeholder {
                            font-size: 14px;
                            line-height: 20px;
                            letter-spacing: 0.3px;
                            color: #4b506d;
                            opacity: 0.4;
                        }
                    }
                }
            }
        }

        .confirm-btn {
            margin-bottom: 32px;

            background: #3751ff;
            box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
            border-radius: 8px;

            width: 316px;
            height: 48px;
            text-align: center;
            padding: 15px 0;

            font-weight: 400;
            font-size: 14px;
            line-height: 20px;

            letter-spacing: 0.2px;

            color: #ffffff;
            cursor: pointer;
        }

        .signup-prompt {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;

            text-align: center;
            letter-spacing: 0.3px;

            .signup {
                color: #3751ff;
                cursor: pointer;
            }
            color: #9fa2b4;
        }
    }

    input:focus,
    textarea:focus {
        outline: none;

        border: 1px solid #f60;
    }
`;

const Login = () => {
    const bkg = exampleImg;
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [info, setInfo] = useRecoilState(loginInfo);

    const loginRequest = async () => {
        try {
            const res = await axios.post('/api/v1/user/login', {
                phone,
                password,
            });
            console.log(res.data.data);
            setInfo({ phone, ...res.data.data });
            sessionStorage.setItem("userInfos",JSON.stringify({ phone, ...res.data.data }))
            console.log("info: ", info);
            navigate("/",{state:info});
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Wrapper>
            <Container bkg={bkg}>
                <div className="login-window">
                    <div className="logo"></div>
                    <div className="titles">
                        <div className="title">Log In to MealWrap</div>
                        <div className="sub-title">
                            Enter your email and password below
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="email">
                            <div className="title">PHONE</div>
                            <div className="input">
                                {/* {phone} */}
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="password">
                            <div className="title">PASSWORD</div>
                            <div className="input">
                                {/* {password} */}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="confirm-btn" onClick={() => loginRequest()}>
                        Log In
                    </div>
                    <div className="signup-prompt">
                        <span className="prompt">Don't have an account? </span>
                        <span className="signup" onClick={() => navigate('/signup')}>
                            Sign up
                        </span>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default Login;
