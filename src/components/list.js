import React, { Component, PureComponent } from 'react'

export default class List extends Component {
  renderItems() {
    return this.props.items.map((item, index) => {
      return React.cloneElement(this.props.itemRenderer(item), {
        key: index.toString(),
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
