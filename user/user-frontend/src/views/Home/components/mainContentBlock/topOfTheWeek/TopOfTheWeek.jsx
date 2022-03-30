import styled from 'styled-components/macro';
import HdSwiper from './TotwSwiper';

const Wrapper = styled.div`
    width: 100%;
    /* padding: 0 20px; */
    margin-top: 20px;

    > .title {
        font-size: 20px;
        font-weight: 800;

        margin-bottom: 16px;
    }
`;

const TopOfTheWeek = props => {
    const { className } = props;
    return (
        <>
            <Wrapper className={className}>
                <div className="title">Top of the week</div>
                <HdSwiper />
            </Wrapper>
        </>
    );
};

export default TopOfTheWeek;
