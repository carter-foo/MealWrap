import styled from 'styled-components/macro';
import exampleImg from '@/assets/mockimages/image2.jpg';
const Wrapper = styled.div`
    width: 100%;

    /* margin-bottom: 10px; */
`;

const Container = styled.div`
    width: 100%;
    height: 140px;

    background-color: #fff;
    border-radius: 15px;

    border: 1px solid #ebebeb;
    overflow: hidden;

    padding: 0 35px;

    position: relative;
    > .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .item_name {
            font-size: 17px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .item_price {
            font-size: 15px;
            color: #767676;
        }

        .item_img {
            width: 140px;
            height: 100%;
            position: absolute;
            right: 0;
            z-index: 15;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .mask {
            /* display: none; */
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            /* right: 0; */
            width: 100%;
            /* height: 100%; */
            background-color: rgba(0, 0, 0, 0.3);

            z-index: 10;
            .add-btn-container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .add-btn {
                    width: 120px;
                    height: 50px;
                    display: inline-block;
                    text-align: center;
                    padding: 15px 0;
                    border-radius: 5px;
                    background-color: #f43f5e;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
    }

    > .item:hover {
        .mask {
            /* display: block; */
            opacity: 1;
        }
    }
`;

const MenuItems = ({ className, id, name = 'Dasani', price = 1.99 }) => {
    return (
        <Wrapper className={className}>
            <Container>
                <div className="item">
                    <div className="item_name">{name}</div>
                    <div className="item_price">{'$' + price}</div>
                    <div className="item_img">
                        <img src={exampleImg} alt="item-img" />
                    </div>
                    <div className="mask">
                        <div className="add-btn-container">
                            <div className="add-btn">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default MenuItems;
