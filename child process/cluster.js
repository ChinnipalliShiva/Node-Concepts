const cluster = require("cluster");
const os = require("os");

const numCPUs = os.cpus().length; // Number of CPU cores (forking 3 workers)
const i = 98;
const j = 2;

if (cluster.isMaster) {
  // Master process logic
  console.log(`Master process is running with PID: ${process.pid}`);

  // Fork 3 child processes (one for each operation)
  const worker1 = cluster.fork();
  const worker2 = cluster.fork();
  const worker3 = cluster.fork();

  // Send values to each worker
  worker1.send({ operation: "add", i, j });
  worker2.send({ operation: "subtract", i, j });
  worker3.send({ operation: "multiply", i, j });

  // Wait for workers to complete their operations and send results
  worker1.on("message", (result) => {
    console.log(`Worker 1 (Addition): ${result}`);
    worker1.kill();
  });
  worker2.on("message", (result) => {
    console.log(`Worker 2 (Subtraction): ${result}`);
    worker2.kill();
  });
  worker3.on("message", (result) => {
    console.log(`Worker 3 (Multiplication): ${result}`);
    worker3.kill();
  });

  // Handle worker death
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker process logic
  process.on("message", (data) => {
    const { operation, i, j } = data;
    let result;

    switch (operation) {
      case "add":
        result = i + j;
        break;
      case "subtract":
        result = i - j;
        break;
      case "multiply":
        result = i * j;
        break;
      case "divide":
        result = i / j;
        break;
      default:
        result = "Invalid operation";
    }
    process.send(result); // Send the result back to the master
  });
}
