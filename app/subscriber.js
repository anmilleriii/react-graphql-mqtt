/**
 * MQTT client (only subscriber for now).
 */
import mqtt from 'mqtt'

/**
 * @todo env
 */
const brokerEndpoint = "mqtt://localhost:1338";

/**
 * Creat subscriber.
 */
const subscriber = mqtt.connect(brokerEndpoint)

/**
 * Subscribe on connection.
 */
subscriber.on("connect", () => {
     /**
      * asdf
      * Fire and forget
      */
     subscriber.subscribe("TEST_TOPIC", { qos: 0 })
})
