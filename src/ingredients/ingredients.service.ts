import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  checkItem(id: string) {
    const ingredient = this.prisma.ingredient.findUnique({
      where: {
        id,
      },
    });

    if (!ingredient) throw new NotFoundException();
  }

  create(createIngredientDto: CreateIngredientDto) {
    return this.prisma.ingredient.create({
      data: {
        ...createIngredientDto,
      },
    });
  }

  findAll() {
    return this.prisma.ingredient.findMany();
  }

  findOne(id: string) {
    const ingredient = this.prisma.ingredient.findFirst({
      where: {
        id,
      },
    });

    if (!ingredient) throw new NotFoundException();

    return ingredient;
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    this.checkItem(id);

    return this.prisma.ingredient.update({
      where: {
        id,
      },
      data: {
        ...updateIngredientDto,
      },
    });
  }

  remove(id: string) {
    this.checkItem(id);

    return this.prisma.ingredient.delete({
      where: {
        id,
      },
    });
  }
}
