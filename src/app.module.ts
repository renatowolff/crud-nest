import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

// app.module é o módulo pai / módulo raiz. Se houver outros módulos, devem ser passados aqui no app.module

@Module({
  imports: [AuthModule, UserModule, BookmarkModule], // no imports deve estrar todos os modules "filhos" da app
  controllers: [AuthController, UserController],
  providers: [PrismaService, AuthService, UserService], // todo svc é um provider, nem todo provider é um svc necessariamente
})
export class AppModule {}
