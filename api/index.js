const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const {preload} = require('./src/Components/Loader')

// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
//   server.listen(3001, () => {
//     console.log('listening at 3001'); // eslint-disable-line no-console
//   });
// });

//loader DIETS
const serverUp = async () => {
  await conn.sync({ force: false })
    console.log('DB connected')
  await Diet.findAll().then(e => preload(e))
  await  server.listen(3001, () => {
    console.log('listening at 3001'); 
  });
}

serverUp();