import React, { Component, PureComponent } from 'react'

export default class ChildrenList extends PureComponent {
  renderItems() {
    return this.props.items.map((item, index) => {
      return React.cloneElement(this.props.children(item), { key: item.id.toString() })
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.renderItems()}
      </div>
    )
  }
}
