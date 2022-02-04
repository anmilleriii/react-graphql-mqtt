// @ts-nocheck

/**
 * MQTT client (only subscriber for now).
 *
 * @see https://www.emqx.com/en/blog/connect-to-mqtt-broker-with-websocket
 */
// import mqtt from "mqtt";

// @ts-ignore
const mqtt = window.mqtt;

/**
 * Browser MUST connect to MQTT over WebSocket. Node.js CAN connect over WS OR MQTT directly.
 *
 * So broker endpoint for node directly would be:
 *
 * Direct - mqtt://host:1883
 * WebSocket - ws://host:1883
 * GraphQL? - https://gql_server_host:?
 *
 * Local EMQX - ws://localhost:8083
 * AWS EMQX - ws://emqx_ip:8083
 *
 * @todo env
 */

const topics = {
  subscribe: {
    deviceHeartbeat: "sample-organization/broker/clients/device-0/status",
    deviceData: "sample-organization/device-0/gps-position",
  },
  publish: {},
};

/**
 *
 */
function createSubscription(): void {
  //   const brokerEndpoint = "wss://13.58.87.104:8083/mqtt";
  const brokerEndpoint = "ws://13.58.87.104:8083/mqtt";
  //  const brokerEndpoint = "ws://broker.emqx.io:8083/mqtt";

  /**
   * Creat subscriber.
   */
  const options = {
    keepalive: 60,
    clientId: "ui-0",
    //     clientId: "asdfkjhiaweuhdh389wehdc3298wehcuikj3hwef98uoh32qwsic",
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
  };
  const client = mqtt.connect(brokerEndpoint, options);

  /**
   * Data received
   */
  let data;

  /**
   * Subscribe on connection.
   */
  client.on("connect", () => {
    console.log(`Connected to ${brokerEndpoint}`);
    /**
     * Create intial subscription. Can pass specific error handler callback, but handling happens
     * elsewhere. QoS Fire and forget
     */
    //  client.subscribe("TEST_TOPIC", { qos: 0 }, (error) => {

    Object.entries(topics.subscribe).forEach((topic) => {
      client.subscribe(topic[1], { qos: 0 }, (error) => {
        console.log(
          "Subscribing, if failed to subscribe there will be an error below."
        );
        error && console.error(error);
      });
    });

    //     })
    //     client.subscribe(topics.subscribe.deviceHeartbeat, { qos: 0 }, (error) => {
    //       console.log(
    //         "Subscribing, if failed to subscribe there will be an error below."
    //       );
    //       error && console.error(error);
    //     });

    //     /**
    //      * "data" topic subscription
    //      * @todo iterate
    //      */
    //     client.subscribe(deviceData, { qos: 0 }, (error) => {
    //       console.log(
    //         "Subscribing, if failed to subscribe there will be an error below."
    //       );
    //       error && console.error(error);
    //     });
  });

  /**
   * Message switchboard
   */
  client.on("message", (topic, message, packet) => {
    console.log(
      "Received Message: " + message.toString() + "\nOn topic: " + topic
    );
  });

  /**
   * Error
   */
  client.on("error", (err) => {
    console.log("Connection error: ", err);
    client.end();
  });

  /**
   * Reconnection
   */
  client.on("reconnect", () => {
    console.log("Reconnecting...");
  });

  // <html>
  //      <body>
  //      </body>
  // </html>

  // /**
  //  * Create element on page to show status.
  //  */
  // const element = document.createElement("div");
  // element.innerHTML = `Data is: ${data}`;
  // document.body.appendChild(element);
}

export { createSubscription };

// /**
//  * Create element on page to show status.
//  */
// const element = document.createElement("p")
// element.innerHTML = `Data is: ${data}`
// document.body.appendChild(element)
