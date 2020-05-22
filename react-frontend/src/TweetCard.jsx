import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent} from '@material-ui/core';
import {Typography} from '@material-ui/core';



function TweetCard(props){
    var color = "#46BFBD";
    console.log(props.data)
    if(props.data.item.label === "Neutral"){
        color = "#FDB45C";
    }
    if(props.data.item.label === "Negative"){
        color = "#F7464A";
    }

    return(
        <div key={props.data.i}>
        <Card style={{minWidth:300}} variant="outlined">
            <CardContent>
                <Typography 
                variant="h4"
                color = "textSecondary"
                gutterBottom
                >
                    @{props.data.item.userid}
                </Typography>

                <Typography
                variant = "body2"
                >
                    {props.data.item.tweet}
                </Typography>

                <Typography
                variant = "h5"
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