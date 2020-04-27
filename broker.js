/**
 *   MQTT Broker
 *   @Damien_Fleminks
 *   27 April 2020
 */

const mosca = require('mosca')

const settings = {port: 3000}

const broker = new mosca.Server(settings);

broker.on('ready', ()=>{
    console.log('Broker is ready!');
});

