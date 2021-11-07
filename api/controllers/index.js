const testingConnection = (req, res, next) => {
  if (req.query.artist) {
    return res.json({msg: `artist: ${req.query.artist}`});
  }
  next({status: '404', msg: 'route failed'})  
}

module.exports = {
  testingConnection,
}