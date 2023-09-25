import { PrismaCrudModule } from 'nestjs-prisma-crud';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    /**
     *  PrismaCrudModule registers the PrismaService provider globally.
     *  No need to provide it anywhere else!
     */
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    PostModule,
  ],
  // ...
})
export class AppModule { }
