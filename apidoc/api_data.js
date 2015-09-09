define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/channels/:id",
    "title": "5 - Delete channel",
    "name": "DeleteChannel",
    "group": "Channel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Channel ID</p> "
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
    "filename": "src/controllers/v1/channels.js",
    "groupTitle": "Channel",
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
    "url": "/api/v1/channels/:id",
    "title": "3 - Get channel",
    "name": "GetChannel",
    "group": "Channel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Channel ID</p> "
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
            "description": "<p>Object id of channel</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Channel ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Channel name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Channel description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the channel</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the channel in String/JSON format</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"ObjectId\": 4,\n  \"id\": 3,\n  \"name\": \"MWC-16\",\n  \"description\": \"Mobile World Conference 2016\",\n  \"location\": \"Barcelona\",\n  \"layout\": {},\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/channels.js",
    "groupTitle": "Channel",
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
    "url": "/api/v1/channels",
    "title": "1 - List channels",
    "name": "GetChannels",
    "group": "Channel",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "channels",
            "description": "<p>List of channels</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "channels.ObjectId",
            "description": "<p>Object id of channel</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "channels.id",
            "description": "<p>Channel ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels.name",
            "description": "<p>Channel name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels.description",
            "description": "<p>Channel description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "channels.location",
            "description": "<p>Physical or logical location of the channel</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "channels.layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the channel in String/JSON format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channels.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "channels.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"ObjectId\": 4,\n    \"id\": 3,\n    \"name\": \"MWC-16\",\n    \"description\": \"Mobile World Conference 2016\",\n    \"location\": \"Barcelona\",\n    \"layout\": {},\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/channels.js",
    "groupTitle": "Channel",
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
    "url": "/api/v1/channels",
    "title": "2 - Create channel",
    "name": "PostChannels",
    "group": "Channel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Channel name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Channel description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the channel in String/JSON format</p> "
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
            "description": "<p>Channel ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/channels HTTP/1.1\n{\n  \"name\": \"MWC-2016\",\n  \"description\": \"Mobile World Conference 2016\",\n  \"location\": \"Barcelona\",\n  \"layout\": {}\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/channels/3",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/channels.js",
    "groupTitle": "Channel",
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
    "url": "/api/v1/channels/:id",
    "title": "4 - Replace channel",
    "name": "PutChannel",
    "group": "Channel",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Channel name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Channel description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "layout",
            "defaultValue": "{}",
            "description": "<p>Layout and style of the channel in String/JSON format</p> "
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
            "field": "id",
            "description": "<p>Channel ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 OK",
          "content": "PUT /api/v1/channels/3 HTTP/1.1\n{\n  \"name\": \"MWC-16\",\n  \"description\": \"Mobile World Conference 2016\",\n  \"location\": \"Barcelona\",\n  \"layout\": {}\n}\n\nHTTP/1.1 200 OK\n{\n  \"ObjectId\": 4,\n  \"id\": 3,\n  \"name\": \"MWC-16\",\n  \"description\": \"Mobile World Conference 2016\",\n  \"location\": \"Barcelona\",\n  \"layout\": {},\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/channels.js",
    "groupTitle": "Channel",
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
  },
  {
    "type": "delete",
    "url": "/api/v1/contents/:id",
    "title": "3 - Delete content",
    "name": "DeleteContent",
    "group": "Content",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Content ID</p> "
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
    "filename": "src/controllers/v1/contents.js",
    "groupTitle": "Content",
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
    "url": "/api/v1/contents/:id",
    "title": "2 - Get content",
    "name": "GetContent",
    "group": "Content",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Content ID</p> "
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
            "description": "<p>Object id of content</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Content ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "kind",
            "description": "<p>Table name of the real content</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"ObjectId\": 18,\n  \"id\": 7,\n  \"kind\": \"ImageContent\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/contents.js",
    "groupTitle": "Content",
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
    "url": "/api/v1/contents",
    "title": "1 - List contents",
    "name": "GetContents",
    "group": "Content",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "contents",
            "description": "<p>List of contents</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "contents.ObjectId",
            "description": "<p>Object id of content</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "contents.id",
            "description": "<p>Content ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contents.kind",
            "description": "<p>Table name of the real content</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contents.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contents.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"ObjectId\": 18,\n    \"id\": 7,\n    \"kind\": \"ImageContent\",\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/contents.js",
    "groupTitle": "Content",
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
    "type": "delete",
    "url": "/api/v1/displays/:id",
    "title": "5 - Delete display",
    "name": "DeleteDisplay",
    "group": "Display",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Display ID</p> "
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
    "filename": "src/controllers/v1/displays.js",
    "groupTitle": "Display",
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
    "url": "/api/v1/displays/:id",
    "title": "3 - Get display",
    "name": "GetDisplay",
    "group": "Display",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Display ID</p> "
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
            "field": "id",
            "description": "<p>Display ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Display name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Display description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the display</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Display width in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Display height in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Display width in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Display height in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "x",
            "defaultValue": "0",
            "description": "<p>X coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "y",
            "defaultValue": "0",
            "description": "<p>Y coordinate (in pixels) of the top-left corner of the display in screen</p> "
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
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ScreenId",
            "description": "<p>Parent screen ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"name\": \"RPI3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"x\": 0,\n  \"y\": 0,\n  \"ssh\": \"ssh://192.168.4.15\",\n  \"public_key\": \"ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"ScreenId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/displays.js",
    "groupTitle": "Display",
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
    "url": "/api/v1/displays",
    "title": "1 - List displays",
    "name": "GetDisplays",
    "group": "Display",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "displays",
            "description": "<p>List of displays</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "displays.id",
            "description": "<p>Display ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "displays.name",
            "description": "<p>Display name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "displays.description",
            "description": "<p>Display description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "displays.location",
            "description": "<p>Physical or logical location of the display</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "displays.width_mm",
            "defaultValue": "0",
            "description": "<p>Display width in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "displays.height_mm",
            "defaultValue": "0",
            "description": "<p>Display height in millimetres</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "displays.width_px",
            "defaultValue": "0",
            "description": "<p>Display width in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "displays.height_px",
            "defaultValue": "0",
            "description": "<p>Display height in pixels</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "displays.x",
            "defaultValue": "0",
            "description": "<p>X coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "200",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "displays.y",
            "defaultValue": "0",
            "description": "<p>Y coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "displays.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "displays.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "displays.screenId",
            "description": "<p>Parent screen ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 5,\n    \"name\": \"RPI3\",\n    \"description\": \"Lorem ipsum dolor sit amet...\",\n    \"location\": \"Stage D\",\n    \"width_mm\": 200,\n    \"height_mm\": 113,\n    \"width_px\": 1920,\n    \"height_px\": 1080,\n    \"x\": 0,\n    \"y\": 0,\n    \"ssh\": \"ssh://192.168.4.15\",\n    \"public_key\": \"ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15\",\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n    \"ScreenId\": 3\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/displays.js",
    "groupTitle": "Display",
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
    "url": "/api/v1/displays",
    "title": "2 - Create display",
    "name": "PostDisplays",
    "group": "Display",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Display name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Display description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the display</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Display width in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Display height in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Display width in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Display height in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "x",
            "defaultValue": "0",
            "description": "<p>X coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "y",
            "defaultValue": "0",
            "description": "<p>Y coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ScreenId",
            "description": "<p>Parent screen ID</p> "
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
            "description": "<p>Display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/displays HTTP/1.1\n{\n  \"name\": \"RPI5\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"x\": 0,\n  \"y\": 0,\n  \"ssh\": \"ssh://192.168.4.15\",\n  \"public_key\": \"ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15\",\n  \"ScreenId\": 3\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/displays/5",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/displays.js",
    "groupTitle": "Display",
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
    "url": "/api/v1/displays/:id",
    "title": "4 - Replace display",
    "name": "PutDisplay",
    "group": "Display",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Display name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Display description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the display</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_mm",
            "defaultValue": "0",
            "description": "<p>Display width in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_mm",
            "defaultValue": "0",
            "description": "<p>Display height in millimetres</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "width_px",
            "defaultValue": "0",
            "description": "<p>Display width in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "height_px",
            "defaultValue": "0",
            "description": "<p>Display height in pixels</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "x",
            "defaultValue": "0",
            "description": "<p>X coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": true,
            "field": "y",
            "defaultValue": "0",
            "description": "<p>Y coordinate (in pixels) of the top-left corner of the display in screen</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ScreenId",
            "description": "<p>Parent screen ID</p> "
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
            "field": "id",
            "description": "<p>Display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "PUT /api/v1/displays/5 HTTP/1.1\n{\n  \"name\": \"RPI3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"x\": 0,\n  \"y\": 0,\n  \"ssh\": \"ssh://192.168.4.15\",\n  \"public_key\": \"ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15\",\n  \"ScreenId\": 3\n}\n\nHTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"name\": \"RPI3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"x\": 0,\n  \"y\": 0,\n  \"ssh\": \"ssh://192.168.4.15\",\n  \"public_key\": \"ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"ScreenId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/displays.js",
    "groupTitle": "Display",
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
  },
  {
    "type": "delete",
    "url": "/api/v1/objects/:id",
    "title": "3 - Delete object",
    "name": "DeleteObject",
    "group": "Object",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Object ID</p> "
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
            "description": "<p>No Object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "204 No Object",
          "content": "HTTP/1.1 204 No Object",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/objects.js",
    "groupTitle": "Object",
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
    "url": "/api/v1/objects/:id",
    "title": "2 - Get object",
    "name": "GetObject",
    "group": "Object",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Object ID</p> "
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
            "field": "id",
            "description": "<p>Object ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "kind",
            "description": "<p>Table name of the real object</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 18,\n  \"kind\": \"Content\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/objects.js",
    "groupTitle": "Object",
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
    "url": "/api/v1/objects",
    "title": "1 - List objects",
    "name": "GetObjects",
    "group": "Object",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "objects",
            "description": "<p>List of objects</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "objects.id",
            "description": "<p>Object ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "objects.kind",
            "description": "<p>Table name of the real object</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "objects.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "objects.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 18,\n    \"kind\": \"Content\",\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/objects.js",
    "groupTitle": "Object",
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
    "type": "delete",
    "url": "/api/v1/object-groups/:id",
    "title": "5 - Delete object group",
    "name": "DeleteObjectGroup",
    "group": "Object_Group",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Object group ID</p> "
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
    "filename": "src/controllers/v1/object-groups.js",
    "groupTitle": "Object_Group",
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
    "url": "/api/v1/object-groups/:id",
    "title": "3 - Get object group",
    "name": "GetObjectGroup",
    "group": "Object_Group",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Object group ID</p> "
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
            "description": "<p>Object id of object group</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Object group ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Object group name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Object group description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the object group</p> "
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
          "content": "HTTP/1.1 200 OK\n{\n  \"ObjectId\": 13,\n  \"id\": 3,\n  \"name\": \"Spanish\",\n  \"description\": \"Spanish channels\",\n  \"location\": \"Spain\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/object-groups.js",
    "groupTitle": "Object_Group",
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
    "url": "/api/v1/object-groups",
    "title": "1 - List object groups",
    "name": "GetObjectGroups",
    "group": "Object_Group",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "object-groups",
            "description": "<p>List of object groups</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "object-groups.ObjectId",
            "description": "<p>Object id of object group</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "object-groups.id",
            "description": "<p>Object group ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "object-groups.name",
            "description": "<p>Object group name</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "object-groups.description",
            "description": "<p>Object group description</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "object-groups.location",
            "description": "<p>Physical or logical location of the object group</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object-groups.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "object-groups.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"ObjectId\": 13,\n    \"id\": 3,\n    \"name\": \"Spanish\",\n    \"description\": \"Spanish channels\",\n    \"location\": \"Spain\",\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/object-groups.js",
    "groupTitle": "Object_Group",
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
    "url": "/api/v1/object-groups",
    "title": "2 - Create object group",
    "name": "PostObjectGroups",
    "group": "Object_Group",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Object group name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Object group description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the object group</p> "
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
            "description": "<p>Object group ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/object-groups HTTP/1.1\n{\n  \"name\": \"Spanish\",\n  \"description\": \"Spanish channels\",\n  \"location\": \"Spain\"\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/object-groups/3",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/object-groups.js",
    "groupTitle": "Object_Group",
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
    "url": "/api/v1/object-groups/:id",
    "title": "4 - Replace object group",
    "name": "PutObjectGroup",
    "group": "Object_Group",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Object group name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>Object group description</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Physical or logical location of the object group</p> "
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
            "field": "id",
            "description": "<p>Object group ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 OK",
          "content": "PUT /api/v1/object-groups/3 HTTP/1.1\n{\n  \"name\": \"Spanish\",\n  \"description\": \"Spanish channels\",\n  \"location\": \"Spain\",\n  \"layout\": {}\n}\n\nHTTP/1.1 200 OK\n{\n  \"ObjectId\": 13,\n  \"id\": 3,\n  \"name\": \"Spanish\",\n  \"description\": \"Spanish channels\",\n  \"location\": \"Spain\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/object-groups.js",
    "groupTitle": "Object_Group",
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
  },
  {
    "type": "delete",
    "url": "/api/v1/screens/:id",
    "title": "5 - Delete screen",
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
    "title": "3 - Get screen",
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
    "title": "1 - List screens",
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
    "title": "2 - Create screen",
    "name": "PostScreens",
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
    "title": "4 - Replace screen",
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
        "200": [
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Screen ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 OK",
          "content": "PUT /api/v1/screens/3 HTTP/1.1\n{\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"name\": \"SD3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"layout\": {}\n}\n\nHTTP/1.1 200 OK\n{\n  \"ObjectId\": 12,\n  \"id\": 3,\n  \"width_mm\": 200,\n  \"height_mm\": 113,\n  \"width_px\": 1920,\n  \"height_px\": 1080,\n  \"name\": \"SD3\",\n  \"description\": \"Lorem ipsum dolor sit amet...\",\n  \"location\": \"Stage D\",\n  \"layout\": {},\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\"\n}",
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
  },
  {
    "type": "delete",
    "url": "/api/v1/situations/:id",
    "title": "5 - Delete situation",
    "name": "DeleteSituation",
    "group": "Situation",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Situation ID</p> "
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
    "filename": "src/controllers/v1/situations.js",
    "groupTitle": "Situation",
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
    "url": "/api/v1/situations/:id",
    "title": "3 - Get situation",
    "name": "GetSituation",
    "group": "Situation",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Situation ID</p> "
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
            "field": "id",
            "description": "<p>Situation ID</p> "
          },
          {
            "group": "200",
            "type": "<p>JSON</p> ",
            "optional": true,
            "field": "condition",
            "description": "<p>Evaluable condition expression</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "showing_time",
            "description": "<p>Showing time in milliseconds</p> "
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
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ContainerId",
            "description": "<p>Container object ID</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ItemId",
            "description": "<p>Item object ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"condition\": {},\n  \"priority\": 0.0,\n  \"showing_time\": 30000.0\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"ContainerId\": 3,\n  \"ItemId\": 4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/situations.js",
    "groupTitle": "Situation",
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
    "url": "/api/v1/situations",
    "title": "1 - List situations",
    "name": "GetSituations",
    "group": "Situation",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "situations",
            "description": "<p>List of situations</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "situations.id",
            "description": "<p>Situation ID</p> "
          },
          {
            "group": "200",
            "type": "<p>JSON</p> ",
            "optional": true,
            "field": "situations.condition",
            "description": "<p>Evaluable condition expression</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "situations.priority",
            "description": "<p>Priority</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "situations.showing_time",
            "description": "<p>Showing time in milliseconds</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "situations.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "situations.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "situations.ContainerId",
            "description": "<p>Container object ID</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "situations.ItemId",
            "description": "<p>Item object ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 5,\n    \"condition\": {},\n    \"priority\": 0.0,\n    \"showing_time\": 30000.0\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n    \"ContainerId\": 3,\n    \"ItemId\": 4\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/situations.js",
    "groupTitle": "Situation",
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
    "url": "/api/v1/situations",
    "title": "2 - Create situation",
    "name": "PostSituations",
    "group": "Situation",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Situation ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "condition",
            "description": "<p>Evaluable condition expression</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "showing_time",
            "description": "<p>Showing time in milliseconds</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ContainerId",
            "description": "<p>Container object ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ItemId",
            "description": "<p>Item object ID</p> "
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
            "description": "<p>Situation ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/situations HTTP/1.1\n{\n  \"condition\": {},\n  \"priority\": 0.0,\n  \"showing_time\": 30000.0,\n  \"ContainerId\": 3,\n  \"ItemId\": 4\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/situations/5",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/situations.js",
    "groupTitle": "Situation",
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
    "url": "/api/v1/situations/:id",
    "title": "4 - Replace situation",
    "name": "PutSituation",
    "group": "Situation",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Situation ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "condition",
            "description": "<p>Evaluable condition expression</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "showing_time",
            "description": "<p>Showing time in milliseconds</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ContainerId",
            "description": "<p>Container object ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ItemId",
            "description": "<p>Item object ID</p> "
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
            "field": "id",
            "description": "<p>Display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "PUT /api/v1/displays/5 HTTP/1.1\n{\n  \"condition\": {},\n  \"priority\": 0.0,\n  \"showing_time\": 30000.0,\n  \"ContainerId\": 3,\n  \"ItemId\": 4\n}\n\nHTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"condition\": {},\n  \"priority\": 0.0,\n  \"showing_time\": 30000.0\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"ContainerId\": 3,\n  \"ItemId\": 4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/situations.js",
    "groupTitle": "Situation",
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
  },
  {
    "type": "delete",
    "url": "/api/v1/statuses/:id",
    "title": "5 - Delete status",
    "name": "DeleteStatus",
    "group": "Status",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Status ID</p> "
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
    "filename": "src/controllers/v1/statuses.js",
    "groupTitle": "Status",
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
    "url": "/api/v1/statuses/:id",
    "title": "3 - Get status",
    "name": "GetStatus",
    "group": "Status",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Status ID</p> "
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
            "field": "id",
            "description": "<p>Status ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>New status</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comment",
            "description": "<p>Administrator's comment</p> "
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
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "DisplayId",
            "description": "<p>Parent display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"status\": \"OK\",\n  \"comment\": \"\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"DisplayId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/statuses.js",
    "groupTitle": "Status",
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
    "url": "/api/v1/statuses",
    "title": "1 - List statuses",
    "name": "GetStatuses",
    "group": "Status",
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "statuses",
            "description": "<p>List of statuses</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "statuses.id",
            "description": "<p>Status ID</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "statuses.status",
            "description": "<p>New status</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "statuses.comment",
            "description": "<p>Administrator's comment</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "statuses.createdAt",
            "description": "<p>Timestamp of creation in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "statuses.updatedAt",
            "description": "<p>Timestamp of latest update in ISO format</p> "
          },
          {
            "group": "200",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "statuses.DisplayId",
            "description": "<p>Parent display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 5,\n    \"status\": \"OK\",\n    \"comment\": \"\",\n    \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n    \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n    \"DisplayId\": 3\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/statuses.js",
    "groupTitle": "Status",
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
    "url": "/api/v1/statuses",
    "title": "2 - Create status",
    "name": "PostStatuses",
    "group": "Status",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>New status</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comment",
            "description": "<p>Administrator's comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "DisplayId",
            "description": "<p>Parent display ID</p> "
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
            "description": "<p>Status ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "POST /api/v1/statuses HTTP/1.1\n{\n  \"status\": \"OK\",\n  \"comment\": \"\",\n  \"DisplayId\": 3\n}\n\nHTTP/1.1 201 Created\nLocation: /api/v1/statuses/5",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/statuses.js",
    "groupTitle": "Status",
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
    "url": "/api/v1/statuses/:id",
    "title": "4 - Replace status",
    "name": "PutStatus",
    "group": "Status",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>New status</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "comment",
            "description": "<p>Administrator's comment</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "DisplayId",
            "description": "<p>Parent display ID</p> "
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
            "field": "id",
            "description": "<p>Display ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "PUT /api/v1/displays/5 HTTP/1.1\n{\n  \"status\": \"OK\",\n  \"comment\": \"\",\n  \"DisplayId\": 3\n}\n\nHTTP/1.1 200 OK\n{\n  \"id\": 5,\n  \"status\": \"OK\",\n  \"comment\": \"\",\n  \"createdAt\": \"2015-08-31T14:35:21.202Z\",\n  \"updatedAt\": \"2015-08-31T14:35:21.202Z\",\n  \"DisplayId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1/statuses.js",
    "groupTitle": "Status",
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