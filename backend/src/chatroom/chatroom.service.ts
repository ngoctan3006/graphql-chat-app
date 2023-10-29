import { BadRequestException, Injectable } from '@nestjs/common';
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

  async createChatroom(name: string, sub: number) {
    const existingChatroom = await this.prisma.chatroom.findFirst({
      where: {
        name,
      },
    });
    if (existingChatroom) {
      throw new BadRequestException({ name: 'Chatroom already exists' });
    }
    return this.prisma.chatroom.create({
      data: {
        name,
        users: {
          connect: {
            id: sub,
          },
        },
      },
    });
  }
}
