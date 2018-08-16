import React, { Component, PureComponent } from 'react'

export default class PureItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div onClick={() => this.props.onClick(item.avatar)} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px'}}>
        <div><img src={item.avatar} width="50" height="50" alt=""/></div>
        <div style={{marginLeft: '20px'}}>{item.fullName}</div>
      </div>
    )
  }
}
