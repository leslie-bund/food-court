import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateMealAddonDto, UpdateMealAddonDto } from 'src/brand/dtos';
import { MealModel } from 'src/brand/models';
import CategoryService from '../category/category.service';

@Injectable()
export default class MealService {
  constructor(private categoryService: CategoryService) {}

  async findAllMeals(brandId: number): Promise<any> {
    try {
      return MealModel.query().select('*').where('brandId', brandId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  async findOneMeal(brandId: number, addonId: number): Promise<any> {
    try {
      return MealModel.query()
        .select('*')
        .where('brandId', brandId)
        .where('id', addonId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  createMeal(brandId: number, payload: CreateMealAddonDto) {
    console.log(brandId, payload);
    return 'This action adds a new boom';
  }

  updateOneMeal(brandId: number, addonId: number, payload: UpdateMealAddonDto) {
    console.log(payload);
    try {
      return MealModel.query().where('brandId', brandId).where('id', addonId);
      // .patch();
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  async removeOneMeal(brandId: number, addonId: number): Promise<any> {
    try {
      const rowsDeleted = await MealModel.query()
        .delete()
        .where('brandId', brandId)
        .where('id', addonId);

      if (rowsDeleted > 0) {
        return { status: 'Successful', message: 'Meal Deleted' };
      }
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }

    return { status: 'Successful', message: 'No meal was Deleted' };
  }
}
