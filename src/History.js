import React, { PureComponent } from 'react';
import './History.css';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';


class History extends PureComponent {
  render() {
    const { history } = this.props;
    return (
      <Row>
        <Col lg="12">
          <div className="message-list border border-dark font-weight-normal h5 p-3">
            {history.map(index => (
              <div className="w-25 border border-success mb-3 p-3">
                <div background="danger" className="text-primary h2">{index.name}</div>
                <div>{index.message}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    );
  }
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
}

export default History;