# PublicAI

A public repository for AI-related projects and demonstrations.

## Backend API

This repository includes a Node.js Express backend API that provides RESTful endpoints for AI services and user management.

### Features

- **RESTful API** built with Express.js
- **Security** with Helmet and CORS protection
- **Rate limiting** to prevent abuse
- **Health checks** for monitoring
- **Error handling** with proper HTTP status codes
- **Logging** with Morgan
- **Environment configuration** support
- **AI service endpoints** for text analysis, predictions, and recommendations
- **User management** endpoints

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mishkile/PublicAI.git
   cd PublicAI/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Start the production server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`

### API Endpoints

#### Health Check
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed system information

#### API Information
- `GET /` - API welcome message and endpoint overview
- `GET /api/v1` - API version information
- `GET /api/v1/status` - API service status

#### User Management
- `GET /api/v1/users` - Get all users (with pagination and filtering)
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create new user
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

#### AI Services
- `GET /api/v1/ai` - AI services information
- `POST /api/v1/ai/analyze-text` - Analyze text content
- `POST /api/v1/ai/predict` - Make predictions
- `POST /api/v1/ai/recommend` - Get recommendations
- `GET /api/v1/ai/status` - AI model status

### Example Requests

#### Analyze Text
```bash
curl -X POST http://localhost:3000/api/v1/ai/analyze-text \
  -H "Content-Type: application/json" \
  -d '{"text": "This is a great example of AI text analysis!"}'
```

#### Create User
```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "role": "user"}'
```

#### Get Recommendations
```bash
curl -X POST http://localhost:3000/api/v1/ai/recommend \
  -H "Content-Type: application/json" \
  -d '{"user_preferences": {"topics": ["AI", "Technology"]}, "limit": 3}'
```

### Development

#### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

#### Project Structure
```
backend/
├── server.js          # Main application file
├── package.json       # Dependencies and scripts
├── .env.example       # Environment variables template
├── .gitignore         # Git ignore rules
└── routes/
    ├── api.js         # Main API routes
    ├── health.js      # Health check routes
    ├── users.js       # User management routes
    └── ai.js          # AI service routes
```

### Security Features

- **Helmet.js** for security headers
- **CORS** protection with configurable origins
- **Rate limiting** to prevent abuse
- **Input validation** for API endpoints
- **Error handling** without exposing sensitive information

### Environment Variables

See `.env.example` for all available configuration options.

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License.

## Roadmap

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication and authorization
- [ ] Real AI model integration
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Frontend application

---

**Note**: This is a demonstration project. The AI endpoints currently return mock data and should be integrated with real AI services for production use.