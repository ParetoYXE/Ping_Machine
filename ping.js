const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const readline = require('readline');


// Endpoint URL to ping
var endpointUrl = '';

// JSON payload
var payload = {
    'attribute':''
};

// Function to ping the endpoint with the JSON payload
const pingEndpoint = async () => {
    try {
        const response = await fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log(`Ping successful at ${new Date().toISOString()}`);
    } catch (error) {
        console.error(`Error pinging endpoint: ${error.message}`);
    }
};






const r1 = readline.createInterface({

        input:process.stdin,
        output:process.stdout

});

r1.question('Enter the URL you wish to ping: ', (url=>{
    console.log("Ping URL: ", url);
    endpointUrl = url
    r1.question ('Enter the frequency of the ping rate. (ms): ', (ping_frequency=>{
        console.log("Ping Frequency: ", ping_frequency)
        r1.close()
        setInterval(pingEndpoint, parseInt(ping_frequency));
    }))
}))
