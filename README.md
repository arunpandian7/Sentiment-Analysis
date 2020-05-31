# Sentiment-Analysis
Sentiment Analysis is a tool to monitor people or consumer sentiment over any matter of idea or product. It uses Natural Language Processing and Deep Learning model to classify and segment into difference sentiments.

## Deep Learning Model
Sentiment Analysis based on a deep learning based algorithm which classifies any given text into different sentiments (Positive or Negative). You can look into this [notebook](https://github.com/ArunRK7Codie/Sentiment-Analysis/blob/master/sentiment_analysis_notebook.ipynb). This model is based on LSTM based Neural Network Architecture. 
### Dependency Bucket
-   **Tensorflow** - Deep Learning Framework
-   **Keras** - High Level Neural Networks Layers API
-   **scikit-learn** - Preprocessing Utilities
-   **Pandas** - Advance Data Structure Library
-   **Numpy** - Matrix Manipulations
-   **NLTK** - Natural Language Toolkit
-   **Re** - Regular Expression Handler
-   **Matplotlib** - Visualization library
-   **Pickle** - Implements binary protocols for serialization of objects

I would recommend you to see my well descriptive notebook which walk through the entire process in [Kaggle](https://www.kaggle.com/arunrk7/nlp-beginner-text-classification-using-lstm).
## Sentiment Analyst - The Web App
Sentiment Analyst is a web app that uses Sentiment Inference Model which is created before with API Server. It pulls the tweets from Twitter Search using Twitter API and analyzes every tweets and labels each tweet with a sentiment and calculate the percentage distribution of sentiments over the twitter. It is built using Django on the backend which serves the model as a API along with React JS Framework on the frontend which provides dynamic web components. The frontend UI uses Material UI Framework for the theming and UI elements.
![Sentiment Analyst Web App](https://github.com/ArunRK7Codie/Sentiment-Analysis/blob/master/sentiment-analyst-web-app.gif)
### Dependency Bucket
- **django** - Python based Framework for Backend (Server)
-  **django RESTframework** - REST API for serving model
- **tensorflow** - Deep Learning Framework
- **tweepy** - Twitter API Library for Python
- **Requests** - Handles REST Requests
- **H5Py** - handles .h5 and .hdf5 model files
- **Jsonify** - converts python objects into JSON format
- **ReactJS**- Frontend Development Framework
- **MaterialUI**- UI Components for React based on Material Design
- **Axios** - REST handler for ReactJS
- **Apex Chart** - Charts Library for React
### Instructions 
If you want to run this app in your system locally, you can follow this instruction,
1. Clone the repository using `git clone` and open the terminal inside the repository directory in your system
2. Install all the requirements using `pip install -r requirements.txt` and Python Package Manager will download all dependencies for you.
3. Run the app using `python manage.py runserver` and enjoy the magic.

## Acknowledgements
A lot of resources and people in internet who enables me to learn these things and create this app. I owe them a acknowledgment and reference.
- ReactJS has a very nice documentation and tutorial in their [website](https://reactjs.org/docs/getting-started.html), it was very helpful to me while learning.
- [ReactJS Crash Course](https://www.youtube.com/watch?v=nvHeB32ICDM&t=3738s)- by Hitesh Choudhary
- [Material-UI Documentation](https://material-ui.com/getting-started/installation/) - it's a great reference material and have very nice demos 
- [MaterialUI + React Tutorials](https://www.youtube.com/watch?v=pHclLuRolzE&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr) by Anthony Sistilli made a nice head on tutorial into MaterialUI Components.
- [Keras Guides](https://keras.io/guides/)- Simple easy to use guides for training deep learning model.

> ### If I have seen further than others, it is by standing upon the shoulders of giants. 
> Isaac Newton 
