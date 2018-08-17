import React, { Component } from 'react';

class LoadMoreButton extends Component {
  render() {
    const currentAmount = this.props.currentAmount;
    const totalAmount = this.props.totalAmount;

    const onClick = this.props.onClick;

    return (
      <div>
        <div>
          <span>Showing&nbsp;</span>
          <span>{currentAmount}</span>
          <span>&nbsp;of&nbsp;</span>
          <span>{totalAmount}</span>
        </div>
        <div>
          <button onClick={onClick}>Load More</button>
        </div>
      </div>
    );
  }
}

export default LoadMoreButton;
