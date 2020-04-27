/**
 *   MQTT Publishers
 *   @Damien_Fleminks
 *   27 April 2020
 */

const mqtt = require('mqtt');
const publisher1 = mqtt.connect('mqtt://localhost:3000');
const publisher2 = mqtt.connect('mqtt://localhost:3000');
const weatherTopic = 'weather';
const roomTemp = 'roomTemp';



//Log information about the weather in  Amsterdam
publisher1.on('connect', ()=>{
    publisher1.publish(weatherTopic, 'Amsterdam')
})

//Log the room temperature
publisher1.on('connect', ()=>{
    publisher2.publish(roomTemp, '')
})