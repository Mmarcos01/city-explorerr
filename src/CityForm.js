import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.handleSearch(this.state.value);
}

// handleChange = (event) => {
//   event.preventDefault();
//   this.setState({ value: event.target.value })
// }

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <Form.Label>Enter a city:</Form.Label>
        <Form.Control type="text" placeholder="Seattle, WA..." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Explore!
  </Button>
    </Form>
  );
}
}

export default CityForm;
