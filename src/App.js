import React ,{Component}from 'react';
import unsplash from './Api/unsplash';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/imageList';


class App extends Component {
    state={
        images:[],
        term:''
    };
    onSearchSubmit= async(term)=>{
      console.log(term);
      const res= await unsplash.get(`/search/photos`,{
            params:{query:term},
        });
        
        this.setState({images:res.data.results,term:term});
        console.log(this.state.images);
    }
    render(){
        
    return (
        <div className="ui container" style={{marginTop:'20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        found:{this.state.images.length} items for {this.state.term}
        <ImageList images={this.state.images}/>
        </div>
    )
}
}

export default App;
//https://api.unsplash.com/search/photos?query=canada █
//v8ZKJAGdPlYY07jiIUAP6BRoj8xbbk4zpk0sL6DICgc