import * as React from 'react';

import axios from 'axios';

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}


class Counter extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });

    (async () => {
        const response = await axios({
          url: 'http://localhost:4000',
          method: 'post',
          data: count
        })
      
        console.log(response)
      })()

  };

  public render() {
    return (
      <div>
        <p>My favorite number is {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;