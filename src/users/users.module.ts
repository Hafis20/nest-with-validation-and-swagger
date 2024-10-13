import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { AuthMiddleware } from './middleware/auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(UsersController) // For whole the route
      // .forRoutes({ path: 'users/:id', method: RequestMethod.GET }); // For specific routes
      
  }
}
