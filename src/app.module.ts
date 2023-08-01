import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Token } from './userToken.entity';
import { Register } from './register/entities/register.entity';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path'; // New
import { JwtModule } from '@nestjs/jwt';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [Token ,Register],
      synchronize: false,
    }),
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'clientTAIL/dist'), // New
    }),
    TypeOrmModule.forFeature([Token]),
    JwtModule.register({
      secret:'secret',
      signOptions: {expiresIn:'1d'}
    }),
    RegisterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
