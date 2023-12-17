# tm-user-directory

Round 1 Assignment: This React application serves as a user directory interface, enabling users to seamlessly navigate a list of users, explore their details and posts, and select a timezone to check the current time. The clock feature includes the ability to pause and resume.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Implementation](#implementation)

## Installation

Before you begin, make sure you have Node.js and npm installed.

Clone the repository:

```bash
git clone git@github.com:GururajChadaga/tm-user-directory.git
```

Navigate to the project directory:

```bash
cd tm-user-directory
```

Install dependencies:

```bash
npm install
```

## Usage

To start the development server, use the following command:

```bash
npm start
```

This will launch your application at http://localhost:1234 by default.

## Features

- **Skeleton Loaders:** Implemented to enhance user experience when data is being fetched from the APIs, or being computed.
- **Keyboard Accessibility:** Prioritized to improve overall user interaction.
- **Mobile Responsiveness:** Ensures optimal viewing across various devices.
- **Custom Data Fetch Hook:** Developed with built-in error handling for robust data retrieval.
- **Custom Modal Implementation:** Using React Portal

## Implementation

- **Routing:** react-router-dom
- **State Management:** Context API to share user data across all routes.
