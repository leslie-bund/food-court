import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMealAddonDto, UpdateMealAddonDto } from 'src/brand/dtos';
import { MealModel } from 'src/brand/models';

@Injectable()
export default class MealService {
  findAllMeals(brandId: number): any {
    try {
      return MealModel.query().select('*').where('brandId', brandId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  findOneMeal(brandId: number, addonId: number): any {
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

  removeOneMeal(brandId: number, addonId: number): any {
    try {
      return MealModel.query()
        .delete()
        .where('brandId', brandId)
        .where('id', addonId);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
