![Banner NestJS Clean Architecture Journey](https://imgur.com/a/gJ9yf1M)

## Branches Overview

This repository demonstrates three architectural approaches for building a simple REST API using NestJS with PostgreSQL and Drizzle ORM:

### 1. `basic-rest-api`

- **Description:** A straightforward REST API implementation using NestJS. All business logic is handled directly in controllers and services, without any domain-driven design (DDD) principles.
- **Use Case:** Best for small projects or quick prototypes where separation of concerns and scalability are not priorities.

### 2. `ddd-structure`

- **Description:** Implements Domain-Driven Design (DDD) principles. The codebase is organized into layers: domain, application, infrastructure, and API. Each use case is encapsulated in its own service, promoting separation of concerns and testability.
- **Use Case:** Suitable for medium to large projects where maintainability, scalability, and clear boundaries between business logic and infrastructure are important.

### 3. `ddd-structure-using-facade-pattern`

- **Description:** Builds on the DDD structure by introducing the Facade pattern. All use cases are aggregated behind a single facade class, simplifying the API layer and making it easier to manage dependencies and orchestrate complex operations.
- **Use Case:** Ideal for complex domains where you want to further decouple controllers from business logic and aggregate multiple use cases behind a unified interface.

---

## How to Use This Repository

### 1. Clone the Repository

```bash
git clone https://github.com/anotherbuginthecode/nestjs-clean-architecture-journey.git
cd nestjs-clean-architecture-journey
```

### 2. Switch Between Branches

```bash
# List branches
git branch -a

# Checkout the branch you want to explore
git checkout basic-rest-api
# or
git checkout ddd-structure
# or
git checkout ddd-structure-using-facade-pattern
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a .env file in the root directory and set your PostgreSQL connection string:

```
DATABASE_URL=postgres://user:password@localhost:5432/yourdb
```

### 5. Create Database Tables with Drizzle ORM

Drizzle ORM is used for schema migrations. To create tables:

```bash
# Generate and apply migrations
npm run db:generate
npm run db:migrate
```

Or, if you already have migration files, like in this example:

```bash
npm run db:migrate
```

This will create the necessary tables as defined in the schema files (see drizzle.config.ts and `src/modules/**/infrastructure/models/schema.ts`).

### 6. Run the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

### 7. Run Tests

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e
```

## License

MIT
