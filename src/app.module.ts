import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient as NewPrismaClient } from '../new-prisma-client';
import { PrismaClient as OldPrismaClient } from '../old-prisma-client';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NewPrismaClient, OldPrismaClient],
})
export class AppModule {}
