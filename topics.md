MQTT topics

direct topics subscriptions, no rules engine/republishing
topics

https://docs.aws.amazon.com/whitepapers/latest/designing-mqtt-topics-aws-iot-core/mqtt-design-best-practices.html

1 device -> ui heartbeat

## TOPIC (subscription)

### topic name

dt/<application>/<context>/<thing-name>/<dt-type>

platform/organization/device|ui/...
sample-platform/organization-0/device-0/gps-position
sample-platform/organization-0/device-0/heartbeat
sample-platform/organization-0/ui-0/heartbeat TO who?

platform - tech platform in use
organization - organization id
device - id of device publishing

### payload

..

## ACTION

### Request

action/platform/organization/device/req-type
action/sample-platform/organization-0/device-0/shutdown

### Response

action/platform/organization/device/response-type
action/sample-platform/organization-0/device-0/shutdown

(i.e., same mostly, res may be different)

## Summary of topics/payloads

UI logic

1. is the device heartbeat counter not stale?
2. did i receive a response from the cmd?
3. did i receive subscription from data topic?

Device logic

1. is the ui heartbeat counter not stale (need passing ui off logic etc)
2. did i receive a command?
3. did i publish data topic?

Broker

0 logic now

```

UI

1 ui heartbeat
dt/sample-platform/organization-0/device-0/heartbeat
{
    count: 3435,
    timestamp: "2022-07-02 07:37:14"
}

4 ui action request
cmd/sample-platform/organization-0/ui-0/shutdown
{
    targetId: "device-0",
    timestamp: "2022-07-02 07:37:14"
}


DEVICE

2 device heartbeat
dt/sample-platform/organization-0/device-0/heartbeat
{
    count: 3435,
    timestamp: "2022-07-02 07:37:14"
}

3 device data
dt/sample-platform/organization-0/device-0/gps-position
{
    coordinates: [125.6, 10.1]
    timestamp: "2022-07-02 07:37:14"
}

5 device action response
cmd/sample-platform/organization-0/device-0/shutdown
{
    success: true,
    timestamp: "2022-07-02 07:37:14"
}
```

todo many to one etc.

dt/<application>/<context>/<thing-name>/<dt-type>

UI to device is many to many

so subscription in ui needs to be

sample-platform/organization-0/\* (any device)/heartbeat

destination-id: Identifies the destination device or application for this message. By including the destination-id, the target device can subscribe to its own set of command topics and receive any command requests.

```'



message
    topic
    payload
        timestamp
```
