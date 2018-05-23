import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";

@Injectable()
export class UsuarioPipe implements PipeTransform{
    constructor(private readonly schema){}

    transform(valorEnBrutoDelRequest: any,
              metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata){
                //segundo los extras que se tengan en ese decorator del metodo
        //this.schema = USUARIO_SCHEMA;
        const { error } = Joi.validate(valorEnBrutoDelRequest, //objeto a validar
            this.schema);// un esquema

        if(error){
            //throw new BadRequestException(error);
            throw new PeticionInvalidaException(
                'Pet invalida',
                error,
                4
            );
        }
        return valorEnBrutoDelRequest;
    }


}