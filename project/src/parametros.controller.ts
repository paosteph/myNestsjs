import {Controller, Delete, Get, Post} from "@nestjs/common"
import {Body, Param, Res, Req, Query, Headers} from "@nestjs/common/utils/decorators/route-params.decorator";
import {Usuario} from "./usuario.service";

@Controller('Parametros')
export class ParametrosController{

    constructor(private _usuarioService,UsuarioService){

    }

    @Post('recuperar/:id')
    recuperarParametros(
        @Req() request,
        @Res() response,
        @Param() paramParams,
        @Query() queryParams,
        @Body() bodyParams,
    ){
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        }
    }

    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response,
        @Headers() headers
    ){
        const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            headers,
        };
        console.log(respuesta);
        //return response.send()
        return response.redirect(301, '/Pelicula/mostrarCartelera');
    }

    @Get('recuperarUsuario')
    recuperarUsuario(){
        return this._usuarioService.arregloUsuario
    }

    @Post('anadirUsuario')
    anadirUsuario(
        @Body() bodyParams
    ){
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);

        return this._usuarioService.agregarUsuario(usuario)
    }

    @Delete('borrarUsuario')
    borrarUsuario(
        @Body() bodyParams
    ){
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);

        return this._usuarioService.agregarUsuario(usuario)
    }
}