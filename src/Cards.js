import React from "react";
import { Card, Button } from "react-bootstrap";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Add your card here.",
    };
  }

  render() {
    return (
      <h5 className="m-4">
        <div className="container mt-2">
          <div className="row mw-100 justify-content-between">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Jim Harbaugh</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://townsquare.media/site/694/files/2018/11/Harbaugh-screaming-e1543245803752.jpg"
                />
                <Card.Text>Michigan Football Coach</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFQ1JbIXrrhfQ/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=T6fvazJXhB23hX4Y-UjXy3GKcH2mJTCVhLLU7KxdYV4"
              />
              <Card.Body>
                <Card.Title>Lamarr Henry</Card.Title>
                <Card.Text>
                  Software Engineer from Ohio State University
                </Card.Text>
                <Button
                  href="https://www.linkedin.com/in/lamarr-henry-a20218141/"
                  target="_blank"
                >
                  Let's Connect
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/Brutus_Buckeye_in_2017.jpg"
                />
                <Card.Title>Rebecca Zhou</Card.Title>
                <Card.Text>Go Canucks</Card.Text>
                <Button
                  href="https://www.linkedin.com/in/rebecca-zhou-pmp-6b45914/"
                  target="_blank"
                >
                  Let's Connect
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Aaron Osborne</Card.Title>
                <Card.Text>Software Engineer and Michigan Alumni</Card.Text>
                <Button href="https://github.com/aaronosb" target="_blank">
                  Check out my GitHub Profile
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Dzenana Svraka</Card.Title>
                <Card.Text>
                  Software Engineer from University of Michigan
                </Card.Text>
                <Card.Text>This is just a text card!</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Grace Wilcox</Card.Title>
                <Card.Text>
                  Computer science student at the University of Florida.
                </Card.Text>
                <Card.Text>Go Gators!</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Sruthi Jayanti</Card.Title>
                <Card.Text>
                  Computer Science Student from University of Illinois at
                  Urbana-Champaign
                </Card.Text>
                <Button
                  href="https://www.linkedin.com/in/sruthij02/"
                  target="_blank"
                >
                  Check out my LinkedIn!
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Hello! I am Allison Broccolo</Card.Title>
                <Card.Text>Data Analytics @ OSU</Card.Text>
                <Button
                  href="https://www.linkedin.com/in/allison-broccolo/"
                  target="_blank"
                >
                  Here's my LinkedIn :)
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </h5>
    );
  }
}

export default Cards;
