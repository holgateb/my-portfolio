import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [", Web Developer", ", Web Designer", ", Team Leader"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi! I'm Bennett`}{""}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "Team Leader" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Engaging, customer-centric IT professional, acknowledged for
                    consistent impact in positions involving technical
                    troubleshooting and problem resolution, internal/external
                    customer support, systems and process development,
                    network/server and systems administration, and team
                    leadership. Collaborative and inclusive, with a reputation
                    as a tireless internal and external customer advocate. Track
                    record working cross-departmentally to solve challenging
                    technical problems for key business clients with efficient
                    and scalable solutions. An excellent communicator capable of
                    translating complex technical terminology to relatable
                    language. A skilled personnel manager with demonstrated
                    ability to mentor team members to promotion.
                    Technically-savvy and committed to ongoing professional
                    development.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <img src="../assets/img/icon2.png"></img>
        </Row>
      </Container>
    </section>
  );
};
