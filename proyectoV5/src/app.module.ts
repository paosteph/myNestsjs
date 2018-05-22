import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'web2018agr2.mysql.database.azure.com',
            port: 3306,
            username: 'profesor@web2018agr2',
            password: 'Javascript1',
            database: 'web',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            ssl: true
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