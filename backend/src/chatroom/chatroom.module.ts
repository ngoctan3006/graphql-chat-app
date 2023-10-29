import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChatroomResolver } from './chatroom.resolver';
import { ChatroomService } from './chatroom.service';

@Module({
  providers: [ChatroomService, ChatroomResolver, PrismaService],
})
export class ChatroomModule {}
