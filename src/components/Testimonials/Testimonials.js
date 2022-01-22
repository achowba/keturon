import styled from "styled-components";

// data
import DATA from "../../models/data";

// components
import * as Text from "../UI/Text/Text";
import Testimonial from "./Testimonial/Testimonial";

const StyledTestimonials = styled.div`
    background: #0f1f31;

    .testimonial-intro {
        background: #0f1f31;
        display: grid;
        gap: 200px;
        grid-template-columns: 1fr 1fr;
        padding: 100px 0 0 130px;

        .info {
            align-self: center;

            p {
                line-height: 35px;
            }
        }
    }

    .testimonials-wrapper {
        padding: 0 0 0 130px;
        background: transparent;
        display: grid;
        gap: 45px;
        grid-auto-columns: 600px;
        grid-auto-flow: column;
        overflow-x: scroll;
        margin-bottom: 30px;
        scrollbar-width: none;
        transform: translateY(115px);
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

const Testimonials = () => {
    return (
        <StyledTestimonials>
            <div className="testimonial-intro">
                <div className="header">
                    <Text.Info style={{ color: '#ff734c' }}>TESTIMONIALS</Text.Info>
                    <Text.Header style={{ color: '#ffffff' }}>Every stay has<br /> a story</Text.Header>
                </div>
                <div className="info">
                    <Text.Detail style={{ color: '#ffffff' }}>
                        Lorem ipsum dolor sit amet, adipisicing elit. Lectus <br />
                        molestie porttitor aliquet feugiat in quisque fermentum <br />
                        quam leo. Proin l
                    </Text.Detail>
                </div>
            </div>
            <div className="testimonials-wrapper">
                {DATA.testimonials.map((testimonial) => <Testimonial key={testimonial.id} {...testimonial} />)}
            </div>
        </StyledTestimonials>
    );
}

export default Testimonials;
