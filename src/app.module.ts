import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
  providers: [PrismaService],
})
export class AppModule {}
