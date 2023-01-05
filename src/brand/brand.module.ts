import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brand.controller';

@Module({
  controllers: [BrandController],
})
export class BrandModule {}
