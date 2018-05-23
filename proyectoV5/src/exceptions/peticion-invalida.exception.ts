import {HttpException, HttpStatus} from "@nestjs/common";

export class PeticionInvalidaException extends HttpException{

    constructor(private _mensaje, private _detalle, private _nivelError){
        //dos parametros: lo que necesite devolver, mensaje u objeto y status code
        super(/*'Forbidden'*/
            {
                mensaje: _mensaje,
                detalle: _detalle,
                nivelError: _nivelError,
                status: HttpStatus.BAD_REQUEST
            }
            , HttpStatus.BAD_REQUEST);//FORBIDDEN);
    }

}