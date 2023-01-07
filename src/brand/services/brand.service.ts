import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMealAddonDto, UpdateMealAddonDto } from '../dtos';
import { BrandModel, MealModel, CategoryModel } from '../models';

@Injectable()
export class BrandService {
  createMeal(brandId: number, payload: CreateMealAddonDto) {
    return 'This action adds a new boom';
  }

  findAllMeals(brandId: number) {
    try {
      return MealModel.query().select('*').where('brandId', brandId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  findOneMeal(brandId: number, addonId: number) {
    try {
      return MealModel.query()
        .select('*')
        .where('brandId', brandId)
        .where('id', addonId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  updateOneMeal(brandId: number, addonId: number, payload: UpdateMealAddonDto) {
    try {
      return MealModel.query().where('brandId', brandId).where('id', addonId);
        // .patch();
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  removeOneMeal(brandId: number, addonId: number) {
    try {
      return MealModel.query()
        .where('brandId', brandId)
        .where('id', addonId)
        .delete();
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
