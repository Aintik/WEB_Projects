module.exports = (req, res, next) => {
  if (req.session.isTrue) next();
  else res.redirect('/');

  /* const token = req.headers['x-access-token'] || req.body.token || req.query.token;
  if (token) jwt.verify(token, 'Key', (err, data) => {
    if (err) res.redirect('/');
    else next();
  }); 
  else res.redirect('/'); */
}