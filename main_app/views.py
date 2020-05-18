from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers
from django.conf import settings

import json
import jsonify
import tweepy

from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.preprocessing.text import Tokenizer

import pickle
import tensorflow as tf
#tf.compat.v1.disable_v2_behavior()

from .config import consumer_key, consumer_secret_key, access_key, access_secret_key


#global graph
#graph = tf.compat.v1.get_default_graph()

model = load_model('main_app/model/sentiment_model.hdf5')
MAX_SEQUENCE_LENGTH = 300

auth = tweepy.OAuthHandler(consumer_key, consumer_secret_key)
auth.set_access_token(access_key, access_secret_key)
api = tweepy.API(auth, wait_on_rate_limit=True)

#Loading Tokenizer Object
with open('main_app/model/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

def predict(text, include_neutral = True):

    x_test = pad_sequences(tokenizer.texts_to_sequences([text]), maxlen=MAX_SEQUENCE_LENGTH)
    score = model.predict([x_test])[0]
    label="undef"
    if (score >= 0.5 and score<= 0.6):
        label = "Neutral"
    elif (score>= 0.6):
        label = "Positive"
    elif (score <=0.4):
        label = "Negative"
    return { "label": label,
            "score": float(score)}

def homepage(request):
    return render(request, "public/index.html")


@api_view(["GET"])
def getsentiment(request):
    data = {"success": False}

    if request.data != None:
        data['predictions'] = predict(request.GET.get("text"))
        data['success'] = True
        return JsonResponse(data)

@api_view(["GET"])
def analyzehashtag(request):
    positive = 0
    neutral = 0
    negative = 0
    for tweet in tweepy.Cursor(api.search, q='#'+ request.GET.get("text")+ "-filter:retweets", rpp=5, lang='en', tweet_mode='extended').items(200):
        #with graph.as_default():
        prediction = predict(tweet.full_text)
        if prediction["label"] == 'Positive':
            positive+=1
        if prediction["label"] == 'Neutral':
            neutral+=1
        if prediction["label"] == 'Negative':
            negative+=1
    return JsonResponse({ "positive":positive,
                           "neutural":neutral,
                           "negative":negative})

