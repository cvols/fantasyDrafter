const https = require('https');

https
  .get('https://statsapi.web.nhl.com/api/v1/teams', resp => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
    });
  })
  .on('error', err => {
    console.log('Error: ' + err.message);
  });
