let localConfig = {
    hostname:'http://www.cookinat.com',
    port: process.env.PORT || 8000,
    secret : 'restapisecret',
  };
  
  module.exports = localConfig;