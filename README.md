# Cassidoo Interview API (unofficial)

🚨 This project uses takes the interview questions from [Cassidy's](https://twitter.com/cassidoo) newsletter and displays them as a JSON API. It's _strongly_ recommended that if you use this API, you [subscribe to her newsletter](https://cassidoo.co/newsletter/)🚨

## Purpose

This API is for learning purposes and comes in two flavors.

The first version is to showcase how to scrape data from a webpage. Due to this scraping the data on demand, this version is significantly slower than the second version, but it also holds the benefit of not needing the overhead of a database.

The second version requires more setup, but demonstrates several useful concepts including webscraping and using [AWS Amplify](https://docs.amplify.aws/) to create an RESTful API that pulls data from DynamoDB.
