import React from "react";

import Chart from "react-apexcharts";
import { Typography, Grid } from "@material-ui/core";
import Styles from "./App.module.css";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import TweetCard from "./TweetCard";
class App extends React.Component {
  state = {
    hashtagText: "",
    progressBar: false,
    submitted: false,
    hashtagDesc: "",
    tweets : [],
    series: [44, 55, 41],
    options: {
      colors: ["#46BFBD", "#F7464A",  "#FDB45C"],
      labels: ["Positive", "Negative", "Neutral"],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            },
          },
        },
      },
    },
  };

  // async componentDidUpdate() {
  //     var self = this;
  //     var positive = 0;
  //     var negative = 0;
  //     var neutral = 0;
  //     try {
  //       setInterval(async () => {
  //       axios.get('http://localhost:8000/analyzehashtag', {
  //           params: {
  //               text: this.state.hashtagText
  //           }
  //       }).then(function(response) {
  //         positive = response.data.positive;
  //         negative = response.data.negative;
  //         neutral = response.data.neutural;
  //         self.setState({ submitted: true });
  //         self.setState({ progressBar: false });
  //         self.setState({ series: [positive, negative, neutral] });
  //       });
  //           }, 3000);
  //       } catch(e) {
  //         console.log(e);
  //       }

  //   }

  clickHandler = () => {
    console.log("Sending GET Request....");
    console.log(this.state.hashtagText);
    var positive = 0;
    var negative = 0;
    var neutral = 0;

    this.setState({ progressBar: true });
    this.setState({ submitted: false });
    var self = this;
    try {
      axios
        .get("http://localhost:8000/analyzehashtag", {
          params: {
            text: this.state.hashtagText,
          },
        })
        .then(function (response) {
          console.log("Fetched Sentiment Analysis Data...");
          console.log(response.data);
          positive = response.data.positive;
          negative = response.data.negative;
          neutral = response.data.neutural;
          self.setState({ submitted: true });
          self.setState({ progressBar: false });
          self.setState({ series: [positive, negative, neutral] });
        });
    } catch (e) {
      console.log(e);
    }

    try {
      var url =
        "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" +
        this.state.hashtagText  +
        "&limit=1&format=json";
      axios.get(url).then(function (response) {
        console.log("Wikipedia Replied");
        console.log(response.data);
        self.setState({ hashtag_desc: response.data[2][0] });
      });
    } catch (e) {
      console.log(e);
    }

    try {        
      setInterval(async () => {
      axios.get('http://localhost:8000/fetchTweets', {
          params: {
              text: this.state.hashtagText
          }
      }).then(function(response) {
          // console.log(response);
          console.log("Fetched Tweets...")
          self.setState({tweets: response.data.results});
      });
          }, 30000);
      } catch(e) {
        console.log(e);
      }

  };

  showLoadingBar = () => {
    if (this.state.progressBar) {
      return (
        <div className="text-center">
          <img src={require("./loading.gif")} width="200" alt="loading-gif" />
          <h2 className="progressheader">Please Wait</h2>
        </div>
      );
    }
  };

  showChart = () => {
    if (this.state.submitted === true) {
      return (
        <div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="420"
          />
          <h1 class="heading_desc">{this.state.hashtag_desc}</h1>
        </div>
      );
    }
  };

  textHandler = (event) => {
    this.setState({ hashtagText: event.target.value });
  };

  render() {


      
    var renderTweets = this.state.tweets.map(function(item, i){
          return (
            <Grid item xs={12} md={6} >
            <TweetCard data={{item, i}} />
            </Grid> 
            );
        })




    return (
      <div className={Styles.container}>
        <Typography variant="h2" color="primary" align="center" className={Styles.title}>
          Sentiment Analysis
        </Typography>
        <Paper
          className={Styles.searchBar}
          component="form"
          rounded="true"
          elevation={7}
          style={{
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "75%",
            borderRadius: 30,
          }}
        >
          <InputBase
            style={{ marginLeft: 10, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={this.textHandler}
          />
        </Paper>
        <Button
          className={Styles.analyseButton}
          variant="outlined"
          color="secondary"
          onClick={this.clickHandler}
        >
          Analyze
        </ Button>
        {this.showChart()}
        <Grid container spacing={3} style={{paddingLeft:"10", paddingRight:"10"}}>
        {this.state.submitted?renderTweets:<br />}
        </Grid>
        {this.showLoadingBar()}
      </div>
    );
  }
}

export default App;
