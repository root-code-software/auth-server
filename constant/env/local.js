let localConfig = {
    hostname:'localhost',
    port: process.env.PORT || 8000,
    secret : 'restapisecret',
  };
  
  module.exports = localConfig;