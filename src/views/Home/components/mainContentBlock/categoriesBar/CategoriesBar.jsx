import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import CateCube from './CategoryCube';

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 36.5px;
    margin: 15px 0;

    display: flex;
    justify-content: center;
`;

const ViewAllButton = styled(CateCube)`
    width: 90px;

    cursor: pointer;

    > .title {
        font-size: 14px;
    }
`;

const CateBar = () => {
    let navigate = useNavigate();

    const [cateData, setCateData] = useState([]);
    useEffect(() => {
        const request = async () => {
            try {
                const res = await axios.get('/api/v1/tag/all');
                const newData = res.data.data;
                newData.length = 5;
                console.log(newData);
                setCateData(newData);
            } catch (err) {
                console.err(err);
            }
        };

        request();

        // return () => request = void(0);
    }, []);

    return (
        <>
            <Wrapper>
                {cateData.map((item, index) => {
                    return (
                        <CateCube
                            key={index}
                            title={item.name}
                            selected={false}
                            onClick={() =>
                                navigate('/merchantsbytag', {
                                    state: { tagName: item.name },
                                })
                            }
                        />
                    );
                })}

                <ViewAllButton
                    title="View All"
                    selected={false}
                    iconSize="24px"
                    onClick={() => {
                        navigate('/Categories');
                    }}
                />
            </Wrapper>
        </>
    );
};

export default CateBar;
