/* react-redux 测试 纯的UI组件*/
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Countertest extends Component{
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

/**此处返回的对象 更新为连接的组件的 Props
 * 
 * @param {Object} state redux store 存储的对象
 */
function mapStateToProps(state) {
    return {
      value: state.counter.count
    }
  }

  /** 此处用户匹配对应的 action 用于更新 redux store state
   * 
   * @param {Object} dispatch 匹配对象
   */
function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }
  
  // Action Creator
const increaseAction = { type: 'increase' }
  
const Counter = connect(
    mapStateToProps,
  {
    mapDispatchToProps,
  }
)(Countertest)

export default Counter;