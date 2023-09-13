# Natours

Welcome to Natours, a RESTful api and web application for booking nature tours and exploring the beauty of the natural world.

## Badges

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## Code Style 📜

The code style is enforced using `eslint` and `prettier`.

## Table of Contents

- [Natours](#natours)
  - [Badges](#badges)
  - [Code Style 📜](#code-style-)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Demo 📷](#demo-)
    - [Screenshots](#screenshots)
  - [Tech/Framework used](#techframework-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
  - [Features](#features)
  - [To Do](#to-do)

## About

Natours is a fictional web application designed to showcase the beauty of nature and provide a platform for booking guided nature tours. Whether you're an adventure seeker or a nature enthusiast, Natours offers a variety of tours to explore breathtaking landscapes and connect with nature.

## Demo 📷

Check out our live demo [here](https://natours-zaher.up.railway.app/).

### Screenshots
![image](https://github.com/mohammedzaher/Natours/assets/66143194/088dbed4-0946-49ec-a36b-a3c61c6e4acc)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/269af891-1be8-4cdd-b67d-f5809fb77d53)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/647e1fba-4085-419f-9a82-246d9da08b69)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/6eeb34f7-e4f5-4ccf-acc5-bbf6de0e8b8b)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/a6274c44-fcf4-4ba6-be8a-04bcb88d249d)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/a2859c8d-30b6-4287-9659-33bd879294af)
![image](https://github.com/mohammedzaher/Natours/assets/66143194/12ff769e-6843-4418-ad7a-c4ad8bef411b)



<!-- ![Natours Screenshot](screenshot.png) -->

## Tech/Framework used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Stripe](https://stripe.com/)
- [Git](https://git-scm.com/)
- [NodeMailer](https://nodemailer.com/about/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [VSCode](https://code.visualstudio.com/)
- [Mailtrap](https://mailtrap.io/)
- [Pug](https://pugjs.org/)
- [Parcel](https://parceljs.org)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running

### Installation

To install Natours, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/natours.git
   ```

2. Navigate to the project directory:
   ```bash
   cd natours
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   To run this project, you will need to add the following environment variables to your .env file
   `NODE_ENV=production`
   `DATABASE`
   `USERNAME` database username
   `PASSWORD` database password
   `JWT_SECRET`
   `JWT_EXPIRES_IN`
   `JWT_COOKIE_EXPIRES_IN`
   `EMAIL_USERNAME`
   `EMAIL_PASSWORD`
   `EMAIL_HOST`
   `EMAIL_PORT`
   `EMAIL_FROM`
   `STRIPE_SECRET_KEY`

5. Start the application:
   ```bash
   npm run start
   ```

## Usage

Once the application is up and running, you can visit `http://localhost:3000` in your web browser to explore and book nature tours.
To book a tour you can use test credit card

## API

Natours provides a RESTful API for accessing tour data and performing various actions. You can find the API documentation [here](https://documenter.getpostman.com/view/29054272/2s9YC4VYjd).

## Features

- User registration and authentication
- Sign up, Log in, Logout, Update, and reset password.
- Browse and search for available tours
- View tour details, including itinerary and pricing
- Book tours and make secure payments
- User reviews and ratings for tours
- User dashboard to manage bookings and reviews

## To Do
[] Implement Sign Up page
[] Fix `CalcAverageRatings` functionality
