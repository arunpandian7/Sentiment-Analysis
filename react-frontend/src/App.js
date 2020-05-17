import React from 'react';

import { Typography } from '@material-ui/core';
import Styles from './App.module.css';
import {Chart, Result} from './Components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const axios = require('axios');

class App extends React.Component{

  state = {
    hashtagText : "",
    progressBar : false,
    submitted : false,
    options:{
      
    },
    hashtagDesc : "",
  }

  clickHandler = () => {
    this.setState({progressBar: true});
    this.setState({submitted: false});
    var postive = 0
    var negative = 0
    var neutral = 0
    var self = this;
    try{
      axios.get('http://localhost:8000/analysehastag',{
        params:{
          text: this.state.hashtagDesc
        }
      }).then(function(response){
        negative = response.data.negative
        postive = response.data.postive
        neutral = response.data.neutral
        self.setState({submitted: true});
        self.setState({series:[negative, postive, neutral]});
      }, 3000);
    } catch(e){
      console.log(e);
    }
    
    try {        
      var url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.hashtag + "&limit=1&format=json"
        axios.get(url).then(function(response) {
            self.setState({hashtag_desc: response.data[2][0]});
        });
        } catch(e) {
          console.log(e);
        }
  }

  textHandler = (event) =>{
    this.setState({hashtagText: event.target.value})
  };


  
  
  render(){
    
    return (
      <div className={Styles.container}>

        <Typography variant='h2' color='primary'>Sentiment Analysis</Typography>
        <Paper component="form" rounded elevation={7} style={{padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        borderRadius: 30,}}>
          <InputBase
            style={{marginLeft: 10,
              flex: 1}}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            onChange = {this.textHandler}
          />
        </Paper>
        <Button className={Styles.analyseButton} variant="outlined" color="primary" onClick={clickHandler}>
            Primary
        </Button>
        <Chart />
        <Result />
      </div>

    )
    
  }
}

export default App;