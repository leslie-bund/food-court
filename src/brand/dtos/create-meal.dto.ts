import { IsNotEmpty, IsCurrency, IsAlpha } from 'class-validator';

export default class CreateMealAddonDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsAlpha()
  description: string;

  @IsCurrency()
  @IsNotEmpty()
  price: string;

  @IsAlpha()
  category: string;
}
