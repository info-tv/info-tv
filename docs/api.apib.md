FORMAT: 1A

# info-tv API

This API documentation describes info-tv REST API.

# Group Content

Content is an abstract resource. It combines together all real content
resources. Currently there is no these real content resources.

## Content [/api/contents/{id}]

- Parameters
    - id: `1` (number)

        An unique identifier of the resource.

- Attributes (object)
    - id: `1` (number)

        An unique identifier of the resource.

    - type (string, optional)

        Type of the real content resource.

        - Default: ``

    - createdAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of creation in ISO format.

    - updatedAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of latest update in ISO format.

### Retrieve a Content [GET]

- Response 200 (application/json)
    - Attributes (Content)

### Update a Content [PUT]

- Request (application/json)
    - Attributes (object)
        - type (string, optional)

            Type of the actual content resource.

- Response 200 (application/json)
    - Attributes (Content)

### Delete a Content [DELETE]

- Response 200 (application/json)

        {}

## Contents [/api/contents]

- Attributes (array[Content])

### List Contents [GET]

- Response 200 (application/json)
    - Attributes (Contents)

### Create a Content [POST]

- Response 201 (application/json)
    - Headers

            Location: /api/contents/1

    - Attributes (Content)

# Group Screen

Screen resource contains configurations for each screen devices.

## Screen [/api/screens/{id}]

- Parameters
    - id: `1` (number)

        An unique identifier of the resource.

- Attributes (object)
    - id: `1` (number)

        An unique identifier of the resource.

    - createdAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of creation in ISO format.

    - updatedAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of latest update in ISO format.

### Retrieve a Screen [GET]

- Response 200 (application/json)
    - Attributes (Screen)

### Update a Screen [PUT]

- Response 200 (application/json)
    - Attributes (Screen)

### Delete a Screen [DELETE]

- Response 200 (application/json)

        {}

## Screens [/api/screens]

- Attributes (array[Screen])

### List Screens [GET]

- Response 200 (application/json)
    - Attributes (Screens)

### Create a Screen [POST]

- Response 201 (application/json)
    - Headers

            Location: /api/screens/1

    - Attributes (Screen)

# Group Situation

Situation resource contains information about moments when to show a spesific
Content resource on a spesific Screen resource and when not to.

## Situation [/api/situations/{id}]

- Parameters
    - id: `1` (number)

        An unique identifier of the resource.

- Attributes (object)
    - id: `1` (number)

        An unique identifier of the resource.

    - condition (string, optional)

        Evaluable condition in JSON format.

        - Default: `false`

    - changingTime: `0` (number, optional)

        Duration of "chaging to x" statuses. Used when change of stable status
        can be foreseen.

        - Default: `0`

    - status (enum[string])
        - `true`
        - `false`
        - `changing to true`
        - `changing to false`

        Evaluated result of condition.

    - createdAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of creation in ISO format.

    - updatedAt: `2000-01-01T00:00:00.000Z` (string)

        Timestamp of latest update in ISO format.

### Retrieve a Situation [GET]

- Response 200 (application/json)
    - Attributes (Situation)

### Update a Situation [PUT]

- Request (application/json)
    - Attributes (object)
        - condition (string, optional)

            Evaluable condition string in JSON format.

        - changingTime (number, optional)

            Duration of "chaging to x" statuses. Used when change of stable
            status can be foreseen.

- Response 200 (application/json)
    - Attributes (Situation)

### Delete a Situation [DELETE]

- Response 200 (application/json)

        {}

## Situations [/api/situations]

- Attributes (array[Situation])

### List Situations [GET]

- Response 200 (application/json)
    - Attributes (Situations)

### Create a Situation [POST]

- Response 201 (application/json)
    - Headers

            Location: /api/situations/1

    - Attributes (Situation)
