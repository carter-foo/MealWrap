import styled from 'styled-components/macro';
import Left from './NBLeft';
import Right from './NBRight';

const NavBarBase = styled.div`
    height: 90px;
    padding: 0 20px;
    /* outline: 1px solid; */
    border-bottom: 1px solid #f5f3f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 20;
    background-color: #fff;
`;

const NavBar = () => {
    return (
        <NavBarBase>
            <Left />
            <Right />
        </NavBarBase>
    );
};

export default NavBar;
