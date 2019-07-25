let localConfig = {
    hostname:'0.0.0.0',
    port: process.env.PORT || 8000,
    secret : 'restapisecret',
  };
  
  module.exports = localConfig;