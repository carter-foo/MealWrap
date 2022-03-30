import styled from 'styled-components/macro';
import CategoryBox from './CategoryBox.jsx';
// import exampleImg from '@/assets/mockimages/image3.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 920px;
    min-height: calc(100% - 90px);
`;

const Container = styled.div`
    padding: 32px 0;

    > .title {
        font-size: 24px;
        font-family: JETSansDigital, sans-serif;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0;

        padding-left: 10px;
    }

    > .content-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 20px;

        padding: 32px 0;
    }
`;

const MainContent = ({ className }) => {
    const navigate = useNavigate();

    const [cateData, setCateData] = useState([]);
    useEffect(() => {
        const request = async () => {
            try {
                const res = await axios.get('/api/v1/tag/all');
                setCateData(res.data.data);
            } catch (err) {
                console.err(err);
            }
        };

        request();
    }, []);

    return (
        <Wrapper className={className}>
            <Container>
                <div className="title">All Categories</div>
                <div className="content-container">
                    {console.log('cateData',cateData)}
                    {cateData.map((item, index) => {
                        return (
                            <CategoryBox
                                key={index}
                                imgUrl={`/api/v1/tag/image?id=${item.id}`}
                                onClick={() =>
                                    navigate('/merchantsbytag', {
                                        state: { tagName: item.name },
                                    })
                                }
                            >
                                {item.name}
                            </CategoryBox>
                        );
                    })}
                </div>
            </Container>
        </Wrapper>
    );
};

export default MainContent;
