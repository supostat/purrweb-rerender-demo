import React, { Component } from 'react';
import faker from 'faker'
import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import List from './components/list';
import PureItem from './components/pure-item';
import PureList from './components/pure-list';
import ChildrenList from './components/children-list';
import HockedList from './components/hocked-list';

const items = Array(50).fill(null).map(item => ({
  id: faker.random.uuid(),
  avatar: faker.internet.avatar(),
  fullName: faker.name.findName(),
}))

class App extends Component {
  state = {
    items: items,
    checked: false,
  }

  handleRootRerender = () => {
    this.setState(state => ({ checked: !state.checked }));
  }

  handleItemClick = (id) => {
    console.log(id);
  }
  handleAddUser = () => {
    const newUser = {
      id: faker.random.uuid(),
      avatar: faker.internet.avatar(),
      fullName: faker.name.findName(),
    };

    this.setState(state => {
      return {
        ...state,
        items: [
          newUser,
          ...state.items
        ]
      }
    })
  }
  render() {
    return (
      <div style={{ width: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'fixed', left: '150px', top: '50%' }}><button onClick={this.handleRootRerender} type="button">Rerender root</button></div>
        <div style={{ position: 'fixed', left: '150px', top: '40%' }}><button onClick={this.handleAddUser} type="button">Add user</button></div>
        <List
          items={this.state.items}
          itemRenderer={(item) => <Item onClick={this.handleItemClick} item={item} />}
        />
        <PureList
          items={this.state.items}
          onItemClick={this.handleItemClick}
          itemComponent={PureItem}
        />
        <ChildrenList items={this.state.items}>
          {(item) => {
            return <Item onClick={this.handleItemClick} item={item} />
          }}
        </ChildrenList>
        <HockedList
          items={this.state.items}
          listObjectName="items"
          perPage={3}
          itemRenderer={(item) => <Item onClick={this.handleItemClick} item={item} />}
        />
      </div>
    );
  }
}

export default App;
