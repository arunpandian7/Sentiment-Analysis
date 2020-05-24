import React from "react";
import {Typography, Divider, IconButton} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from 'fg-loadcss';

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
        <div style={{marginTop:"20px", maxWidth:"600px", paddingBottom:"100px"}}>
            <Typography variant="h4" align="center" color="secondary">
                Instruction
            </Typography>
            <Divider style={{margin: "10px auto", width:40}} />
            <Typography variant='body1' align="center">
                Type any topic or name in the search bar and hit ANALYSE to view the analysis chart and relevent tweets.
            </Typography>

            <Typography variant="h4" align="center" color="secondary">
                About
            </Typography>
            <Divider style={{margin: "10px auto", width:40}} />
            <Typography variant='body1' align="center">
                A web-based tool to analyse Sentiment on tweets in Twitter. Built using Tensorflow, Django, ReactJS, Twitter API.
                This app is developed to illustrate the application of Deep Learning in Text and Language Data.
            </Typography>

            <Typography variant="h4" align="center" color="secondary">
                Source
            </Typography>
            <Divider style={{margin: "10px auto", width:40}} />
            <div style={{textAlign:"center"}}>
                <a  href="https://www.kaggle.com/arunrk7/nlp-beginner-text-classification-using-lstm"><IconButton style={{marginRight:"10px"}} color="primary" align="center"><Icon className="fab fa-kaggle" style={{fontSize:"54px"}} /></IconButton></a>
                <a  href="https://github.com/ArunRK7Codie/Sentiment-Analysis"><IconButton style={{marginLeft:"10px", color:"black"}}  ><Icon className="fab fa-github-square" style={{fontSize:"64px"}} /></IconButton></a>
            </ div>
            
            
        </div>
    )
}

export default Info;