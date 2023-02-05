import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UserModule, TodosModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
