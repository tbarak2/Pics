import React from 'react';
import axios from 'axios';
import SearchBar from  './SearchBar';
class App extends React.Component{
    onSearchSubmit(terms){
        console.log(terms)
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query:terms},
            headers:{
                'Access-Control-Allow-Origin': '*',
                Authorization:'Client-ID 83e756f351234aee6271dc1a6e71ce151c13cf8bcdec2bbe43d4c62630b0386c'
            }
        });
    }
    render(){
        return(
             <div className="ui container" style={{marginTop:'10px'}}>
                 <SearchBar onSubmit={this.onSearchSubmit}/>
             </div>
        );
    }
}

export default App;