import React from "react";

class FavoriteColor extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
      show: true,
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ color: 'blue' });
  };

  deleteChild = () => {
    this.setState({ show: false });
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ color: 'yellow' });
      console.log("after update");
    }, 2000);
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
  }

  render() {
    return (
      <>
        <h3>My Favorite Color is {this.state.color}</h3>
        <button onClick={this.changeColor}>Change Color</button>
        <br />
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete Header</button>
      </>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export { FavoriteColor, Child };
