import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as MainAction from '../store/Actions/Main.action'
class Header extends Component {
  addTodo = (ev) => {
    if (ev.keyCode === 13) {
      const taskName = ev.target.value
      if (taskName.trim().length === 0) {
        ev.target.value = ''
        alert('请输入任务名称')
          return
        }
      this.props.addTodo(taskName)
      ev.target.value = ''
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input onKeyUp={this.addTodo} className="new-todo" placeholder="还有什么任务没有完成?" autoFocus />
      </header>
    )
  }
}

const mapStateToProps = (store) => ({
  todos: store.MainData.todos
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(MainAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
