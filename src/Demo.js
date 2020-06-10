import React from 'react';

export default class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number) => number * 2);
      return (
        <div>
          Seconds: {this.state.seconds}
          <div>
            Double : {`${doubled}`}
          </div>
          <div>
          <NumberList numbers={numbers} />
          </div>
        </div>
      );
    }
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }   
  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}