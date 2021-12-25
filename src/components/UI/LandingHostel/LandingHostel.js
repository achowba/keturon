import styled from "styled-components";

const LandingHostelWrapper = styled.div`
    background: url('https://images.unsplash.com/photo-1534239697798-120952b76f2b'); // ?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80
    background-position: center 0;
    background-size: cover;

    & > .brand {
        color: #ffffff;
        font-family: "DM Serif Display";
        font-size: 2.5rem;
        font-weight: 400;
        padding-top: 35px;
        padding-left: 120px;
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
