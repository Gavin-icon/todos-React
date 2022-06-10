import { createAction } from 'redux-actions'
import {LOADTODO,ADDTODO,DELETETODO, MODIFYTODO, COMPLETETOTO, UNCOMPLETETOTO, CLEARCOMPLETETODO} from '../ActionTypes/App.action.type'

// 获取todos列表内容
export const load_todo = createAction(LOADTODO)

// 新增todos列表项
export const addTodo = createAction(ADDTODO)

// 删除todos列表项
export const deleteTodo = createAction(DELETETODO)

// 修改todos列表项目
export const modifyTodo = createAction(MODIFYTODO)

// 显示已完成列表
export const completeTodo = createAction(COMPLETETOTO)

// 显示未完成列表
export const uncompleteTodo = createAction(UNCOMPLETETOTO)

// 清除已完成
export const clearCompleteTodo = createAction(CLEARCOMPLETETODO)
