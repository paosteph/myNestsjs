import {Component} from "@nestjs/common";

@Component()
export class UsuarioService {
    arregloUsuario: Usuario[] = [];

    agregarUsuario(usuario: Usuario){
        this.arregloUsuario.push(usuario);
        return this.arregloUsuario;
    }

    borrarUsuario(usuario: Usuario){
        const indice = this.arregloUsuario.findIndex((usuarioObjeto) => usuarioObjeto === usuario);
        this.arregloUsuario.slice(indice, 1); //desde q num, num objetos a borrarse
        return this.arregloUsuario;
    }
}

export class Usuario {
    constructor(public nombre: string, public apellido: string, public edad: number){

    }
}