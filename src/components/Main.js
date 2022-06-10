import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import * as MainAction from '../store/Actions/Main.action'
class Main extends Component {
  delete = (id) => {
    if(window.confirm('确定删除么？')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    // 对于需要后台数据的打印，建议查找length,不要在初次渲染时打印
    if (this.props.todos.length!==0) {
      // console.log('MainData',this.props)
    }
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {
            this.props.todos.map(item => (
              <li key={item.id} className={item.isCompleted===true? 'completed': null}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.isCompleted} onChange={(e) => { this.props.modifyTodo({id:item.id, isCompleted:e.target.checked}) }} />
                  <label>{item.taskName}</label>
                  <button className="destroy" onClick={()=>this.delete(item.id)}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" onChange={()=>console.log(1)} />
              </li>
            ))
          }
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.props.load_todo()
  }
}

const mapStateToProps = (store) => ({
  MainData: store.MainData,
  todos: store.MainData.todos
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(MainAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Main)