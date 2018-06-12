import {Injectable} from "@nestjs/common";

const jwtPaquete:any = require('jsonwebtoken');
@Injectable()
export class JwtService {
    private readonly jwt = jwtPaquete;
    //deberia ser algo del
    private readonly secreto = 'El sol no quema tanto';
    private readonly opciones= {
        expiresIn: '30s'
    };

    emitirToken(payload:any){ //recibimos los datos, lo q sea q envien
        //usamos return porque estamos asyncrona
        return this.jwt.sign(
            payload,
            this.secreto,
            this.opciones
        );
    }

    verificarTokenSync(token: string): boolean{
        try {
            this.jwt.verify(token, this.secreto);
        }catch (e) {
            return false;
        }
    }

    verificarTokenAsync(token: String, callback){
        //callback: funcion q se ejecuta cuando se va a hacer algo y continuar
        this.jwt.verify(
            token,
            this.secreto,
            callback);
    }
}