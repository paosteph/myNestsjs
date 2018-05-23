import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";

@Injectable()
export class UsuarioGuard implements CanActivate{

    constructor(private reflector: Reflector){

    }

    canActivate(context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {

        const request = context.switchToHttp().getRequest(); //accedemos al request/cabec/cookies
        console.log('Req', request);
        console.log('Cab', request.headers);

        const reflectorNombreDAto = this.reflector.get(
            'nombreDato',
            context.getHandler()
        );
        const reflectorPermisos = this.reflector.get(
            'permiso',
            context.getHandler()
        );
        const reflectorValidacion = this.reflector.get(
            'necesitaValidacion',
            context.getHandler()
        );
        console.log('reflectorPermisos',reflectorPermisos);
        console.log('reflectorNombreDAto', reflectorNombreDAto);

        if(reflectorValidacion){
            // validar
            //Tomar el valor de la cookie de sesion oo cabecera
            //#ID
            //Buscamos eb la base de roles del usuario
            //admin
            //sacamosm reflector roles 'admin'
            /*if(tieneRoles){
                return true; //da acceso
            }else{
                return false; //forbidden
            }*/
        } else {
            // no validacion
            return true;
        }

        //return false;
    }

}