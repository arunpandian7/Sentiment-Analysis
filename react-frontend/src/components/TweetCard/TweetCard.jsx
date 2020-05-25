import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import Styles from './TweetCard.module.css';

function TweetCard(props){
    var color = "#46BFBD";
    if(props.data.item.label === "Neutral"){
        color = "#FDB45C";
    }
    if(props.data.item.label === "Negative"){
        color = "#F7464A";
    }
    if(props.data.item.label === "Cannot Predict"){
        color = '#778899';
    }

    return(
        <div key={props.data.i}>
        <Card style={{minWidth:300}} variant="outlined" key={props.data.i}>
            <CardContent>
                <div style={{flexDirection:'row'}}>
                <Icon className="fab fa-twitter" style={{color:"#00acee"}} />
                <Typography 
                variant="h6"
                color = "Secondary"
                gutterBottom
                className={Styles.userName}
                >
                    @{props.data.item.userid}
                </Typography>
                </div>

                <Typography
                variant = "body2"
                className={Styles.tweetContent}
                >
                    {props.data.item.tweet}
                </Typography>

                <Typography
                variant = "h5"
                className={Styles.predictedLabel}
                style={{"color": color}}
                >
                    Sentiment Predicted : {props.data.item.label}

                </Typography>
                
            </CardContent>

        </Card>
        </div>
    )

}


export default TweetCard;