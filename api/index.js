const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const {preload} = require('./src/Components/Loader')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('listening at ' + PORT); // eslint-disable-line no-console
  });
});
Diet.findAll().then(e => preload(e))

//loader DIETS
// const serverUp = async () => {
//   await conn.sync({ force: false })
//     console.log('DB connected')
//   await Diet.findAll().then(e => preload(e))
//   await  server.listen(process.env.PORT, () => {
//     console.log('listening at 3001'); 
//   });
// }

// serverUp();