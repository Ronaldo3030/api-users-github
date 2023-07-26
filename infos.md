# GitHub API Proxy

This project serves as an API that acts as a proxy for various GitHub endpoints, providing a seamless way to access GitHub user data. It includes both back-end and front-end components.

## Back-End

### Endpoints

1. **GET - /api/users?since={number}**
   - Returns a list of GitHub users and the link for the next page.

2. **GET - /api/users/:username/details**
   - Returns the details of a specific GitHub user.

3. **GET - /api/users/:username/repos**
   - Returns a list of all repositories owned by a particular user.

### Testing (Optional)

For those working on the full-stack role, comprehensive tests have been implemented to cover all endpoints in the application.

## Front-End

### User List Screen

A screen has been created to list all GitHub users. The screen displays the ID and Login of each user and handles pagination to manage large user lists efficiently. (If you are working on the front-end role, the GitHub endpoints will be consumed directly.)

### User Details Screen

Building upon the user list screen, a new screen has been added to display the detailed information of a specific user. The information displayed includes the user's ID, Login, Profile URL, and the date of login creation.

### Public Repositories Table

The details screen also features a table showcasing the public repositories of the selected user. The table includes the ID, name, and URL to access each repository.

---

Feel free to contribute, report issues, or provide feedback. Happy coding!

*Note: Replace [full-stack] and [back-end] tags with specific role labels if needed.*
