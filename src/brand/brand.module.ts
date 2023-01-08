import { CacheModule, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BrandController } from '../brand/controllers/brand.controller';
import BrandService from '../brand/services/brand/brand.service';
import CategoryService from '../brand/services/category/category.service';
import MealService from '../brand/services/meal/meal.service';

@Module({
  imports: [AuthModule, CacheModule.register()],
  controllers: [BrandController],
  providers: [BrandService, MealService, CategoryService],
})
export class BrandModule {}
