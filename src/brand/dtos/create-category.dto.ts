import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
