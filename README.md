# Nutrition API

A comprehensive Nutrition API built with Node.js and MongoDB, designed to provide nutritional information for various foods.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Nutrition API is designed to help developers integrate nutritional information into their applications. It provides data on various foods, including their caloric content, macronutrients, and micronutrients.

## Features

- Get nutritional information for different foods
- Add new food items to the database
- Update existing food items
- Delete food items

## Installation

To get started with the Nutrition API, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/nutrition-api.git
    cd nutrition-api
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up your environment variables:

    Create a `.env` file in the root directory of your project and add the following variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the server:

    ```sh
    npm start
    ```

    The server will start on `http://localhost:5000`.

## Usage

You can use the Nutrition API to fetch, add, update, and delete nutritional information for various foods. Below are the available endpoints and their usage.

## Endpoints

### Get All Foods

- **URL:** `/api/foods`
- **Method:** `GET`
- **Description:** Retrieves a list of all foods in the database.

### Get Food by ID

- **URL:** `/api/foods/:id`
- **Method:** `GET`
- **Description:** Retrieves the nutritional information for a specific food item by its ID.

### Add a New Food

- **URL:** `/api/foods`
- **Method:** `POST`
- **Description:** Adds a new food item to the database.
- **Request Body:**
    ```json
    {
      "name": "Apple",
      "calories": 95,
      "protein": 0.5,
      "carbohydrates": 25,
      "fat": 0.3,
      "fiber": 4.4
    }
    ```

### Update a Food

- **URL:** `/api/foods/:id`
- **Method:** `PUT`
- **Description:** Updates the nutritional information of an existing food item by its ID.
- **Request Body:** (Include the fields you want to update)
    ```json
    {
      "name": "Green Apple",
      "calories": 80
    }
    ```

### Delete a Food

- **URL:** `/api/foods/:id`
- **Method:** `DELETE`
- **Description:** Deletes a food item from the database by its ID.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- **Name:** Safu Mulatu
- **Email:** safumulatu9@gmail.com
- **GitHub:** https://github.com/safumulatu

