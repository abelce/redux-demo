import * as React from 'react';

class Test extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    let me = this;
    me.setState({
      count: me.state.count + 1
    });
    console.log(me.state.count);    // 打印出0
    // me.setState({
    //   count: me.state.count + 1
    // });
    // console.log(me.state.count);    // 打印出0
    setTimeout(function(){
    //  console.log(me.state.count);
     me.setState({
       count: me.state.count + 1
     });
     console.log(me.state.count);   // 打印出2
    }, 0);
    setTimeout(function(){
     me.setState({
       count: me.state.count + 1
     });
     console.log(me.state.count);   // 打印出3
    }, 0);
  }
  render() {
    return (
      <h1>{this.state.count}</h1>
    )
  }
}

export default Test;