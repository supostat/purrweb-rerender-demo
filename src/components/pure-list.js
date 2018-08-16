import React, { Component, PureComponent } from 'react'

export default class PureList extends PureComponent {
  renderItems() {
    const ItemComponent = this.props.itemComponent;
    return this.props.items.map((item, index) => {
      return React.cloneElement(<ItemComponent />, {
        key: index.toString(),
        item,
        onClick: this.props.onItemClick
      });
    });
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {this.renderItems()}
      </div>
    )
  }
}
