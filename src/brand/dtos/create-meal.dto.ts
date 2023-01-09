import { IsNotEmpty, IsCurrency, IsString } from 'class-validator';

export default class CreateMealAddonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsCurrency()
  @IsNotEmpty()
  price: string;

  @IsString()
  category: string;
}
