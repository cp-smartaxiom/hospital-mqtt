const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883", {
  username: "mqttuser",
  password: "   "
});

const topics = [
  "sa/qstat/qs3490EAB52026/monitoring/vitals",
  "sa/qstat/qs3490EAB52026/monitoring/vitals/spo2",
  "sa/qstat/qs3490EAB52026/monitoring/vitals/skin_temperature",
  "sa/qstat/qs3490EAB52026/monitoring/activity",
  "sa/qstat/qs3490EAB52026/monitoring/environment",
  "sa/qstat/qs3490EAB52026/monitoring/alert",
  "sa/qstat/+/monitoring/#"
];

client.on("connect", () => {
  console.log("Subscriber connected to MQTT broker");

  client.subscribe(topics, (error) => {
    if (error) {
      console.error("Subscribe error:", error);
      return;
    }

    console.log("Subscribed to topics:");
    topics.forEach((topic) => {
      console.log(topic);
    });
  });
});

client.on("message", (topic, message) => {
  console.log("Received message:");
  console.log("Topic:", topic);
  console.log("Data:", message.toString());
});

client.on("error", (error) => {
  console.error("MQTT Error:", error);
});