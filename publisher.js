/** MQTT Publisher  */

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:3000');
const topic = 'TESTTOPIC';
let message = 'Hello World';

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Mess send', message)
    }, 3000)
})