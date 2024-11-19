import { clear } from 'console';
import ky from 'ky';
import readline from 'readline';

// Create an instance of `ky` with a base URL
const bishwa = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define the available commands
const commands = {
  async get(endpoint) {
    try {
      const response = await bishwa.get(endpoint).json();
      console.log('GET Response:', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('GET Error:', error.message);
    }
  },

  async post(endpoint, body) {
    try {
      const response = await bishwa.post(endpoint, { json: JSON.parse(body) }).json();
      console.log('POST Response:', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('POST Error:', error.message);
    }
  },

  async put(endpoint, body) {
    try {
      const response = await bishwa.put(endpoint, { json: JSON.parse(body) }).json();
      console.log('PUT Response:', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('PUT Error:', error.message);
    }
  },

  async patch(endpoint, body) {
    try {
      const response = await bishwa.patch(endpoint, { json: JSON.parse(body) }).json();
      console.log('PATCH Response:', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('PATCH Error:', error.message);
    }
  },

  async delete(endpoint) {
    try {
      const response = await bishwa.delete(endpoint).json();
      console.log('DELETE Response:', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('DELETE Error:', error.message);
    }
  },

  async head(endpoint) {
    try {
      const response = await bishwa.head(endpoint);
      console.log('HEAD Status:', response.status);
      console.log('HEAD Headers:', JSON.stringify(Object.fromEntries(response.headers), null, 2));
    } catch (error) {
      console.error('HEAD Error:', error.message);
    }
  },
  clear() {
    clear();
  },
  help() {
    console.log(`
  Available Commands:
  get <endpoint>           Fetch data from the server (e.g., get todos/1).
  post <endpoint> <body>   Create a new resource (body should be a JSON string).
  put <endpoint> <body>    Replace a resource (body should be a JSON string).
  patch <endpoint> <body>  Partially update a resource (body should be a JSON string).
  delete <endpoint>        Delete a resource from the server.
  head <endpoint>          Fetch only headers and status of a resource.
  exit                     Exit the terminal.
  help                     Display this help message.
    `);
  },

  exit() {
    console.log('Exiting the terminal. Goodbye!');
    process.exit(0);
  },
};

// Create a REPL (Read-Eval-Print Loop) for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'KY-CLI> ',
});

console.log('Welcome to the KY API Terminal!');
console.log('Type "help" for a list of available commands.');
rl.prompt();

// Handle user input
rl.on('line', async (line) => {
  const args = line.trim().split(' ');
  const command = args.shift();

  if (commands[command]) {
    try {
      await commands[command](...args);
    } catch (error) {
      console.error(`Error while executing "${command}":`, error.message);
    }
  } else {
    console.error(`Unknown command: "${command}". Type "help" for a list of commands.`);
  }

  rl.prompt();
}).on('close', () => {
  console.log('Exiting the terminal. Goodbye!');
  process.exit(0);
});
