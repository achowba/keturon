import styled from "styled-components";

// assets
import assets from '../../assets/index';

const LandingHostelWrapper = styled.div`
    align-content: space-between;
    background: url(${assets.images.lighthouse});
    background-position: center 0;
    background-size: cover;
    display: grid;
    padding-bottom: 120px;
    padding-left: 130px;
    padding-top: 30px;


    & > .brand {
        color: #ffffff;
        font-family: "DM Serif Display";
        font-size: 2.5rem;
        font-weight: 400;
    }
`;

const LandingHostel = () => {
    return (
        <LandingHostelWrapper>
            <div className="brand">Keturon</div>
        </LandingHostelWrapper>
    )
};

export default LandingHostel;
