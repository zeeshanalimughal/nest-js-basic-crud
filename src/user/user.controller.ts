import { Body, Controller, Param, Post, Put, Delete, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Get, Query } from '@nestjs/common/decorators';
import { ApiTags, ApiQuery, ApiBadRequestResponse } from '@nestjs/swagger/dist';
import { ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) { }

    @ApiOkResponse({ type: User, isArray: true })
    @ApiQuery({ name: 'name', required: false })
    @Get()
    getUsers(@Query('name') name?: String): User[] {
        return this.appService.getUsers(name);
    }

    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id: Number): User[] {
        const user = this.appService.getUserById(id);
        if (!user.length) {
            throw new NotFoundException()
        }
        return user
    }

    @ApiCreatedResponse({ type: User })
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: createUserDto): User[] {
        this.appService.createUser(body);
        return this.appService.getUsers();
    }

    @Put()
    updateUser(@Body() body: updateUserDto): User {
        return this.appService.updateUser(body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: Number): String {
        return this.appService.deleteUser(+id);
    }

}
