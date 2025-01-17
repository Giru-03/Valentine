# Valentine
Application for Valentine

This is a simple web application for Valentine's Day. It includes an interactive webpage where users can respond to a Valentine's Day proposal.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that displays the Valentine's Day proposal.
- `i.html`: A secondary HTML file that displays a thank you message.
- `script.js`: The JavaScript file that handles the interaction logic for the buttons on the `index.html` page.
- `README.md`: This file, which provides information about the project.

## Files

### index.html

This file contains the main structure of the Valentine's Day proposal page. It includes animations and styles to make the page visually appealing. Users can click "YES" or "NO" buttons to respond to the proposal.

![Index Page](./Screenshot%202025-01-17%20152946.png)

### i.html

This file contains a thank you message that is displayed when the user clicks the "YES" button on the `index.html` page.

![Thank You Page](./Screenshot%202025-01-17%20153004.png)

### script.js

This file contains the JavaScript code that handles the interaction logic for the buttons on the `index.html` page. It includes functions to handle the "YES" and "NO" button clicks.

## Usage

1. Open `index.html` in a web browser.
2. Click the "YES" or "NO" button to respond to the proposal.
3. If "YES" is clicked, an email is sent using the SMTP.js service, and the user is redirected to the `i.html` page.

## Dependencies

- [SMTP.js](https://smtpjs.com/): Used to send emails from the web application.

