import { Component } from "react";
import FeedBackOptions from "components/FeedbackOptions/FeedBackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.state(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }
  render(){
     return (
    <div>
      <FeedBackOptions
      options = {Object.keys(this.state)}
      onLeaveFeedback={this.onLeaveFeedback}
      />
    </div>
  );
  }
 
};
