const bot = {
  name: 'Bot',
  message: ['hello', 'what is your name'],
  /**
   * Realizes method sendMessage.
   * @param {function} func
   */
  handleFunction(func) {
    this.sendMessage = func;
  },
  /**
   * Handles a user's message and records answers of bot in a new object.
   * Calls the method of sendMessaage during 200 milliseconds.
   * @param {object} text
   */
  handleAnswerByBot(text) {
    const answerMessage = (text.message === 'hello') ? bot.message[0] : bot.message[1];
    const messageBot = {
      name: bot.name,
      message: answerMessage,
    };
    setTimeout(() => this.sendMessage(messageBot), 200);
  },
};

export default bot;
