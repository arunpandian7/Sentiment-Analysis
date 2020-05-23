import React from "react";
import {Typography, Divider} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function Info(){

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
            <Typography variant='body1' align="center">
                Try peeking into my GitHub Repository and my Kaggle Notebook.
            </Typography>
            
            
        </div>
    )
}

export default Info;