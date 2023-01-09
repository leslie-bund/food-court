import { IsCurrency, IsString } from 'class-validator';

export default class UpdateMealAddonDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsCurrency()
  price: string;

  @IsString()
  category: string;
}
