import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
// import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(public prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({ where: { id: id } });
  }

  // update(id: number, updateArticleDto: UpdateArticleDto) {
  //   return `This action updates a #${id} article`;
  // }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
