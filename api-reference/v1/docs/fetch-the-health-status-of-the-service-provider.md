# Fetch the Health Status of the Service Provider

## Overview
This endpoint allows you to check the health status of the Service Provider, which includes the health of various internal components such as the application database and API servers. The endpoint responds with detailed status information about the service and its components.

### Endpoint
`GET /health`

### Summary
Fetches the current health status of the service provider and the associated components. The response contains the overall service status and the status of individual components, including the database and server.

### Responses

#### 200 - Service is healthy
A successful response with a status code of `200` indicates that the service is healthy. The response will include the overall status and details of individual components.

Example Response:

```json
{
  "status": "UP",
  "version": "1.0.0",
  "description": "The service is healthy.",
  "components": [
    {
      "id": "app-db-memory",
      "name": "Application Database",
      "type": "DATABASE",
      "status": "UP"
    },
    {
      "id": "adapter-server",
      "name": "Adapter API Server",
      "type": "ADAPTER",
      "status": "UP"
    },
    {
      "id": "service-server",
      "name": "API Server",
      "type": "API",
      "status": "UP"
    }
  ],
  "time": "2022-11-01T10:42:08.131+05:30"
}
