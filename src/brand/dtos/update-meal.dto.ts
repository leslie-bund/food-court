import { IsAlpha, IsCurrency } from 'class-validator';

export default class UpdateMealAddonDto {
  @IsAlpha()
  name: string;

  @IsAlpha()
  description: string;

  @IsCurrency()
  price: string;

  @IsAlpha()
  category: string;
}
