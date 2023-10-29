import { UseFilters, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { UserService } from 'src/user/user.service';
import { ChatroomService } from './chatroom.service';
import { Chatroom } from './chatroom.types';

@Resolver()
export class ChatroomResolver {
  constructor(
    private readonly chatroomService: ChatroomService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [Chatroom])
  async getChatroomsForUser(@Args('userId') userId: number) {
    return this.chatroomService.getChatroomsForUser(userId);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Chatroom)
  async createChatroom(
    @Args('name') name: string,
    @Context() context: { req: Request },
  ) {
    return this.chatroomService.createChatroom(name, context.req.user.sub);
  }

  @Mutation(() => Chatroom)
  async addUsersToChatroom(
    @Args('chatroomId') chatroomId: number,
    @Args('userIds', { type: () => [Number] }) userIds: number[],
  ) {
    return this.chatroomService.addUsersToChatroom(chatroomId, userIds);
  }
}
