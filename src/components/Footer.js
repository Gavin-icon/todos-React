import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as MainAction from '../store/Actions/Main.action'
class Footer extends Component {
  render() {
    const count = this.props.todos.filter(item=> !item.isCompleted).length
    const completeId = this.props.todos.filter(item =>item.isCompleted).map(item=> {
      return item.id
    })
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <span onClick={this.props.load_todo}>All</span>
          </li>
          <li>
            <span onClick={this.props.uncompleteTodo}>Active</span>
          </li>
          <li>
            <span onClick={this.props.completeTodo}>Completed</span>
          </li>
        </ul>
        <button className="clear-completed" onClick={()=>{this.props.clearCompleteTodo(completeId)}}>Clear completed</button>
      </footer>
    )
  }
}

const mapStateToProps = (store) => ({
  todos: store.MainData.todos
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(MainAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
