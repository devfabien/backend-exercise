import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from './entity/category.entity';
import { JsonDbRepository } from 'src/db/json-db-repository';

@Module({
  imports: [],
  providers: [
    CategoriesService,
    {
      provide: 'CategoryRepository',
      useFactory: () => new JsonDbRepository<Category>('categories'),
    },
  ],
  controllers: [CategoriesController],
  exports: [
    CategoriesService,
    {
      provide: 'CategoryRepository',
      useFactory: () => new JsonDbRepository<Category>('categories'),
    },
  ],
})
export class CategoriesModule {}
