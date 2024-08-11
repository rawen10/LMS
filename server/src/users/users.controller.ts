import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users') //bich ta3tih el essm fel swagegr
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('AddUser')// Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  async create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Get('AllUsers')
  // @ApiBearerAuth() //logo cadna to indicate that authentication is required:
  findAll() {
    return this.usersService.findAll();
  }
// Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

 // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

 // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const userToDelete = await this.usersService.findOne(+id)

    return this.usersService.remove(+id);
  }
}


