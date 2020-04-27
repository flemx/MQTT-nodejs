/** MQTT Subscriber  */

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:3000');
const topic = 'TESTTOPIC';


client.on('message', (topic, message)=>{
    message = message.toString();
    console.log(message);
})

client.on('connect', ()=>{
    client.subscribe(topic);
})