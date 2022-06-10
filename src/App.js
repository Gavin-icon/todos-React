import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import * as AppAction from './store/Actions/App.action'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
class App extends Component {
  render() {
    // console.log('AppData',this.props)
    return (
      <section className='todoapp'>
        <Header/>
        <Main/>
        <Footer/>
      </section>
    )
  }
}

const mapStateToProps = (store) => ({
  AppData: store.AppData
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(AppAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(App)