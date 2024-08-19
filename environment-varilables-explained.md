# Understanding Environment Variables and the .env File

Imagine your team working on building an API with Python Flask or Fast API, and each developer uses a local database on their own computer during development. If you hardcode the database credentials and URL in your code, every team member must modify the file code to use their specific database, causing constant conflicts when pushing changes to GitHub. Here’s a simplified version of the problem:

```python
# main.py
from fastapi import FastAPI

app = FastAPI()

DATABASE_CREDENTIALS_URL = "postgresql://user:password@localhost/dbname"

@app.get("/")
def read_root():
    return {"Database URL": DATABASE_CREDENTIALS_URL}
```

Each developer would have their own version of `DATABASE_CREDENTIALS_URL`, leading to merge conflicts and a cluttered codebase. By using environment variables, you can externalize the configuration, allowing each developer to use their own settings without changing the shared code:

1. **Create a separate `.env` file**:
   ```dotenv
   DATABASE_CREDENTIALS_URL=postgresql://user:password@localhost/dbname
   ```

2. **Modify your code to load the environment variable**:
   ```python
   # main.py
   from fastapi import FastAPI
   from dotenv import load_dotenv
   import os

   load_dotenv()

   app = FastAPI()

   DATABASE_CREDENTIALS_URL = os.getenv("DATABASE_CREDENTIALS_URL")

   @app.get("/")
   def read_root():
       return {"Database URL": DATABASE_CREDENTIALS_URL}
   ```

Now, each team member can have their own `.env` file (ignored by Git and Github) with their specific database URL, and the codebase on GitHub remains clean and unified. This approach solves the problem of managing different configurations across team members and environments effectively.

## Why Use Environment Variables?

1. **Security**: Keep sensitive information like API keys and database passwords out of your codebase, reducing the risk of exposure.
2. **Flexibility**: Easily change configurations without modifying the code, making it simpler to switch between different environments.
3. **Portability**: Move applications across different systems or environments without changes to the codebase, enhancing portability.
4. **Ease of Management**: Centralize configuration settings, making them easier to manage and update.

#### Using Environment Variables in Your Projects

To manage environment variables in a structured way, we use a `.env` file. This file contains key-value pairs representing the environment variables.

##### Setting Up Environment Variables with pyenv and FastAPI

1. **Create a `.env` File**: In the root of your FastAPI project, create a `.env` file.
2. Make sure the .env file its ignored by Git by updating the .gitgnore file to include the `.env` file path.
2. **Add Variables**: Define your environment variables in the `.env` file.

   ```bash
   # .env file content
   DATABASE_CREDENTIALS_URL=postgresql://user:password@localhost/dbname
   SECRET_KEY=your_secret_key
   ```

3. **Load Environment Variables**: Use a package like `python-dotenv` to load these variables into your FastAPI application.

   ```python
   # main.py
   from fastapi import FastAPI
   from dotenv import load_dotenv
   import os

   load_dotenv()  # Load environment variables from .env file

   app = FastAPI()

   DATABASE_CREDENTIALS_URL = os.getenv("DATABASE_CREDENTIALS_URL")
   secret_key = os.getenv("SECRET_KEY")

   @app.get("/")
   def read_root():
       return {"Database URL": DATABASE_CREDENTIALS_URL, "Secret Key": secret_key}
   ```

##### Setting Up Environment Variables with Vite and React

1. **Create a `.env` File**: In the root of your Vite project, create a `.env` file.
2. **Add Variables**: Define your environment variables in the `.env` file. Note that Vite requires variables to be prefixed with `VITE_`.

   ```dotenv
   VITE_API_URL=https://api.example.com
   ```

3. **Access Variables in React**: Use these variables in your React application.

   ```javascript
   // src/App.jsx
   import React from 'react';

   function App() {
     const apiUrl = import.meta.env.VITE_API_URL;

     return (
       <div>
         <h1>API URL: {apiUrl}</h1>
       </div>
     );
   }

   export default App;
   ```

##### Example Files for Your Project

To help students get started, your project templates should include example files:

- **`.env.example`**: An example environment file that demonstrates the necessary variables.

  ```dotenv
  # .env.example
  DATABASE_CREDENTIALS_URL=postgresql://user:password@localhost/dbname
  SECRET_KEY=your_secret_key
  VITE_API_URL=https://api.example.com
  ```

- **`Pipfile`**: A file that specifies the Python packages and dependencies.

  ```toml
  [[source]]
  url = "https://pypi.org/simple"
  verify_ssl = true
  name = "pypi"

  [dev-packages]
  pytest = "*"

  [packages]
  fastapi = "*"
  uvicorn = "*"
  python-dotenv = "*"
  ```

#### Best Practices

1. **Do Not Commit .env Files**: Never commit your `.env` file to version control. Instead, commit a `.env.example` file to show the necessary variables without sensitive information.
2. **Use Secrets Management**: For production environments, consider using secret management tools like AWS Secrets Manager or Azure Key Vault.
3. **Document Your Environment Variables**: Clearly document what each environment variable is for, especially in your `.env.example` file.

By following these practices, students can effectively manage configurations in their projects, making their applications more secure, flexible, and maintainable.
