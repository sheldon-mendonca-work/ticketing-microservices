import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  stan.on("close", () => {
    console.log("Connection closed.");
    process.exit();
  });
  console.log("Subscriber Connected to nats streaming server");

  const options = stan.subscriptionOptions().setManualAckMode(true);

  const subscription = stan.subscribe(
    "ticket:created",
    "orders-service-queue-group",
    options
  );

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();
    if (typeof data === "string") {
      console.log(`Received event #${msg.getSequence()}, with data ${data}`);
    }

    msg.ack();
  });
});

process.on('SIGINT', ()=>stan.close());
process.on('SIGTERM', ()=>stan.close());