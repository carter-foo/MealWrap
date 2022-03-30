import styled from 'styled-components/macro';
import { ReactComponent as MapImg } from '@/assets/mockimages/map.svg';

const Wrapper = styled.div`
    /* height: 100%; */
    /* background-color: red; */
`;

const Container = styled.div`
    .main_title {
        font-size: 17px;
        font-weight: 600;

        margin-bottom: 16px;
    }
    .main_info {
        display: flex;

        .mapimg {
            margin-right: 16px;
        }
        .addressee {
            font-weight: 600;
        }

        .addresses {
            font-size: 14px;
        }
    }
`;

const AddressModify = props => {
    return (
        <Wrapper>
            <Container>
                <div className="main_title">Address</div>
                <div className="main_info">
                    <div className="mapimg">
                        <MapImg />
                    </div>
                    <div className="address_content">
                        <p className="addressee">Office</p>
                        <p className="addresses">
                            Adi Sucipto St. No. 23, Solo, Central Java, Indonesia
                        </p>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default AddressModify;
