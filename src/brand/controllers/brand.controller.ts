import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('brands')
export class BrandController {
  @Post(':brandId/addons')
  createMealAddon(@Param('brandId') brandId: number) {
    return { go: 'seline' };
  }

  @Get(':brandId/addons')
  getAllMeals(@Param('brandId') brandId: number) {
    return { go: 'seline' };
  }

  @Get(':brandId/addons/:addonId')
  getSingleMeal(
    @Param('brandId') brandId: number,
    @Param('addonId') addonId: number,
  ) {
    return { go: 'seline' };
  }

  @Patch(':brandId/addons/:addonId')
  editSingleMeal(
    @Param('brandId') brandId: number,
    @Param('addonId') addonId: number,
  ) {
    return 'hello';
  }

  @Delete(':brandId/addons/:addonId')
  deleteSingleMeal(
    @Param('brandId') brandId: number,
    @Param('addonId') addonId: number,
  ) {
    return 'deleted';
  }

  @Post(':brandId/addon-categories')
  createCategoryForBrand(@Param('brandId') brandId: number) {
    return 'category created';
  }
}
