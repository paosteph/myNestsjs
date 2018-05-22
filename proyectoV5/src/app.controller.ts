import {Get, Controller, Post, Body} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";

const fs = require('fs');
let contador = 0;
@Controller()
export class AppController {
    @Get()
    root() {
        console.log('Entro al metodo');
        contador++;
        let datosArchivo;
        let html = fs.readFileSync(
            __dirname + '/html/Index.html',
            'utf8'
        );
        html = html.replace('{{variable}}',contador);
        return html; // contenido o un error
    }

    @Post('crear')
    crear(@Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario){
        console.log('Usuario correcto');
        return usuario;
    }
}
