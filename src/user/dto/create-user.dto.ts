import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric,MaxLength } from 'class-validator';
export class createUserDto{
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name:String;
     
    @ApiProperty({ required: false })
    age?: Number
}