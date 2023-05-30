const axios = require('axios');

axios.get('https://www.topuniversities.com/rankings/endpoint?nid=3846240&page=0&items_per_page=5000&tab=&region=&countries=&cities=&search=&star=&sort_by=&order_by=')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  