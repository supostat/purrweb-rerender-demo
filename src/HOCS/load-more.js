import React from 'react'
import LoadMoreButton from './load-more-button';

export default (WrappedComponent) => {
  return class LoadMore extends React.Component {
    constructor(props) {
      super(props);
      if (!props.list && !props[props.listObjectName]) {
        throw new Error('`list` prop or `listObjectName` prop must be present');
      }

      if (!props.perPage) {
        throw new Error('`perPage` prop must be present');
      }

      this.state = {
        reducedList: this.getReducedList(this.getList(), this.props.perPage),
        fullList: this.getList(),
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState(state => {
        const currentReducedListSize = state.reducedList.length <= this.props.perPage ? this.props.perPage : state.reducedList.length;
        const fullList = nextProps[this.getListName()];
        return {
          fullList: fullList,
          reducedList: this.getReducedList(fullList, currentReducedListSize),
        };
      });
    }

    getList() {
      return this.props.list || this.props[this.props.listObjectName];
    }

    getListName() {
      return this.props.list ? 'list' : this.props.listObjectName;
    }

    handleLoadMore = () => {
      this.setState(state => {
        const currentReducedListSize = state.reducedList.length;
        const fullList = this.getList();
        const perPage = this.props.perPage;

        return {
          reducedList: this.getReducedList(fullList, currentReducedListSize + perPage),
        };
      });
    };

    getReducedList(list, amount) {
      return list.slice(0, amount);
    }

    isShowLoadMoreButton() {
      return this.state.reducedList.length < this.getList().length;
    }

    render() {
      const fullList = this.getList();
      const totalAmount = fullList.length;
      const currentAmount = this.state.reducedList.length;

      const newProps = {
        [this.getListName()]: this.state.reducedList,
      };

      return (
        <div>
          <WrappedComponent {...this.props} {...newProps} />
          {this.isShowLoadMoreButton() && (
            <LoadMoreButton onClick={this.handleLoadMore} currentAmount={currentAmount} totalAmount={totalAmount} />
          )}
        </div>
      );
    }
  }
}
