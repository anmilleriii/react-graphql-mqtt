/**
 * MQTT client (only subscriber for now)
 */
 import mqtt from 'mqtt'

 /**
  * @todo env
  */
 const brokerEndpoint = "mqtt://localhost:1338";

 /**
  * 
  */
 const subscriber = mqtt.connect(brokerEndpoint)
 
 /**
  * Publish on connection
  */
  subscriber.on("connect", () => {
    subscriber.publish("MOVED", JSON.stringify({
         /**
          * Shape of GrahpQL data.
          */
     }))
 })
