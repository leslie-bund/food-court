import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brand.controller';
import BrandService from './services/brand/brand.service';
import CategoryService from './services/category/category.service';
import MealService from './services/meal/meal.service';

@Module({
  controllers: [BrandController],
  providers: [BrandService, MealService, CategoryService],
})
export class BrandModule {}
