import React from 'react';


import Styles from './App.module.css';
import {SearchBar, Chart, Result} from './Components';

class App extends React.Component{
  render(){
    return (
      <div className={Styles.container}>
        <h1 className="display-4 text-center"> Sentiment Analysis App</h1>
        <br /><br />
        <SearchBar />
        <Chart />
        <Result />
      </div>

    )
    
  }
}

export default App;