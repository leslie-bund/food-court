import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateCategoryDto from 'src/brand/dtos/create-category.dto';
import { CategoryModel } from 'src/brand/models';

@Injectable()
export default class CategoryService {
  createCategory(brandId: number, payload: CreateCategoryDto) {
    try {
      return CategoryModel.query().insert({
        ...payload,
        brandId,
      });
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }

  findOneCategory(brandId: number, categoryName: string): any {
    try {
      return CategoryModel.query()
        .select('*')
        .where('brandId', brandId)
        .where('name', categoryName);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
