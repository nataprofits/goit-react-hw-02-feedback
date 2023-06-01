import { Component } from "react";
import FeedBackOptions from "components/FeedbackOptions/FeedBackOptions";
import Section from "components/Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  totalFeedback = () => {
    return Object.keys(this.state.reduce(
      (total, key) => (total += this.state[key]),
      0
    ))
  }

  onLeaveFeedback = (option) => {
    this.state(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }
  render(){
     return (
    <Section title="Please leave feedback">

      <FeedBackOptions
      options = {Object.keys(this.state)}
      onLeaveFeedback={this.onLeaveFeedback}
      />
    </Section>
  );
  }
 
};
