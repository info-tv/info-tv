define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/screens/:id",
    "title": "Delete screen",
    "name": "DeleteScreen",
    "group": "Screen",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "2xx": [
          {
            "group": "2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/screens.js",
    "groupTitle": "Screen",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"InternalError\",\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/screens/:id",
    "title": "Get screen",
    "name": "GetScreen",
    "group": "Screen",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "ObjectId",
            "description": "<p>Object id of screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Screen name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Screen description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Screen width in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Screen height in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Screen width in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Screen height in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the screen in String/JSON format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"ObjectId\": 12,\n  \"id\": 3,\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"name\": \"SD3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"layout\": {},\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/screens.js",
    "groupTitle": "Screen",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"InternalError\",\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/screens",
    "title": "List screens",
    "name": "GetScreens",
    "group": "Screen",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "screens",
            "description": "<p>List of screens</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "screens.ObjectId",
            "description": "<p>Object id of screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "screens.id",
            "description": "<p>Screen ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "screens.name",
            "description": "<p>Screen name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "screens.description",
            "description": "<p>Screen description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "screens.location",
            "description": "<p>Physical or logical location of the screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "screens.width_mm",
            "defaultValue": "0",
            "description": "<p>Screen width in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "screens.height_mm",
            "defaultValue": "0",
            "description": "<p>Screen height in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "screens.width_px",
            "defaultValue": "0",
            "description": "<p>Screen width in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "screens.height_px",
            "defaultValue": "0",
            "description": "<p>Screen height in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "screens.layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the screen in String/JSON format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "screens.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "screens.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"ObjectId\": 12,\n    \"id\": 3,\n    \"width_mm\": 200,\n    \"height_mm\": 113,\n    \"width_px\": 1920,\n    \"height_px\": 1080,\n    \"name\": \"SD3\",\n    \"description\": \"Lorem ipsum dolor sit amet...\",\n    \"location\": \"Stage D\",\n    \"layout\": {},\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/screens.js",
    "groupTitle": "Screen",
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"InternalError\",\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1/screens",
    "title": "Create screen",
    "name": "PostScreen",
    "group": "Screen",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Screen name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Screen description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Screen width in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Screen height in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Screen width in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Screen height in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the screen in String/JSON format</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/screens HTTP/1.1\n{\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"name\": \"SD3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"layout\": {}\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/screens/3",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/screens.js",
    "groupTitle": "Screen",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequest\",\n  \"message\": \"Validation failed\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"InternalError\",\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/v1/screens/:id",
    "title": "Replace screen",
    "name": "PutScreen",
    "group": "Screen",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Screen name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Screen description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Screen width in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Screen height in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Screen width in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Screen height in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the screen in String/JSON format</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/screens HTTP/1.1\n{\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"name\": \"SD3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"layout\": {}\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/screens/3",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/screens.js",
    "groupTitle": "Screen",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequest\",\n  \"message\": \"Validation failed\"\n}",
          "type": "json"
        },
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"InternalError\",\n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });