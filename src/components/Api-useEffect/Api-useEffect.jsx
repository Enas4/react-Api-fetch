import { Card } from "react-bootstrap";
import "./Api-useEffect.css";

const ApiUseEffect = (props) => {
  return (
    <>
      <h1>api use effect</h1>
      <div className="container">
        {props.users.map((currEle, idx) => {
          return (
            <Card style={{ width: "18rem" }} key={idx}>
              <Card.Img variant="top" src={currEle.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{currEle.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">{currEle.users}</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ApiUseEffect;
