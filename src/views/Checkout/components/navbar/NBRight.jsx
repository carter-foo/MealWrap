import styled from 'styled-components/macro';
import loginIcon from '@/assets/icons/loginIcon.svg';
import RoundIcon from '@/components/general/RoundIcon';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;

    > .loginBros {
        cursor: pointer;
        display: flex;
        align-items: center;

        > .title {
            margin-left: 10px;
        }
    }
`;

const Icon = styled(RoundIcon)`
    border: 1px solid #e9e9ea;
    > img {
        flex-shrink: 0;
    }
`;

const NBRight = () => {
    return (
        <Wrapper>
            <div className="loginBros">
                <Icon src={loginIcon} outerSize="44px" innerSize="25px" />
                <div className="title">
                    <p>Log In</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default NBRight;
