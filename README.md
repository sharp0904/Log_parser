# AICPA Tech Challenges

A simple application to parse web server logs and output statistics for:
- The most visited pages.
- Pages with the most unique views.

## Features
- **Total Page Views**: Calculates the total number of visits for each page.
- **Unique Page Views**: Calculates the number of unique visitors (based on IP addresses) for each page.

---

## Requirements
- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js)

---

## Installation

1. Clone the repository or create a new directory for your project:
   ```bash
   git clone https://github.com/sharp0904/Log_parser
2. Initialize a Node.js project and install dependencies
   ```bash
   npm install
---
## Usage

### Run the Application
1.  To execute the log parser and process the web.log file run:
    ```bash
    npm start
2. The output will look something like this:
    ```bash
    Most Page Views:
    /contact 7 visits
    /products/1 4 visits
    /index 1 visits
    /about 1 visits

    Most Unique Page Views:
    /contact 4 unique views
    /products/1 2 unique views
    /index 1 unique views
    /about 1 unique views

### Run the Application
1. To verify the functionality of the application, run the tests:
    ```bash
    npm test
2. Example test output:
    ```bash
     PASS  ./log_parser.test.js
    ✓ Most Page Views are calculated correctly (3 ms)
    ✓ Most Unique Page Views are calculated correctly (1 ms)

    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        0.25 s
    Ran all test suites.
---
## How it works
1. The log_parser.js script reads the log file and parse each line.
2. It calculates:
    - The total number of visits for each page.
    - The number of unique visitors for each page(based on IPs).
3. Outputs the pages scored by total views and unique views.

