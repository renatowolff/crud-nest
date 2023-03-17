import {
  Controller,
  Post,
  Body,
  Delete,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/user-register-dto';
import { FindUserByEmailDto } from './dto/find-user-by-email-dto';

// rotas

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // CREATE
  @Post('register') //Decorator POST, verbaliza método http POST, url como parâmetro
  async register(@Body() userData: UserRegisterDto) {
    const createUser = await this.userService.register(userData);
    return createUser;
  }

  // READ
  @Get('findall') //Decorator GET, verbaliza método http GET, url como parâmetro
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  // UPDATE
  @Get('finduserbyemail')
  async findUserByEmail(@Body() email) {
    const findUniqueUser = await this.userService.findUserByEmail(email);
    return findUniqueUser;
  }

  // // UPDATE
  // @Put('update/:id') //Decorator PUT, verbaliza método http PUT, url como parâmetro
  // async updateUser(
  //   @Param('id') id: string,
  //   @Body() body: { email: string; hash: string },
  // ) {
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

  // // DELETE
  // @Delete('delete/:id') //Decorator DELETE, verbaliza método http DELETE, url como parâmetro
  // async deleteUser(@Param('id') id: string) {
  //   const deleteUserById = await this.prisma.user.delete({
  //     where: {
  //       id: Number(id),
  //     },
  //   });
  //   return deleteUserById.id;
  // }
}
