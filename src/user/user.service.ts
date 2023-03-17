import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserRegisterDto } from './dto/user-register-dto';

// com decorator injectable, a classe pode ser "injetada" em outros arquivos/lugares
@Injectable({})
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(userData: UserRegisterDto) {
    const { email, hash } = userData;
    console.log(userData.email);
    const createUser = await this.prisma.user.create({
      data: {
        email,
        hash,
      },
    });
    return createUser;
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByEmail({ email }) {
    // console.log(email);
    const findUniqueUser = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    return findUniqueUser;
  }

  // async updateUser(id: string, body: { email: string; hash: string }) {
  //   const { email, hash } = body;
  //   const update = await this.prisma.user.update({
  //     where: {
  //       id: Number(id),
  //     },
  //     data: {
  //       email,
  //       hash,
  //     },
  //   });
  //   return update;
  // }

  // async deleteUser(@Param('id') id: string) {
  //   const deleteUserById = await this.prisma.user.delete({
  //     where: {
  //       id: Number(id),
  //     },
  //   });
  //   return deleteUserById.id;
  // }
}
