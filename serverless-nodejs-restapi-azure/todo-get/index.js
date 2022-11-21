const todoService = require('../services/todo');
const axios = require('axios');

module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');
    axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  }).catch(function (error) {
    // handle error
    console.log('object :>> ', error);
  })

    context.res = {
        status: 200,
        body: todoService.getTodos(context)
    };
};