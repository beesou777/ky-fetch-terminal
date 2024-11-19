# **Ky Fetch() Terminal**

An interactive terminal application for making API requests using the [Ky](https://github.com/sindresorhus/ky) library. This CLI tool allows you to perform HTTP methods like `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, and more, directly from your terminal.

## **Features**
- Interactive terminal interface.
- Support for common HTTP methods:
  - `GET`
  - `POST`
  - `PUT`
  - `PATCH`
  - `DELETE`
  - `HEAD`
- Command to clear the terminal (`clear`).
- Easy-to-use help menu (`help`).
- Configurable API base URL with timeouts.
- Extensible for additional commands.

---

## **Installation**

### Clone the Repository

```bash
git clone https://github.com/beesou777/ky-fetch-terminal.git
cd ky-fetch-terminal
```

### Install Dependencies

```bash
npm install
```

---

## **Usage**

### Run the Terminal

```bash
npm run start
```

You’ll see the welcome message:

```
Welcome to the KY API Terminal!
Type "help" for a list of available commands.
KY-CLI>
```

---

### **Available Commands**

| Command                         | Description                                                                                   |
|---------------------------------|-----------------------------------------------------------------------------------------------|
| `get <endpoint>`                | Fetch data from the server (e.g., `get todos/1`).                                             |
| `post <endpoint> <body>`        | Create a new resource. `body` should be a JSON string (e.g., `post posts '{"title":"foo"}`).   |
| `put <endpoint> <body>`         | Replace a resource. `body` should be a JSON string (e.g., `put posts/1 '{"userId":1,"title":"bar"}`). |
| `patch <endpoint> <body>`       | Partially update a resource. `body` should be a JSON string (e.g., `patch posts/1 '{"title":"baz"}'`). |
| `delete <endpoint>`             | Delete a resource from the server (e.g., `delete posts/1`).                                   |
| `head <endpoint>`               | Fetch only headers and status of a resource (e.g., `head todos/1`).                          |
| `clear`                         | Clear the terminal screen.                                                                   |
| `help`                          | Display a help menu with all available commands.                                             |
| `exit`                          | Exit the terminal.                                                                           |

---

### **Examples**

#### **1. Fetch Data (GET)**

```bash
KY-CLI> get todos/1
```

Output:
```json
GET Response: {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

#### **2. Create a Resource (POST)**

```bash
KY-CLI> post posts {"title":"foo","body":"bar","userId":1}
```

Output:
```json
POST Response: {
  "id": 101,
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

#### **2. Create a Resource (PUT)**

```bash
KY-CLI> put posts/1 {"title":"foo","body":"bar","userId":1} 
```

Output:
```json
PUT Response: {
  "title": "foo",
  "body": "bar",
  "userId": 1,
  "id": 1
}
```

#### **3. Clear the Terminal**

```bash
KY-CLI> clear
```

Output:
```
Screen cleared! Type "help" for available commands.
```

---

## **Configuration**

You can modify the base URL, timeout, or headers in the `index.js` file:

```javascript
const apiClient = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

- **`prefixUrl`**: The base URL for all API requests.
- **`timeout`**: The maximum time to wait for a response (in milliseconds).
- **`headers`**: Default headers sent with every request.

---

## **Contributing**

We welcome contributions to improve this tool! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---