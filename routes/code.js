const express = require('express');
const axios = require('axios');
const router = express.Router();

var request = require('request');

router.post('/code', (req, res) => {
  //   res.send(req.body);
  const data = {
    ...req.body,
    // clientId: 'ea736c0edffc53ecad54581e3a22e27b',
    // clientSecret:
    //   '10f9b9f228599f46347319df937b48e11eeb11114a376f51234beda05c4e6cd6',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  //   res.send(data);

  request(
    {
      url: 'https://api.jdoodle.com/v1/execute',
      method: 'POST',
      json: data,
    },
    function (error, response, body) {
      //   console.log('error:', error);
      //   console.log('statusCode:', response && response.statusCode);
      //   console.log('body:', body);
      res.send(body);
    }
  );
});

module.exports = router;
