// const { spawn } = require('child_process');

// // Example: Spawning the 'ls' command
// const child = spawn('ls', ['-lh', '/usr']);

// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

const os = require("os")
const cluster = require('cluster');
const http = require('http');// Get the number of CPU cores (adjustable if needed)

const numCPUs = os.cpus().length; 
console.log(numCPUs)

if (cluster.isMaster) {
  // Master process logic
  console.log(`Master process is running with PID: ${process.pid}`);
  
  // Create 3 child processes (workers)
  for (let i = 0; i < 3; i++) {
    cluster.fork(); // Fork a new child process
  }

  // Handle the death of worker processes
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
  
} else {
  // Worker process logic
  console.log(`Worker ${process.pid} is running`);
  
  // Simulating 4 different tasks (run in parallel using child processes)
  const tasks = [
    () => console.log(`Task 1 is running in worker ${process.pid}`),
    () => console.log(`Task 2 is running in worker ${process.pid}`),
    () => console.log(`Task 3 is running in worker ${process.pid}`),
    () => console.log(`Task 4 is running in worker ${process.pid}`)
  ];

  // Execute tasks simultaneously (parallel)
  tasks.forEach(task => task());
  
  // Create a simple HTTP server to demonstrate worker's functionality
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Worker ${process.pid} handled the request`);
  }).listen(8000);
}
