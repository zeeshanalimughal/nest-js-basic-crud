import { Get, Injectable, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()

export class UserService {
    users: User[] = [
        {
            id: 1,
            name: "Zeeshan"
        },
        {
            id: 2,
            name: "Usman"
        }
    ]

    getUsers(name?: String): User[] {
        if (name) {
            return this.users.filter(user => user.name.toLowerCase() === name.toLowerCase())
        }
        return this.users
    }

    getUserById(id: Number): User[] {
        return this.users.filter(user => user.id === id)
    }

    createUser(body: createUserDto): String {
        !this.users.map(user => user.name.toLowerCase()).includes(body.name.toLowerCase()) && this.users.push({ ...body, id: +Date.now() })
        return "User Created"
    }
    updateUser(body: updateUserDto) {
        this.users = [...this.users.map(user => {
            if (user.id === +body.id) {
                user.name = body.name
                return user
            }
            return user
        })]
        return { ...body };
    }
    deleteUser(id: Number) {
        this.users = this.users.filter(user => user.id == id)
        return "User Deleted"
    }
}
