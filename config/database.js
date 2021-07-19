module.exports =  ({
  "defaultConnection": 'default',
  "connections": {
    "default": {
      "connector": 'mongoose',
      "settings": {
        "database":"abarrote",
        uri: ('mongodb+srv://admin:12345@abarrote.sirs1.mongodb.net/abarrote?retryWrites=true&w=majority'),
      "srv":"yes",
      "srv":"true",
      "port":27017,
      "username":"admin",
      "password":"12345"
      },
      "options": {
       "ssl": "true"
      },
    },
  },
});