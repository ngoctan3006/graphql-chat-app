import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { TokenService } from './token/token.service';
import { UserModule } from './user/user.module';

const pubSub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    retryStrategy: (times) => {
      return Math.min(times * 50, 2000);
    },
  },
});

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, AppModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async (
        configService: ConfigService,
        tokenService: TokenService,
      ) => ({
        installSubscriptionHandlers: true,
        playground: true,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        subscriptions: {
          'graphql-ws': true,
          'subscriptions-transport-ws': true,
        },
        onConnect: (connectionParams: any) => {
          const token = tokenService.extractToken(connectionParams);
          if (!token) {
            throw new Error('Token not provided');
          }

          const user = tokenService.validateToken(token);
          if (!user) {
            throw new Error('Invalid token');
          }
          return { user };
        },
      }),
    }),
  ],
  controllers: [],
  providers: [TokenService],
})
export class AppModule {}
