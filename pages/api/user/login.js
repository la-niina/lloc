var request = require('request');
var options = {
  'method': 'POST',
  'url': '{{url}}/user/login',
  'headers': {
    'No-Authentication': 'true'
  },
  body: '{\r\n    "email": "adelayman0000@gmail.com",\r\n    "password": "123456"\r\n}'
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
