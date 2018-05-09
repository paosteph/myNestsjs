import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from  "./parametros.controller";

@Module({
    imports: [], // Importar otros modulos
    controllers: [
        AppController,
        AppPeliculaController,
        ParametrosController
    ],
    components: [], // Componentes
})
export class AppModule {}