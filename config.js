module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb+srv://cluster0-sluke.mongodb.net/test?retryWrites=true',
  auth: {
      user: process.env.USERDB || 'janoguerab',
      password: process.env.PASSDB || '@dm1NM4ron7'
    },
  SECRET_TOKEN: 'miclavedetokens'
};
