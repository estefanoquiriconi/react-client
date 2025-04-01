# React Client - Product Management Application

This is a React-based frontend application for managing products. It allows users to create, read, update, and delete products through a user-friendly interface.

## Features

- View a list of all products
- Add new products
- Edit existing products
- Delete products
- Toggle product availability status
- Form validation

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client
- **Valibot** - Schema validation
- **Vite** - Build tool and development server
- **ESLint** - Code linting

## Project Structure

```
client/
├── public/
├── src/
│   ├── actions/         # React Router actions
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── loaders/         # React Router loaders
│   ├── services/        # API service functions
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── views/           # Page components
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   └── router.tsx       # Router configuration
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v10.7.0 or higher)

### Installation

1. Clone the repository
2. Navigate to the client directory
3. Install dependencies:

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the client directory with the following variables:

```
VITE_API_URL=http://localhost:3000
```

Adjust the URL to match your backend server address.

### Development

To start the development server:

```bash
pnpm dev
```

The application will be available at http://localhost:5173

### Building for Production

To create a production build:

```bash
pnpm build
```

The build output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## API Integration

This client application communicates with a RESTful API for product management. The API endpoints are:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `PATCH /api/products/:id` - Toggle product availability

## License

This project is licensed under the MIT License.
