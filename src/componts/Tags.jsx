import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Tag = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgLink} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.raza}</Button>
      </Card.Body>
    </Card>
  );
};

Tag.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
};

export default Tag;
