import { Module } from '@nestjs/common';
import { ChatroomResolver } from './chatroom.resolver';
import { ChatroomService } from './chatroom.service';

@Module({
  providers: [ChatroomService, ChatroomResolver],
})
export class ChatroomModule {}
