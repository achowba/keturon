import styled from "styled-components";

import assets from "../../assets/index";
import * as Text from "../UI/Text/Text";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

// https://player.vimeo.com/external/520542055.sd.mp4?s=44227f7012af6bf6e051559dd6b3a031cebfdb2a&profile_id=165&oauth2_token_id=57447761

const StyledCompanyProfile = styled.div`
    background: #f6f6f6;
    display: grid;
    gap: 120px;
    grid-template-columns: 1fr 1fr;
    padding: 150px 130px 150px 130px;

    .video-wrapper {
        cursor: pointer;
        position: relative;

        video {
            width: 100%;
        }

        :before {
            background: #ffffff30;
            content: '';
            height: 100%;
            position: absolute;
            width: 100%;
        }

        /* :after {
            background-image: url(${assets.icons.playIcon});
            background-color: #00000085;
            background-repeat: no-repeat;
            background-size: 60px;
            border-radius: 50%;
            content: '';
            height: 60px;
            position: absolute;
            right: 45%;
            top: 45%;
            width: 60px;
        } */
    }

    .about-company {
        align-self: top;
        margin-top: 20px;

        h4:first-child {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 100px;
        }

        a {
            padding: 20px 35px;
        }
    }
`;

const CompanyProfile = () => {
    return (
        <StyledCompanyProfile>
            <div className="video-wrapper">
                <video autoPlay loop muted src={assets.videos.companyVideo}/>
            </div>
            <div className="about-company">
                <Text.Info>PREVIEW</Text.Info>
                <Text.Header>Our Company <br /> Profile</Text.Header>
                <Text.Detail>
                    Lorem ipsum dolor sit amet, adipisicing elit. Lectus <br />
                    molestie porttitor aliquet feugiat in quisque fermentum <br />
                    quam leo. Proin l
                </Text.Detail>
                <ButtonLink>READ MORE</ButtonLink>
            </div>
        </StyledCompanyProfile>
    );
}

export default CompanyProfile;
