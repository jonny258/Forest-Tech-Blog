# Tech Blog - CMS-style Blog Site

The Tech Blog is a CMS-style blog site designed specifically for developers to publish their articles, blog posts, and share their thoughts and opinions on various technical concepts, recent advancements, and new technologies. It provides a platform for developers to engage with the tech community and stay up-to-date with the latest trends.

## Features

The Tech Blog offers the following features:

### User Authentication

- User registration and login functionality to secure the site and provide personalized experiences.
- Encrypted user credentials for enhanced security.

### Screen Shots

![Home page](https://drive.google.com/uc?export=view&id=1DYsQFZ-VUIWDQ_WDvDBZHCH1RAJS3fyl)

![Dash board](https://drive.google.com/uc?export=view&id=1jKyy5AiBww81cp-2JwNmnmlERKHW8W0V)

### Homepage

- The homepage displays existing blog posts, if any have been posted, allowing users to explore recent articles.
- Navigation links for easy access to the homepage, dashboard, and login/logout options.

### User Dashboard

- The user dashboard provides a personalized space for each user, showcasing their previously created blog posts.
- Users can add new blog posts directly from the dashboard, providing a seamless content creation experience.

### Blog Post Management

- Users can create new blog posts by adding a title and contents through a user-friendly interface.
- The blog post creation automatically saves the post and updates the user dashboard.
- Existing blog posts can be updated or deleted from the user dashboard, providing complete control over published content.

### Commenting System

- Each blog post allows users to leave comments, fostering interaction and discussions.
- Comments are saved and displayed alongside the blog post, showcasing the comment creator's username and the date created.

### Automatic Session Timeout

- To ensure security, users who are idle on the site for an extended period are prompted to log in again before performing actions such as adding, updating, or deleting posts.

## Technologies Used

The Tech Blog incorporates the following technologies and frameworks:

- Node.js: A runtime environment for executing JavaScript code on the server-side.
- Express.js: A fast and minimalist web application framework for Node.js.
- Handlebars.js: A templating engine to create dynamic HTML templates.
- Sequelize: An Object-Relational Mapping (ORM) library for interacting with the database.
- express-session: A middleware for managing user sessions and authentication.
- MySQL: A widely used relational database management system.
- Heroku: A cloud platform for deploying and hosting the application.

## Deployment

The Tech Blog is deployed on Heroku and can be accessed using the following link:

[Heroku Deployment](https://forest-tech-blog.herokuapp.com/login)

To run the Tech Blog locally, please follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using the following command:
```bash
npm install
```
3. Set up the database by executing the provided SQL files in the `db` directory.
4. Configure the database connection by modifying the `config/config.json` file with your database credentials.
5. Optionally, adjust any other configuration settings in the `config` directory to fit your requirements.
6. Start the application using the following command:
```bash
npm start
```
7. The Tech Blog will now be accessible in your web browser at `http://localhost:3000`.

Note: Running the application locally will not have the same data as the deployed version.

## Conclusion

The Tech Blog is a robust CMS-style blog site built using the Model-View-Controller (MVC) architectural pattern. It provides a user-friendly interface for developers to publish their tech-related articles, interact with the community through comments, and manage their blog posts effectively. With its intuitive design and powerful features, the Tech Blog empowers developers to share their knowledge and engage with fellow tech enthusiasts in an efficient and seamless manner.
