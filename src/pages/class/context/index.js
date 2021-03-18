import React, { Component } from 'react';
import SearchContext from './searchContext'
import Search from './search'
import Lists from './list'
import  { getLists } from '@/services/search'
import Consumer from './consumer'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: []
    };
  }
  handleDispatch = async (action) => {
    console.log(action)
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload
        })
      case 'LISTS':
        console.log('LISTS')
        const res = await getLists(action.payload)
        return this.setState({
          lists: res.lists
        })
      default:
        break;
    }

  }

  render() {
    return (
      <div>
        <SearchContext.Provider value={{
          state: this.state,
          dispatch: this.handleDispatch
        } }>
          <Search></Search>
          <Lists></Lists>
          <Consumer></Consumer>
        </SearchContext.Provider>
      </div>
    )
  }
}