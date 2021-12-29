import styled from "styled-components";

import assets from "../../../assets/index";

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    margin-left: 130px;
    position: absolute;
    top: 85vh;
    width: 90%;
`;

const SearchWrapper = styled.div`
    box-shadow: 0px 15px 25px 5px #00000020;
    display: flex;
    justify-content: space-between;
    transform: translateX(-100px);

    > .form-input {
        background: #ffffff;
        display: grid;
        grid-template-columns: 1fr 0.8fr 0.8fr 0.8fr;
        justify-content: space-between;
        padding: 35px;
    }

    > button {
        background-color: #ff734c;
        border: none;
        color: #ffffff;
        cursor: pointer;
        font-family: 'Poppins';
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        width: 150px;
    }

`;

const InputWrapper = styled.div`
    align-items: start;
    display: grid;
    grid-template-columns: 25px 1fr;

    > .title {
        margin-bottom: 10px;

        > img {
            width: 15px;
            height: 15px;
        }
    }

    > .input-wrapper {
        > p {
            color: #353535;
            font-size: 0.8rem;
            font-weight: 600;
            margin: 0;
        }

        > input {
            border: none;
            color: #888888;
            font-size: 0.8rem;
            letter-spacing: 0.02rem;
            margin-top: 2px;
            outline: none;
            padding: 5px 0 0 0;
            width: 100%;

            ::placeholder {
                color: #adadad;
            }
        }
    }
`;

const Location = styled.div`
    align-items: center;
    display: flex;

    > .icon {
        align-items: center;
        background: transparent;
        border: 1px solid #ffffff;
        border-radius: 50%;
        display: grid;
        height: 45px;
        justify-content: center;
        margin-right: 15px;
        width: 45px;

        & > img {
            width: 22px;
        }
    }

    > .name {
        > p {
            color: #ffffff;
            margin: 0;

            :first-child {
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
`;

const Search = () => {
    return (
        <Wrapper>
            <Location>
                <div className="icon">
                    <img src={assets.icons.pinIconWhite} alt="" />
                </div>
                <div className="name">
                    <p>Malang, Indonesia</p>
                    <p>2 Bedrooms</p>
                </div>
            </Location>
            <SearchWrapper>
                <div className="form-input">
                    <InputWrapper>
                        <div className="title">
                            <img src={assets.icons.pinIconBlue} alt="" />
                        </div>
                        <div className="input-wrapper">
                            <p>Location</p>
                            <input type="text" className="field" placeholder="Where are you going?" />
                        </div>
                    </InputWrapper>
                    <InputWrapper>
                        <div className="title">
                            <img src={assets.icons.pinIconBlue} alt="" />
                        </div>
                        <div className="input-wrapper">
                            <p>Check-in</p>
                            {/* <input type="date" className="field" placeholder="Select date"/> */}
                            <input type="text" className="field" placeholder="Select date" />
                        </div>
                    </InputWrapper>
                    <InputWrapper>
                        <div className="title">
                            <img src={assets.icons.pinIconBlue} alt="" />
                        </div>
                        <div className="input-wrapper">
                            <p>Check-out</p>
                            <input type="text" className="field" placeholder="Select date" />
                        </div>
                    </InputWrapper>
                    <InputWrapper>
                        <div className="title">
                            <img src={assets.icons.pinIconBlue} alt="" />
                        </div>
                        <div className="input-wrapper">
                            <p>Travelers</p>
                            <input type="text" className="field" placeholder="Add guests" />
                        </div>
                    </InputWrapper>
                </div>
                <button>SEARCH</button>
            </SearchWrapper>
        </Wrapper>
    )
}

export default Search;
