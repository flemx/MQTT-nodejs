/**
 *   MQTT Subscriber
 *   @Damien_Fleminks
 *   27 April 2020
 */

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:3000');
const fetch = require('node-fetch');

//Topics
const weatherTopic = 'weather';
const roomTempTopic = 'roomTemp';



/** API KEY FROM weatherstack.com  API*/
const apiKey = '87ce046e154845fbe201a765cc646fc3';
let url = `http://api.weatherstack.com/current?access_key=${apiKey}?query=${city}`


/**
 * Call an external api using the API key to log the current weather information
 */
client.on('message', (topic, message)=>{

  console.log(`Topic ${topic} published`);

  // Get weather info from external weather API
  if(topic === weatherTopic){
    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${message.toString()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(`The Weather in ${data.rquest.query} is today ${data.current.weather_descriptions[0]} with a wind speed of ${data.current.wind_speed}\n`);
    });
  }
  //Log the  the room temperature
  else if(topic === roomTempTopic){
    let ramTemp = ( 18.5 + Math.random() * (0.8 - 0.4 + 0.4) + 0.1).toFixed(2);
    console.log(`The room temperature is currently: ${ramTemp}\n`);

  }

})


// Connect Subscriber
client.on('connect', ()=>{
    client.subscribe(weatherTopic);
})


