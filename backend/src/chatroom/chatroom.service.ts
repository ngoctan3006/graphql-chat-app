import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatroomService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getChatroom(id: string) {
    return this.prisma.chatroom.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }
}
