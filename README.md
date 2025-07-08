<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Books API - NestJS Learning Project

A simple REST API for managing books built with NestJS framework. This project demonstrates basic CRUD operations, dependency injection, and RESTful API design patterns.

## 🚀 Features

- **Create** new books
- **Read** all books or find specific books by ID
- **Update** existing books (partial updates supported)
- **Delete** books by ID
- In-memory data storage
- Type-safe with TypeScript
- RESTful endpoint design

## 📋 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/books` | Get all books | - |
| `GET` | `/books/:id` | Get book by ID | - |
| `POST` | `/books` | Create new book | `{ title, author, publishedYear }` |
| `PUT` | `/books/:id` | Update book | `{ title?, author?, publishedYear? }` |
| `DELETE` | `/books/:id` | Delete book | - |

## 🏗️ Project Structure

```
src/
├── app.controller.ts    # Main books controller (CRUD endpoints)
├── app.service.ts       # Business logic service
├── app.module.ts        # Application module
├── FakeDatabase.ts      # In-memory data storage
└── main.ts             # Application entry point
```

## 📚 Book Model

```typescript
interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
}
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd book-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

4. **Access the API**
   - Base URL: `http://localhost:3000`
   - Books endpoint: `http://localhost:3000/books`

## 🧪 Example Usage

### Create a new book
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925
  }'
```

### Get all books
```bash
curl http://localhost:3000/books
```

### Get book by ID
```bash
curl http://localhost:3000/books/1
```

### Update a book
```bash
curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title"
  }'
```

### Delete a book
```bash
curl -X DELETE http://localhost:3000/books/1
```

## 🎯 Learning Objectives

This project covers the following NestJS concepts:

- **Controllers**: Handling HTTP requests and responses
- **Services**: Business logic separation and dependency injection
- **Modules**: Application structure and organization
- **Decorators**: `@Controller`, `@Get`, `@Post`, `@Put`, `@Delete`, `@Param`, `@Body`
- **DTOs**: Data transfer objects and validation
- **TypeScript**: Strong typing and interfaces

## 🔧 Technologies Used

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Typed superset of JavaScript
- **Node.js** - Runtime environment
- **Express** - HTTP server framework (under the hood)

## 📝 Notes

- This project uses in-memory storage, so data will be lost when the server restarts
- For production applications, you would typically use a real database (PostgreSQL, MongoDB, etc.)
- Consider adding validation decorators (`class-validator`) for production use
- Authentication and authorization would be needed for real-world applications

## 🚧 Future Enhancements

- [ ] Add database integration (TypeORM/Mongoose)
- [ ] Implement data validation with DTOs
- [ ] Add authentication & authorization
- [ ] Add unit tests
- [ ] Add API documentation with Swagger
- [ ] Add pagination for book listings
- [ ] Add search and filtering capabilities

---

**Happy Learning!** 🎓 This project is perfect for understanding NestJS fundamentals and REST API development patterns.
## Stay in touch

- Author - [Ayo Lawal](https://x.com/Ayo__Lawal)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
