const {
  User,
  Search
} = require('../../models/');

/**
 * Log data in DB to users and searches tables and user_search intermediate table
 */
const logDataToDB = async (ip, artist_name) => {
  try {
    let [user, created] = await User.findOrCreate({
      where: {
        ip
      }, defaults: {
        ip
      }
    });

    const search = await Search.create({
      artist_name,
      requested: new Date(),
    });

    user.addSearch(search);

    return 'Usuario creado con éxito!';
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  logDataToDB,
}