import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../services/jwt.service";


@Controller('Auth')
export class AuthController {
    constructor(private _jwtService: JwtService){

    }

    @Post('emitir')
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password,
    ){
        const enviarParamentros = usuario && password;

        if(enviarParamentros){
            if(usuario === 'adrianeguez' && password == '1234'){
                return {
                    jwt: this._jwtService.emitirToken({usuario: usuario})
                };
            }else{
                throw new BadRequestException({
                    mensaje: 'Credenciales invalidas'
                });
            }
        }else{
            throw new BadRequestException({
                mensaje: 'Credenciales validas'
            });
        }
    }

    @Post('verificarSync')
    verificarTokenSync(@Body('jwt') jwt){
        const enviaParametros = jwt;
        if(enviaParametros){
            const tokenValido = this._jwtService.verificarTokenSync(jwt);
            if(tokenValido){
                return {mensaje: 'Ok'}
            }else{
                throw new BadRequestException({mensaje: 'Token Invalido'})
            }
        }else{
            throw new BadRequestException({mensaje: 'No envia parametros'})
        }
    }

    @Post('verificarAsync')
    verificarTokenAsync(@Body('jwt') jwt){
        const enviaParametros = jwt;
        if(enviaParametros){
            this._jwtService.verificarTokenAsync(
                jwt,
                (error, datos)=>{
                    if(error){
                        throw new BadRequestException({
                            mensaje: 'Tojen invalidao',
                            error: error
                        });

                    }else{

                        return {mensaje: 'Ok'};
                    }
                }
            )
        }else{
            throw new BadRequestException({mensaje: 'No envia parametros'})
        }
    }
}