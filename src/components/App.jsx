import { Component } from 'react';
import { Box } from './Box/Box.Styled';
import { StatisticsCard } from './StatisticsCard/StatisticsCard.styled';
import { FeedBack } from './FeedBack/FeedBack';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedback = ({ target }) => {
    const btnName = target.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const btns = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Box>
        <StatisticsCard>
          <FeedBack
            title={'Please leave feedback'}
            btns={btns}
            onClickFeedback={this.clickFeedback}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </StatisticsCard>
      </Box>
    );
  }
}
