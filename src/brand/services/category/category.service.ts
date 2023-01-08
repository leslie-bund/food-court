import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import CreateCategoryDto from 'src/brand/dtos/create-category.dto';
import { CategoryModel } from 'src/brand/models';

@Injectable()
export default class CategoryService {
  async createCategory(brandId: number, payload: CreateCategoryDto) {
    try {
      const greek = await CategoryModel.query().insert([
        {
          ...payload,
          brandId,
        },
      ]);
      return greek;
    } catch (error: any) {
      throw new HttpException(error?.message, HttpStatus.NOT_IMPLEMENTED, {
        cause: new Error(error),
      });
    }
  }

  async findOneCategory(brandId: number, categoryName: string): Promise<any> {
    try {
      return await CategoryModel.query()
        .select('*')
        .where('brandId', brandId)
        .where('name', categoryName);
    } catch (error: any) {
      throw new HttpException(error, HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
