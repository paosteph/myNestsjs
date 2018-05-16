import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'web',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([UsuarioEntity])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
//conexion to inge
//hostname: web2018gr2.mysql.database.azure.com
//username: profesor@web2018agr2