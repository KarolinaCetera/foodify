import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty() // Swagger decorator
  name: string;
}
