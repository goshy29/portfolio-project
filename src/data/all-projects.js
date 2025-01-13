import portfolio from "../assets/images/portfolio.jpg";
import my_places from "../assets/images/my_places.jpg";
import iron_muscle from "../assets/images/iron_muscle.jpg";
import cake_world from "../assets/images/cakeworld.jpg";
import cinemahome from "../assets/images/cinemahome.jpg";

export const ALL_PROJECTS = [
  {
    id: 'react-portfolio',
    image: portfolio,
    title: 'React Portfolio Website',
    description:
      'A Portfolio Project created on React with an in-memory database.',
    summary: `
      Project Description:
      This React Portfolio with in-memory database is a dynamic, responsive portfolio web application built using React. This project show a collection of other projects, each featuring its own GitHub repository link, project description and some details. The primary goal is to demonstrate the ability to create a single-page application (SPA) with an in-memory database to manage and display project information efficiently.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. In-Memory Database: Utilizes an in-memory database to store and manage project data, allowing for fast access without the need for a backend server.
      3. Projects List: Displays a list of projects, each with a title, description, technologies used, and a link to the corresponding GitHub repository.
      4. Project Details View: Provides a detailed view of each project with additional information.
      5. GitHub Integration: Direct links to GitHub repositories for easy access to source code and project details.

      Technologies Used:
      1. Frontend: React.js, JSX, CSS.
      2. State Management: React Hooks.
      3. Routing: React Router.
      4. In-Memory Database: Local state management for simulating a database.
      5. Version Control: Git, GitHub.

      Project Structure:
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, All Projects and About.
      3. Data: A JavaScript file with JSON objects to simulate the in-memory database containing project information.
      
      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/portfolio-project
      2. Clone the repository: git clone https://github.com/goshy29/portfolio-project.git
      3. Open the project with your code editor(VS Code) and open New Terminal
      4. To install dependencies, at the Terminal run: npm install
      5. Start the development server: npm start
      6. Open the application in your browser: http://localhost:3000
    `,
  },
  {
    id: 'react-express-mongodb',
    image: my_places,
    title: 'React Project + Express.js + MongoDB',
    description:
      'A React project with Express for handling server-side logic and MongoDB data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called MyPlaces with React, Express.js and MongoDB is a web application that combines frontend built with React and backend using Express.js and MongoDB. Тhe purpose of this application is to create a list of places you want to visit or have already visited. Each place includes a title, the place itself, the country in which it is located, a link with a picture of the place and a short description. The application also allows you to correct information about a place or delete a place as well.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a React frontend with an Express.js backend and MongoDB database. 
      3. Places List: Displays a list of places, each with a title, description and the place itself.
      4. Place Details View: Provides a detailed view of each place with additional information.

      Technologies Used:
      1. Frontend: React.js, JSX, CSS.
      2. Backend: Node.js, Express.js.
      3. Database: MongoDB, Mongoose.
      4. State Management: React Hooks.
      5. Routing: React Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all React components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Places and Add Place.
      Backend: Contains all Express.js server-side code and database logic.
      1. Routes: Define API endpoints for fetching and manipulating project data.
      2. Controllers: Handle the logic for each API endpoint.
      3. Models: Define the MongoDB schemas using Mongoose.
      4. Config: Configuration files, including database connection settings.

      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/react-express-mongodb
      2. Clone the repository: git clone https://github.com/goshy29/react-express-mongodb.git
      3. Open the project with your code editor(VS Code) and open TWO New Terminals
      4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install       
      5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install   
      6. To start the Frontend development server, in the root directory run: npm start    
      7. To start the Backend server, in the backend directory run: npm start
      8. Open the application in your browser: http://localhost:3000
    `,
  },
  {
    id: 'nextjs-mongodb',
    image: iron_muscle,
    title: 'Next.js Project + MongoDB',
    description:
      'A Next.js project with MongoDB database integration for scalable data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which i called IronMuscle with Next.js and MongoDB is a modern web application that combines a dynamic, server-rendered frontend built with Next.js and MongoDB database. Тhe purpose of this application is to share your experience at Cross Fit or Fitness, which experience will be posted at the Blog from the Menu and saved in MongoDB. Information at the Blog includes a title, user name, email and experience. The application allows you to delete someones blog. Also you will find News from the menu where you can read some interesting articles about fitness world which are in-memory loaded.
    
      Features:
      1. Server-Side Rendering (SSR): Utilizes Next.js for server-side rendering.
      2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.  
      3. Full-Stack Architecture: Combines a Next.js frontend with MongoDB database. 

      Technologies Used:
      1. Frontend: Next.js, React.js, CSS.
      2. Backend: Node.js, Express.js (for API routes).
      3. Database: MongoDB, Mongoose.
      4. State Management: React Hooks.
      5. Routing: Next.js Pages Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Next.js components and frontend logic
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, News, Blog and Share Experience.
      Backend: Contains all server-side code and database logic.
      1. API Routes: Define API endpoints for fetching and manipulating project data.
      2. db-connection: Folder dedicated to managing the MongoDB connection.

      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/nextjs-mongodb
      2. Clone the repository: git clone https://github.com/goshy29/nextjs-mongodb.git
      3. Open the project with your code editor(VS Code) and open New Terminal
      4. To install dependencies, at the Terminal run: npm install
      5. Start the development server: npm run dev
      6. Open the application in your browser: http://localhost:3000
      `,
  },
  {
    id: 'angular-express-mongodb',
    image: cake_world,
    title: 'Angular Project + Express.js + MongoDB', 
    description:
      'A Angular project with Express for handling server-side logic and MongoDB data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called Cake World with Angular, Express.js and MongoDB is a web application that combines frontend built with Angular and backend using Express.js and MongoDB. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in MongoDB. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a Angular frontend with an Express.js backend and MongoDB database.
      3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
      4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick access.

      Technologies Used:
      1. Frontend: Angular, HTML, CSS.
      2. Backend: Node.js, Express.js.
      3. Database: MongoDB, Mongoose.
      4. State Management: Angular Services.
      5. Routing: Angular Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Angular components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.
      Backend: Contains all Express.js server-side code and database logic.
      1. Routes: Define API endpoints for fetching and manipulating project data.
      2. Controllers: Handle the logic for each API endpoint.
      3. Models: Define the MongoDB schemas using Mongoose.
      4. Config: Configuration files, including database connection settings.

      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/angular-express-mongodb
      2. Clone the repository: git clone https://github.com/goshy29/angular-express-mongodb.git
      3. Open the project with your code editor(VS Code) and open TWO New Terminals
      4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install       
      5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install   
      6. To start the Frontend development server, in the root directory run: npm start    
      7. To start the Backend server, in the backend directory run: npm start
      8. Open the application in your browser: http://localhost:4200
    `  
  },
  {
    id: 'react-express-postgresql',
    image: my_places,
    title: 'React Project + Express.js + PostgreSQL',
    description:
      'A React project with Express for handling server-side logic and PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called MyPlaces with React, Express.js and PostgreSQL is a web application that combines frontend built with React and backend using Express.js and PostgreSQL. Тhe purpose of this application is to create a list of places you want to visit or have already visited. Each place includes a title, the place itself, the country in which it is located, a link with a picture of the place and a short description. The application also allows you to correct information about a place or delete a place as well. 

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a React frontend with an Express.js backend and PostgreSQL database.
      3. Places List: Displays a list of places, each with a title, description and the place itself.
      4. Place Details View: Provides a detailed view of each place with additional information.   
      
      Technologies Used:
      1. Frontend: React.js, JSX, CSS.
      2. Backend: Node.js, Express.js.
      3. Database: PostgreSQL, Sequelize.
      4. State Management: React Hooks.
      5. Routing: React Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all React components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Places and Add Place.
      Backend: Contains all Express.js server-side code and database logic.
      1. Routes: Define API endpoints for fetching and manipulating project data.
      2. Controllers: Handle the logic for each API endpoint.
      3. Models: Define the PostgreSQL schemas using Sequelize.
      4. Config: Configuration files, including database connection settings.     
      
      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/react-express-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/react-express-postgresql.git
      3. Open the project with your code editor(VS Code) and open TWO New Terminals
      4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install
      5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install
      6. To start the Frontend development server, in the root directory run: npm start
      7. To start the Backend server, in the backend directory run: npm start
      8. Ensure PostgreSQL is installed and running
      9. Open the application in your browser: http://localhost:3000      
    `,
  },
  {
    id: 'nextjs-postgresql',
    image: iron_muscle,
    title: 'Next.js Project + PostgreSQL',
    description:
      'A Next.js project with PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which i called IronMuscle with Next.js and PostgreSQL is a modern web application that combines a dynamic, server-rendered frontend built with Next.js and PostgreSQL database. Тhe purpose of this application is to share your experience at Cross Fit or Fitness, which experience will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and experience. The application allows you to delete someones blog. Also you will find News from the menu where you can read some interesting articles about fitness world which are in-memory loaded.
    
      Features:
      1. Server-Side Rendering (SSR): Utilizes Next.js for server-side rendering.
      2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.  
      3. Full-Stack Architecture: Combines a Next.js frontend with PostgreSQL database.      

      Technologies Used:
      1. Frontend: Next.js, React.js, CSS.
      2. Backend: Node.js, Express.js (for API routes).
      3. Database: PostgreSQL, Sequelize.
      4. State Management: React Hooks.
      5. Routing: Next.js Pages Router.
      6. Version Control: Git, GitHub. 
      
      Project Structure:
      Frontend: Contains all Next.js components and frontend logic
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, News, Blog and Share Experience.
      Backend: Contains all server-side code and database logic.
      1. API Routes: Define API endpoints for fetching and manipulating project data.
      2. Models: Define the PostgreSQL schemas using Sequelize.
      3. db-connection: Folder dedicated to managing the PostgreSQL connection.   
      
      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/nextjs-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/nextjs-postgresql.git
      3. Open the project with your code editor(VS Code) and open New Terminal
      4. To install dependencies, at the Terminal run: npm install
      5. Start the development server: npm run dev
      6. Ensure PostgreSQL is installed and running
      7. Open the application in your browser: http://localhost:3000      
    `,
  },
  {
    id: 'angular-express-postgresql',
    image: cake_world,
    title: 'Angular Project + Express.js + PostgreSQL', 
    description:
    'A Angular project with Express for handling server-side logic and PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called Cake World with Angular, Express.js and PostgreSQL is a web application that combines frontend built with Angular and backend using Express.js and PostgreSQL. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a Angular frontend with an Express.js backend and PostgreSQL database.
      3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
      4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick access.

      Technologies Used:
      1. Frontend: Angular, HTML, CSS.
      2. Backend: Node.js, Express.js.
      3. Database: PostgreSQL, Sequelize.
      4. State Management: Angular Services.
      5. Routing: Angular Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Angular components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.
      Backend: Contains all Express.js server-side code and database logic.
      1. Routes: Define API endpoints for fetching and manipulating project data.
      2. Controllers: Handle the logic for each API endpoint.
      3. Models: Define the PostgreSQL schemas using Sequelize.
      4. Config: Configuration files, including database connection settings.

      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/angular-express-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/angular-express-postgresql.git
      3. Open the project with your code editor(VS Code) and open TWO New Terminals
      4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install       
      5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install   
      6. To start the Frontend development server, in the root directory run: npm start    
      7. To start the Backend server, in the backend directory run: npm start
      8. Open the application in your browser: http://localhost:4200
    `
  },
  {
    id: 'react-spring-postgresql',
    image: my_places,
    title: 'React Project + Spring Boot + PostgreSQL',
    description:
      'A React project with Spring for handling server-side logic and PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called MyPlaces with React, Spring Boot and PostgreSQL is a web application that combines frontend built with React and backend using Spring Boot and PostgreSQL. Тhe purpose of this application is to create a list of places you want to visit or have already visited. Each place includes a title, the place itself, the country in which it is located, a link with a picture of the place and a short description. The application also allows you to correct information about a place or delete a place as well.
    
      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a React frontend with an Spring Boot backend and PostgreSQL database.
      3. Places List: Displays a list of places, each with a title, description and the place itself.
      4. Place Details View: Provides a detailed view of each place with additional information.     
      
      Technologies Used:
      1. Frontend: React.js, JSX, CSS.
      2. Backend: Java, Spring Boot.
      3. Database: PostgreSQL, Spring Data JPA.
      4. State Management: React Hooks.
      5. Routing: React Router.
      6. Version Control: Git, GitHub.     
      
      Project Structure:
      Frontend: Contains all React components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Places and Add Place. 
      Backend: Contains all Spring Boot server-side code and database logic.
      1. Controllers: Handle the HTTP requests and responses.
      2. Services: Contain the business logic of the application.
      3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
      4. Models: Define the entity classes mapped to the database tables.
      5. Config: Configuration files, including database connection settings.     
      
      To run this project locally, follow these steps: 
      1. GitHub: https://github.com/goshy29/react-spring-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/react-spring-postgresql.git 
      3. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
      4. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
      5. Ensure PostgreSQL is installed and running
      6. Create a database and update file "application.properties" with your database credentials
      7. Start the Spring Boot application 
      8. Start the frontend development server: npm start
      9. Open the application in your browser: http://localhost:3000 
    `,
  },
  {
    id: 'nextjs-spring-postgresql',
    image: iron_muscle,
    title: 'Next.js Project + Spring Boot + PostgreSQL',
    description:
      'A Next.js project with Spring for handling server-side logic and PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which i called IronMuscle with Next.js, Spring Boot and PostgreSQL is a modern web application that combines a dynamic, server-rendered frontend built with Next.js, a backend using Spring Boot and PostgreSQL database. Тhe purpose of this application is to share your experience at Cross Fit or Fitness, which experience will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and experience. The application allows you to delete someones blog. Also you will find News from the menu where you can read some interesting articles about fitness world which are in-memory loaded.

      Features:
      1. Server-Side Rendering (SSR): Utilizes Next.js for server-side rendering.
      2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.      
      3. Full-Stack Architecture: Combines a Next.js frontend with a Spring Boot backend and PostgreSQL database. 

      Technologies Used:
      1. Frontend: Next.js, React.js, CSS.
      2. Backend: Java, Spring Boot.
      3. Database: PostgreSQL, Spring Data JPA.
      4. State Management: React Hooks.
      5. Routing: Next.js Pages Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Next.js components and frontend logic
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, News, Blog and Share Experience.
      Backend: Contains all Spring Boot server-side code and database logic.
      1. Controllers: Handle the HTTP requests and responses.
      2. Services: Contain the business logic of the application.
      3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
      4. Models: Define the entity classes mapped to the database tables.
      5. Config: Configuration files, including database connection settings.
      
      To run this project locally, follow these steps: 
      1. GitHub: https://github.com/goshy29/nextjs-spring-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/nextjs-spring-postgresql.git 
      3. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
      4. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
      5. Ensure PostgreSQL is installed and running
      6. Create a database and update file "application.properties" with your database credentials
      7. Start the Spring Boot application 
      8. Start the frontend development server: npm start
      9. Open the application in your browser: http://localhost:3000       
    `,
  },
  {
    id: 'angular-spring-postgresql',
    image: cake_world,
    title: 'Angular Project + Spring Boot + PostgreSQL', 
    description:
      'A Angular project with Spring for handling server-side logic and PostgreSQL for data storage.',
    summary: `
      Project Description:
      This Full-Stack Project which I called Cake World with Angular, Spring Boot and PostgreSQL is a web application that combines frontend built with Angular and backend using Spring Boot and PostgreSQL. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. Full-Stack Architecture: Combines a Angular frontend with an Spring Boot backend and PostgreSQL database.
      3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
      4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick access.  
      
      Technologies Used:
      1. Frontend: Angular, HTML, CSS.
      2. Backend: Java, Spring Boot.
      3. Database: PostgreSQL, Spring Data JPA.
      4. State Management: Angular Services.
      5. Routing: Angular Router.
      6. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Angular components and frontend logic.
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.
      Backend: Contains all Spring Boot server-side code and database logic.  
      1. Controllers: Handle the HTTP requests and responses.
      2. Services: Contain the business logic of the application.
      3. Repositories: Interface with the PostgreSQL database using Spring Data JPA.
      4. Models: Define the entity classes mapped to the database tables.
      5. Config: Configuration files, including database connection settings.   
      
      To run this project locally, follow these steps: 
      1. GitHub: https://github.com/goshy29/angular-spring-postgresql
      2. Clone the repository: git clone https://github.com/goshy29/angular-spring-postgresql.git 
      3. Open the project with your code editor(IntelliJ IDEA) and open New Terminal
      4. To install frontend dependencies, at the Terminal navigate to "cd src/main/frontend" and run: npm install
      5. Ensure PostgreSQL is installed and running
      6. Create a database and update file "application.properties" with your database credentials
      7. Start the Spring Boot application 
      8. Start the frontend development server: npm start
      9. Open the application in your browser: http://localhost:4200      
    `
  },
  {
    id: 'nextjs-mongodb-docker',
    image: iron_muscle,
    title: 'Next.js Project + MongoDB with Docker',
    description:
      'A Next.js project with MongoDB database, featuring Docker for simplified running and deployment.',
    summary: `
      Project Description:
      The "IronMuscle" application, built with Next.js and MongoDB, is a modern web app designed for users to share and document their CrossFit or fitness experiences. Users can post their stories to a Blog section from the menu, with details including the title, username, email, and description of their experience, all saved to MongoDB. This application includes the ability to delete blog posts, as well as access a News section with in-memory loaded articles about the fitness world. Now, leveraging Docker and Docker Compose, this project simplifies local setup and deployment, allowing you to quickly spin up the environment with a single command.

      Features:
      1. Server-Side Rendering (SSR): Uses Next.js for efficient server-side rendering.
      2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones. 
      3. Full-Stack Architecture: Combines a Next.js frontend and MongoDB database.
      4. Containerized Deployment: Runs Docker containers for both frontend and MongoDB, streamlining development and deployment.

      Technologies Used:
      1. Frontend: Next.js, React.js, CSS.
      2. Backend: Node.js, Express.js (for API routes).
      3. Database: MongoDB, Mongoose.
      4. State Management: React Hooks.
      5. Routing: Next.js Pages Router.
      6. Containerization: Docker, Docker Compose.
      7. Version Control: Git, GitHub.

      Project Structure:
      Frontend: Contains all Next.js components and frontend logic
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home, News, Blog and Share Experience.
      Backend: Contains all server-side code and database logic.
      1. API Routes: Define API endpoints for fetching and manipulating project data.
      2. db-connection: Folder dedicated to managing the MongoDB connection.

      To run this project locally with Docker Compose, follow these steps:
      1. GitHub: https://github.com/goshy29/nextjs-mongodb-docker
      2. Clone the repository: https://github.com/goshy29/nextjs-mongodb-docker.git
      3. Open the project with your code editor(VS Code) and open New Terminal
      4. Ensure Docker is installed on your computer and running
      5. Start the services in detached mode: docker-compose up -d
      6. Open the application in your browser: http://localhost:3000
      7. To stop services without removing volumes: docker-compose down
      8. To stop and remove volumes (for a fresh start): docker-compose down -v
    `      
  },
  {
    id: 'react-movies-demo',
    image: cinemahome,
    title: 'React Movies Project Demo',
    description:
      'A React Movies Project Demo with an in-memory database to store and manage project data.',
    summary: `
      Project Description:
      "Cinema Home" is a React Application with In-Memory Database, a dynamic, interactive web application that allows users to browse a list of movies, watch trailers, and leave comments for each movie. The app is built entirely on the client-side. While the app does not have server-side persistence, it provides a simple and responsive user experience. Additionally, the project includes a Dockerfile and Docker Compose configuration to easily run the app in a containerized environment.

      Features:
      1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
      2. In-Memory Database: Utilizes an in-memory database to store and manage project data, allowing for fast access without the need for a backend server.
      3. Movie List Display: Displays a list of movie items, each featuring a poster, title, description, watching a trailer or add comments.
      4. Docker Support: Includes a Dockerfile and Docker Compose file for containerized deployment, making it easy to set up and run the application in a consistent environment.
      5. GitHub Integration: Direct links to GitHub repositories for easy access to source code and project details.
      
      Technologies Used:
      1. Frontend: React.js, JSX, CSS.
      2. State Management: React Hooks.
      3. Routing: React Router.
      4. In-Memory Database: Local state management for simulating a database.
      5. Docker: Docker and Docker Compose for containerized application deployment.
      6. Version Control: Git, GitHub.

      Project Structure:
      1. Components: Components(some of them reusable) for different sections of the project, including Menu.
      2. Pages: Separate pages for Home and Watch List.
      3. Data: A JavaScript file with JSON objects to simulate the in-memory database containing project information.

      To run this project locally, follow these steps:
      1. GitHub: https://github.com/goshy29/react-movies-demo
      2. Clone the repository: https://github.com/goshy29/react-movies-demo.git
      3. Open the project with your code editor(VS Code) and open New Terminal
      4. To install dependencies, at the Terminal run: npm install
      5. Start the development server: npm start

      Run the App with Docker:
      1. Into the Terminal, run: docker-compose up -d
      2. To stop services: docker-compose down

      Open the application in your browser: http://localhost:3000      
    `            
  }
]