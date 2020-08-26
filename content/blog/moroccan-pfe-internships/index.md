---
title: Moroccan IT PFE Internships 2020 - what the market tells us?
date: "2020-02-01T23:46:37.121Z"
description: "Discover what are most in demand technologies for internships in Morocco"
---

Each year, and according to the Moroccan educational system, students at their final year in Master degree and State Engineer fields, have to look for an PFE Internship (Projet de fin d’études) which stands for project of final studies.

In this article, we will try to explore more than 100 offers of internships to analyze them, and see what is the demand of the market, what are the needs, and what are the most mentioned technologies in these internship calls?

## Gathering the data

Data is the new oil, to run our engine of PFE analysis, we have to gather some offers, LinkedIn posts, PFE announcements, and other sources. For our case, I’ve been lucky because, there was a LinkedIn group where we’ve been sharing all the internship offers that we came across on the web. So we can say, and the credit goes to the students of the national school of applied sciences in Al Hoceima. So now, we’re having the data that we can process.

![An example of an internship call posted in LinkedIn](https://cdn-images-1.medium.com/max/2000/1*ASMoiKBz05ZEC056XL6gMQ.png)*An example of an internship call posted in LinkedIn*

To specify the need of the market of internships, we need to detect which technologies are mentioned in the text, but should we create a list of all technologies? Of course not, that may take us more than a month of searching and googling for all the invented technologies, without completing the list.

In our case,we will use** Stackoverflow[**tags list](https://data.stackexchange.com/stackoverflow/query/1069131/get-all-tags), which contains more than 50k technology; how it was gathered? Well, honestly, it’s not a clean list, I mean, the way these technologies are gathered is from the tags that developers mention when they ask questions. So in the list, you will find each tag and how many times it was mentioned in questions.

![List of Stackoverflow tags](https://cdn-images-1.medium.com/max/2496/1*BbhRMmTLiQdrKYzd1auz9w.png)*List of Stackoverflow tags*

One problem that we will face is that some tags are composed, like machine learning, it’s mentioned under machine-learning. Apparently we should replace the dash with a space, so when we implement our NLP algorithms, we can detect the presence of the machine learning sentence, but does that need an algorithm of processing the whole CSV file and treat each tag? No, that’s not that hard, we can use the **Find Replace** feature of Microsoft Excel or LibreOffice to do this simple treatment. Life is easy, isn’t it?

Now we got the data, we got the list of technologies, so let’s have fun.

## **Processing the data**

We cannot just jump into coding something that we don’t know what it is, so before we start coding, we should specify what we’re looking for, and what we’re searching for.

For our case, we will try to specify what are the most mentioned technologies in the internship calls, and since the trend of the IT fields now comes with AI, ML, data engineering, data science and blockchain.

This article is only for analyzing, so if you want to explore the source code behind these plots, you can check the [GitHub repository](https://github.com/Kaygi22/Moroccan-PFE-2020). I tried to comment each peace of code, so you can understand the steps.

## Plotting the result

### World cloud

If we plot a world cloud, with each technology and each occurrence, using a [world cloud generator](https://github.com/amueller/word_cloud) in python, we will get the following image

[](https://cdn-images-1.medium.com/max/2370/1*b97G7lY7A0K8eh7SQHkohQ.png)

As I said previously, the list of tags from StackOverflow allows some words like web, mobile, and cloud to take space in our result, but they can be ignored later. A first overview, gives us an idea that Java, SAP, cloud technologies, and web and mobiles developers are the trend in the Moroccan market. But that is not clear, let’s dive a little more and see what’s behind these world cloud.

### Top 10 technologies

Let’s ignore the generalization, by excluding the general world technologies like web, mobile, cloud, and see what we will get.

[](https://cdn-images-1.medium.com/max/2980/1*Wpvb2tkjVfg8d7ZsOn_7zQ.png)

As we can see in the above plot, Java is the most mentioned technologies in the Moroccan PFE Internship calls with nearly 25% existing in internship calls. That was expected, especially, there is a huge demand for JAVA/JEE developers in the IT Moroccan market.

### Front-End frameworks, ReactJS or AngularJS

In the front end developers community, there was always a discussion about what should be used for developing front end applications, is it AngularJS, ReactJS, or VueJS. Well, 110 internships call is not sufficient data for us to decide which framework should be learnt, because from the first side I think instead of focusing on learning a framework, you should master the basics of Javascript and ES6, and from the other hand, you cannot judge the market from this analyze that is based on small amount of data, but let’s get an idea:

[](https://cdn-images-1.medium.com/max/2000/1*dfqw29z1F0NwOKRkq27SiQ.png)

Apparently Angular was mentioned in more than 13% of the total internship calls. That doesn’t mean that React is not present, Angular is older than React, and that may explain the result. For me, I always preferred React.js, it’s easy to learn, it has native approach for mobile development, its components can be reusable, and of course it’s performant.

### How about data fields

Data fields are the trend of the IT market around the globe, but is it in Morocco? From the plot of most demand technologies, you can get that software engineering technologies are in high demand comparing to data skills. In the following plot we will try to explore the statistics for data skills, and how many times were mentioned in PFE calls.

[](https://cdn-images-1.medium.com/max/2980/1*59DFXq2k-G9oDDT62bHnfg.png)

We cannot talk about data without talking about SQL. SQL is used by data scientist, data engineers, software engineers, and every IT guy who’s interacting with data, so It would be obvious in high demand. Machine learning follows SQL with 8%, python, data science, blockchain, BI tools, Hadoop big data tool and the R which was mentioned once.

Data internships are not available the same way as Java internships, SAP, or web development, but that doesn’t mean that they doesn’t exist.

## Conclusion

The previous result cannot resume the state of internships in Morocco because first of all we treated small amount of data, and secondly not all companies publish the offers publicly; sometimes you have to contact HR to check if they have available internship positions, other times you have to pass a test or participate in IT event or Hackathons to be seen by human resources & IT managers.

I hope these analysis can give all interested people an idea about how Moroccan internships are working, and what is the demand of the market.

**Resources**: Full notebook on [github](https://github.com/Kaygi22/Moroccan-PFE-2020)
