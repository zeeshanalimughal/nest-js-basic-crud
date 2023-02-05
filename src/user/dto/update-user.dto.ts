import { ApiProperty } from '@nestjs/swagger';
export class updateUserDto {
    @ApiProperty()
    id: Number
    @ApiProperty()
    name: String
    @ApiProperty({ required: false })
    age?: Number
}