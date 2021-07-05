import React, { Component } from 'react';
import {
  Container,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import History from './History';


class Chat extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      history: [],
      message: user.message,
    };
    const { bot } = this.props;
    bot.handleFunction(this.handleSubmit);
  }

  /**
   * Saves an object in the history's state. Clears the field of input message.
   * @param {object} message - contains a name and message.
   */
  handleSubmit = (message) => {
    this.setState(prevState => ({ history: [...prevState.history, message] }));
    this.state.message = '';
  }

  /**
   * Handle messages which entered by the user. Creates an object and transmits it into
   * the method of handleSubmit and handleAnswerByBot.
   */
  handleUserMessage = () => {
    const { user, bot } = this.props;
    const { message } = this.state;
    const messageUser = {
      name: user.name,
      message,
    };
    this.handleSubmit(messageUser);
    bot.handleAnswerByBot(messageUser);
  }

  /**
   * Calls when execute the onKeyPress event.
   */
  handlePress = (event) => {
    if (event.key === 'Enter') {
      this.handleUserMessage();
    }
  }

  /**
   * Handles user's input and updates mesagges's state.
   */
  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  render() {
    const { history, message } = this.state;
    return (
      <Container>
        <Row>
          <Col lg="12">
            <History history={history} />
            <Row>
              <Col lg="10">
                <Input
                  onChange={this.handleChange}
                  value={message}
                  type="text"
                  onKeyPress={this.handlePress}
                />
              </Col>
              <Col lg="2">
                <Button
                  onClick={this.handleUserMessage}
                  className="w-100 h-100"
                  color="primary"
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

Chat.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  bot: PropTypes.shape({
    handleFunction: PropTypes.func.isRequired,
    handleAnswerByBot: PropTypes.func.isRequired,
  }).isRequired,
};


export default Chat;
