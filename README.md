 

## Node.js Express.js, PostgreSQL, Docker & CRUD Operations.  🌟

This project is designed to guide you through the essentials of setting up a Node.js server, performing CRUD operations, and interacting with a PostgreSQL database. Follow along to create a scalable and containerized application! 🖥️🐘 
### What's Inside 🚀:
- **Express.js Server**:  Node.js server using Express.js.
- **PostgreSQL Integration**: Connect the server to a PostgreSQL database and perform CRUD operations.
- **Docker Setup**: Use Docker to containerize the application for consistent and scalable deployments.
- **API Endpoints**: Implement various API endpoints to interact with the database.

Get Started with Node.js & PostgreSQL App 

## API Endpoints - From Basic Operations to Advanced Queries 🔄

The project includes various API endpoints to manage data in the PostgreSQL database. With these endpoints.

### What's Included 📋:
- **GET /create**: 🏗️ Create the `schools` table in the database.
- **POST /**: ➕ Add a new entry to the `schools` table.
- **GET /**: 📥 Fetch all entries from the `schools` table.
- **PUT /**: ✏️ Update an entry by it's ID from the `schools` table.
- **DELETE /:id**: 🗑️ Delete an entry by its ID from the `schools` table.

Get Started with API Endpoints 

## Docker Configuration - Simplify Your Development Environment 🐳

The Docker setup ensures that your application runs consistently across different environments. By using Docker Compose, you can easily manage both your Node.js application and PostgreSQL database.

### Docker Compose Configuration 🛠️
This is the ` Dockerfile`  Compose configuration to manage both your database and application in one place.

```dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

## Docker Compose Configuration yaml

version: "3.7"

services:
  db:
    image: postgres:12
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: password
      POSTGRES_DB: pgdb
    ports:
      - "5432:5432"

  app:
    image: umukoro-node-app
    ports:
      - "4000:3000"
    depends_on:
      - db
```
### Getting Started 💻
1. Clone the Repository
```
git clone <repository-url>
cd <repository-directory>
```
2. Build and Start Containers
```
docker compose up --build
```
3. Access the Application Open your browser and navigate to http://localhost:4000 to start interacting with your application.

### Troubleshooting 🔧

• Port Binding Issues: Ensure no other process is using port 3000 or adjust the port mapping in docker-compose.yml.

• Database Connection: Verify that the database service is running and accessible.
