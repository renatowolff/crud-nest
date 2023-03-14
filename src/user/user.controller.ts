import { Controller, Post } from '@nestjs/common';
import { Body, Get, Param, Put } from '@nestjs/common/decorators';
import { PrismaService } from '../prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  // CREATE
  @Post('register')
  async register(@Body() body: { email: string; hash: string }) {
    const { email, hash } = body;
    const createUser = await this.prisma.user.create({
      data: {
        email,
        hash,
      },
    });
    return createUser;
  }

  // READ
  @Get('find')
  async findUser() {
    return await this.prisma.user.findMany();
  }

  // UPDATE
  @Put('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: { email: string; hash: string },
  ) {
    const { email, hash } = body;
    const update = await this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        hash,
      },
    });
    return update;
  }

  // DELETE
}
