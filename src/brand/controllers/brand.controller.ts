/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  CacheInterceptor,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  type ValidationPipeOptions,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import {
  CreateBrandCategoryDto,
  UpdateMealAddonDto,
  CreateMealAddonDto,
} from '../dtos';
import { BrandService } from '../services/brand.service';

@Controller('brands')
@UseInterceptors(CacheInterceptor)
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post(':brandId/addons')
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  createMealAddon(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() createMealDto: CreateMealAddonDto,
  ) {
    return { brandId };
  }

  @Get(':brandId/addons')
  getAllMeals(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandService.findAllMeals(brandId);
  }

  @Get(':brandId/addons/:addonId')
  getSingleMeal(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
  ) {
    return this.brandService.findOneMeal(brandId, addonId);
  }

  @Patch(':brandId/addons/:addonId')
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  editSingleMeal(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
    @Body() updateMealDto: UpdateMealAddonDto,
  ) {
    return 'hello';
  }

  @Delete(':brandId/addons/:addonId')
  deleteSingleMeal(
    @Param('brandId', ParseIntPipe) _brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
  ) {
    return this.brandService.removeOneMeal(_brandId, addonId);
  }

  @Post(':brandId/addon-categories')
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  createCategoryForBrand(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() createCategoryPayload: CreateBrandCategoryDto,
  ) {
    return 'category created';
  }
}
