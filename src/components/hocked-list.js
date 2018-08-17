import React, { Component, PureComponent } from 'react'
import loadMore from '../HOCS/load-more';

class HockedList extends Component {
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

export default loadMore(HockedList);