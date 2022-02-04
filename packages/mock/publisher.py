# This is the MQTT publisher using paho-mqtt
# See https://www.eclipse.org/paho/index.php?page=clients/python/index.php
# See https://www.eclipse.org/paho/index.php?page=clients/python/docs/index.php

import time
import json
import threading
import paho.mqtt.client as mqtt

timestamp = int(time.time())

# EMQX broker endpoint details
broker = {
    "host": "13.58.87.104",
    # "host": "localhost",
    
    "port": 1883,
    "keep_alive_duration": 60,
}

"""""
Define topic
"""""

# Topic name and data to publish to
topic = "sample-organization/device-0/gps-position"
data = [{
    "gps_coordinate": [
        12, 23
    ],
    "timestamp": timestamp
}]
payload = json.dumps(data)
qos = 0


# When the client receives a CONNACK response from EMQX broker.
# Result codes (rc) are 0 success, 0 < refused.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Set interval
    def set_interval(func, sec):
        def func_wrapper():
            set_interval(func, sec)
            func()
        t = threading.Timer(sec, func_wrapper)
        t.start()
        return t

    # Publisher wrapper
    def publish():
        print("Publishing " + topic)
        client.publish(topic, payload, qos)
        return

    # Publish message at interval
    set_interval(publish, 2)


# Create MQTT client
client_id = "device-0"
client = mqtt.Client(client_id)
client.on_connect = on_connect
print("Attempting to connect to " + broker["host"])
client.connect(broker["host"], broker["port"], broker["keep_alive_duration"])

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting. Other loop*() functions are available that give a
# threaded interface and a manual interface.
client.loop_forever()


# # The callback for when a PUBLISH message is received from the server.
# def on_message(client, userdata, msg):
#     print(msg.topic+" "+str(msg.payload))
# client.on_message = on_message
