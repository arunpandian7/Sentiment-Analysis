import React from "react";
import {Typography, Divider, IconButton} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from 'fg-loadcss';
import Styles from './Info.module.css';

function Info(){

    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
    
        return () => {
          node.parentNode.removeChild(node);
        };
      }, []);

    return(
        <div style={{marginTop:"20px", maxWidth:"500px", paddingBottom:"100px"}}>
            <Typography variant="h4" align="center" color="secondary" className={Styles.title}>
                What does it do?
            </Typography>
            <Divider style={{margin: "10px auto", width:"25%"}} />
            <Typography variant='body1' align="center" color='textSecondary' paragraph="true" className={Styles.content}>
                It searches for twitter hashtag, you entered in search bar and search twitter for tweets with the word. It 
                runs a Sentiment Inference Model to predict the sentiment associated with it and gives the percentage of each sentiments per 200 tweets.
            </Typography>

            <Typography variant="h4" align="center" color="secondary" className={Styles.title}>
                About
            </Typography>
            <Divider style={{margin: "10px auto", width:"15%"}} />
            <Typography variant='body1' align="center" color='textSecondary' paragraph="true" className={Styles.content}>
                A web-based tool to analyse Sentiment on tweets in Twitter. Built using Tensorflow, Django, ReactJS, Twitter API.
                This app is developed to illustrate the application of Deep Learning in Text and Language Data.
            </Typography>

            <Typography variant="h4" align="center" color="secondary" className={Styles.title}>
                Source
            </Typography>
            <Divider style={{margin: "10px auto", width:"15%"}} />
            <div style={{textAlign:"center"}}>
                <a  href="https://www.kaggle.com/arunrk7/nlp-beginner-text-classification-using-lstm"><IconButton style={{marginRight:"10px", color:"#20beff"}} ><Icon className="fab fa-kaggle" style={{fontSize:"44px"}} /></IconButton></a>
                <a  href="https://github.com/ArunRK7Codie/Sentiment-Analysis"><IconButton style={{marginLeft:"10px", color:"black"}}  ><Icon className="fab fa-github-square" style={{fontSize:"54px"}} /></IconButton></a>
            </ div>
            
            
        </div>
    )
}

export default Info;