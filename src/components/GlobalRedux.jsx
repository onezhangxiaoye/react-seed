/* react-redux 测试 纯的UI组件*/
import React, { Component } from 'react';
import { connect } from 'react-redux'

class GlobalReduxtest extends Component{
    render() {
        const { value, onIncreaseClick } = this.props
        return (
          <div>
            <span>{value}</span>
            <button onClick={onIncreaseClick}>Increase</button>
          </div>
        )
      }
}

function mapStateToProps(state) {
    return {
      value: state.counter.count
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }
  
  // Action Creator
const increaseAction = { type: 'increase' }
  
const GlobalRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalReduxtest)

export default GlobalRedux;