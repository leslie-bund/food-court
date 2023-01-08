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
  UseInterceptors,
  CacheInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TimeoutInterceptor } from 'src/timeout/timeout.interceptor';
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
  async createMealAddon(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() createMealpayload: CreateMealAddonDto,
  ) {
    return this.mealAddonService.createMeal(brandId, createMealpayload);
  }

  @Get(':brandId/addons')
  @UseGuards(AdminGuard)
  @UseInterceptors(CacheInterceptor)
  @UseInterceptors(TimeoutInterceptor)
  getAllMeals(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.mealAddonService.findAllMeals(brandId);
  }

  @Get(':brandId/addons/:addonId')
  @UseGuards(AdminGuard)
  @UseInterceptors(CacheInterceptor)
  @UseInterceptors(TimeoutInterceptor)
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
    return this.mealAddonService.updateOneMeal(
      brandId,
      addonId,
      updateMealpayload,
    );
  }

  @Delete(':brandId/addons/:addonId')
  @UseGuards(AdminGuard)
  @UseInterceptors(TimeoutInterceptor)
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
