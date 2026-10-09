const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883", {
  username: "mqttuser",
  password: "   "
});

const topic = "hospital/temperature";
const topic1 = "hospital/name";

//client.publish(topic, "CP");


client.on("connect", () => {
  console.log("Publisher connected to MQTT broker");

  setInterval(() => {
    const temperature = (Math.random() * 10 + 20).toFixed(2);

    const message = JSON.stringify({
      deviceId: "Hospital-001",
      temperature: Number(temperature),
      unit: "C",
      timestamp: new Date().toISOString()
    });

    const message1 = JSON.stringify({
      message: "CP",
      timestamp: new Date().toISOString()
    });


    client.publish(topic, message);
    client.publish(topic1, message1);
    console.log("Published:", message);
  }, 3000);
});







client.on("error", (error) => {
  console.error("MQTT Error:", error);
});