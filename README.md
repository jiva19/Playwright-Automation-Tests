-Project Overview: Angular E2E Testing with Playwright
This repository serves as a specialized testing suite for a custom Angular Frontend. The primary goal of this project was to move away from legacy tools like Selenium and embrace the "Auto-wait," "Network Mocking," and "Multi-browser" capabilities of Playwright.

-Key Features & Learning Outcomes
Page Object Model (POM) Architecture: Used the POM pattern to create a LoginPage class. This abstracts the locators (getByTestId) and actions (loginUser) away from the test logic, ensuring that if the UI changes, I only need to update the code in one place.

API Mocking & Interception: Unlike Selenium, which requires a real backend or complex proxying, I used Playwright's page.route to intercept network calls. This allowed me to simulate a 500 Internal Server Error to test how the UI handles API failures without needing a real server.

Eliminating "Flakiness": Leveraged Playwright's Auto-waiting feature. I no longer had to manually write sleep() or waitForElement() commands; Playwright automatically waits for elements to be actionable before interacting with them.

Cross-Browser & Multi-Device: Configured the project to run tests across Chromium, Firefox, and Webkit (Safari) simultaneously, a process that is natively integrated into Playwright’s runner.

-Test Suite Details
The current suite covers three critical authentication flows:

Successful Login: Verifies navigation and visibility of the welcome message.

Invalid Credentials: Asserts that the correct error message ("Invalid credentials") appears on a 401/Unauthorized scenario.

Server Failure (Mocked): Uses a 500-error mock to ensure the frontend displays a "try later" safety message.
