
# Khan Market – Complete E-Commerce Web Platform

Khan Market is a full-featured e-commerce web application built with Angular 19 and Bootstrap 5.3. It provides a modern, responsive user interface and an admin panel for managing products. The project uses `json-server` to simulate REST API endpoints during development, making it ideal for prototypes, MVPs, or educational purposes.

## Features

- Organized and responsive product listing interface
- Dynamic shopping cart functionality
- Admin panel with full CRUD (Create, Read, Update, Delete) operations for product management
- API consumption using Angular's built-in HttpClient
- Modular, scalable architecture with reusable components
- Mock backend using `json-server`

## Project Structure

```

khan-market/
├── src/
│   ├── app/
│   │   ├── components/         # Front-end UI components
│   │   ├── services/           # Data and API services
│   │   └── admin-panel/        # Admin dashboard for product management
│   ├── assets/
│   └── index.html
├── db.json                    # Mock database for json-server

````

## Tech Stack

- Angular 19
- Bootstrap 5.3
- TypeScript
- RxJS
- HTML5 + CSS3
- Font Awesome
- json-server (mock API)

## Getting Started

### 1. Run the Frontend

```bash
npm install
ng serve
````

Visit the application at:

```
http://localhost:4200
```

### 2. Run the Mock Backend

```bash
npx json-server --watch db.json --port 3000
```

API will be available at:

```
http://localhost:3000/products
```

## Developer

Nada Essam
GitHub: [NadaEssam06](https://github.com/NadaEssam06)

## License

This project is open source and available under the MIT License.

