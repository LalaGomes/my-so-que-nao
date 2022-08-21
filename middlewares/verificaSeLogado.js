function verificaSeLogado(req,res,next){
    if(req.session.usuario){
        next();
    } else {
        //Direcionar o visitante para uma pagina de login
        res.redirect('/create')
        return;
    }
}

module.exports = verificaSeLogado;