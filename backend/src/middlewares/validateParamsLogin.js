
const validParameters = (req, res, next) => {
    const {user} = req.body;
    if(!user.email || !user.password) {
      return res.status(400).json({error: 'Falta el email y/o password'});
    }
    next();
};

export {validParameters};