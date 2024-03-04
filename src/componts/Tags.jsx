import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

const Tag = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgLink} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <h3>
          <Badge bg={props.badge}>{props.raza}</Badge>
        </h3>
      </Card.Body>
    </Card>
  );
};

Tag.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
};

export default Tag;
