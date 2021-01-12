import React, { Component } from 'react'

export class SearchBar extends Component {
    state={term:''};
   onInputChage=(e)=>{
    const userInput=e.target.value;
    this.setState({term:userInput});
   }

   onFromSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state.term);  // sending back to the App
    this.setState({term:''});
   }
  
    render() {
        return (
            <div className="ui segment">
               <form className="ui form" onSubmit={this.onFromSubmit}>
                   <div className="field">
                       <label htmlFor="search">Search Image</label>
                       <input type="text" className="" id="search" onChange={this.onInputChage} value={this.state.term}/>
                   </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;

