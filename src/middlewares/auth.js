module.exports = (req, res, next)=>{
    const authHearder = req.headers.authorization;

    if(!authHearder){
        return res.status(401).send({error: "O token não foi informado"})
    }

    //Validando token
    const parts = authHearder.split(' ');
    if(!parts.length === 2){
        return res.status(401).send({error: "Token invalido"})
    }
    const [scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error:"Token não possue Bearer, Token invalido"})
    }
}