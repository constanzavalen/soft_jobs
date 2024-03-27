const validateParamsUSer = (req, res, next) => {
    const {user} = req.body;
    console.log(user);
    if (!user.email || !user.password || !user.rol || !user.lenguage) {
        console.log('usuario no validado');
        return res.status(400).json({error: 'el email, password, rol y lenguaje deben estar presentes'});
    }
    next();
};

export {validateParamsUSer};