import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateMealAddonDto, UpdateMealAddonDto } from 'src/brand/dtos';
import { MealModel } from 'src/brand/models';
import CategoryService from '../category/category.service';

@Injectable()
export default class MealService {
  constructor(private categoryService: CategoryService) {}

  async findAllMeals(brandId: number): Promise<any> {
    return MealModel.query()
      .select('*')
      .where('brandId', brandId)
      .catch(() => {
        throw new HttpException(
          'Failed to update Database',
          HttpStatus.NOT_IMPLEMENTED,
        );
      });
  }

  async findOneMeal(brandId: number, addonId: number): Promise<any> {
    return MealModel.query()
      .select('*')
      .where('brandId', brandId)
      .where('id', addonId)
      .catch(() => {
        throw new HttpException(
          'Failed to update Database',
          HttpStatus.NOT_IMPLEMENTED,
        );
      });
  }

  async createMeal(brandId: number, payload: CreateMealAddonDto) {
    const { category, ...info } = payload;
    let categoryId;
    const data = await this.categoryService.findOneCategory(brandId, category);
    try {
      const { id } = data.pop();
      categoryId = id;
    } catch (error) {
      throw new HttpException(
        `Category ${category} doesn't belong to a brand`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    return await MealModel.query()
      .insert({
        ...info,
        categoryId,
        brandId,
      })
      .catch(() => {
        throw new HttpException(
          'Failed to update Database',
          HttpStatus.NOT_IMPLEMENTED,
        );
      });
  }

  async updateOneMeal(
    brandId: number,
    addonId: number,
    payload: UpdateMealAddonDto,
  ) {
    const { category, ...info } = payload;
    let categoryId;
    if (typeof category === 'string') {
      const data = await this.categoryService.findOneCategory(
        brandId,
        category,
      );
      try {
        const { id } = data.pop();
        categoryId = id;
      } catch (error) {
        throw new HttpException(
          `Category ${category} doesn't belong to this brand`,
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
    }
    const rowsUpdated = await MealModel.query()
      .where('brandId', brandId)
      .where('id', addonId)
      .patch(categoryId ? { categoryId, ...info } : info)
      .catch(() => {
        throw new HttpException(
          'Failed to update Database',
          HttpStatus.NOT_IMPLEMENTED,
        );
      });

    if (rowsUpdated > 0) {
      return { status: 'Successful', message: 'Meal Deleted' };
    }

    return { status: 'Successful', message: 'No meal was Deleted' };
  }

  async removeOneMeal(brandId: number, addonId: number): Promise<any> {
    const rowsDeleted = await MealModel.query()
      .delete()
      .where('brandId', brandId)
      .where('id', addonId)
      .catch(() => {
        throw new HttpException(
          'Failed to update Database',
          HttpStatus.NOT_IMPLEMENTED,
        );
      });

    if (rowsDeleted > 0) {
      return { status: 'Successful', message: 'Meal Deleted' };
    }

    return { status: 'Successful', message: 'No meal was Deleted' };
  }
}
