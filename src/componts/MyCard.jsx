import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.imgLink} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.raza}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
