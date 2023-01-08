/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
  type ValidationPipeOptions,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  CreateBrandCategoryDto,
  UpdateMealAddonDto,
  CreateMealAddonDto,
} from '../dtos';
import { AdminGuard } from '../guards/admin.guard';
import { MealAddonService, CategoryService } from '../services';

@Controller('brands')
@UseGuards(JwtAuthGuard)
export class BrandController {
  constructor(
    private mealAddonService: MealAddonService,
    private categoryService: CategoryService,
  ) {}

  @Post(':brandId/addons')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  createMealAddon(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() createMealpayload: CreateMealAddonDto,
  ) {
    return { brandId };
  }

  @Get(':brandId/addons')
  @UseGuards(AdminGuard)
  getAllMeals(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.mealAddonService.findAllMeals(brandId);
  }

  @Get(':brandId/addons/:addonId')
  @UseGuards(AdminGuard)
  getSingleMeal(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
  ) {
    return this.mealAddonService.findOneMeal(brandId, addonId);
  }

  @Patch(':brandId/addons/:addonId')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  editSingleMeal(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
    @Body() updateMealpayload: UpdateMealAddonDto,
  ) {
    return 'hello';
  }

  @Delete(':brandId/addons/:addonId')
  @UseGuards(AdminGuard)
  deleteSingleMeal(
    @Param('brandId', ParseIntPipe) _brandId: number,
    @Param('addonId', ParseIntPipe) addonId: number,
  ) {
    return this.mealAddonService.removeOneMeal(_brandId, addonId);
  }

  @Post(':brandId/addon-categories')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe({ transform: true } as ValidationPipeOptions))
  createCategoryForBrand(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() createCategoryPayload: CreateBrandCategoryDto,
  ) {
    return this.categoryService.createCategory(brandId, createCategoryPayload);
  }
}
