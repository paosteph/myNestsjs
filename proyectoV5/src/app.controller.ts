import {Get, Controller, Post, Body, UseGuards, ReflectMetadata} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {JwtValidoGuard} from "./guards/jwt-validate.guard";
import {AppService} from "./app.service";

const fs = require('fs');
let contador = 0;
@Controller()
@UseGuards(JwtValidoGuard)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @ReflectMetadata('metodoAsegurado', false)
    // root() {
    //     console.log('Entro al metodo');
    //     contador++;
    //     let datosArchivo;
    //     let html = fs.readFileSync(
    //         __dirname + '/html/Index.html',
    //         'utf8'
    //     );
    //     html = html.replace('{{variable}}',contador);
    //     return html; // contenido o un error

    root(): string {
        return this.appService.root();
    }

    @Post('crear')
    @ReflectMetadata('metodoAsegurado', true)
    crear(@Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario){
        console.log('Usuario correcto');
        return usuario;
    }
}
