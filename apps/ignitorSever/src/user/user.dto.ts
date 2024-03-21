import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'rascal' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'rascal@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'rascal-coder' })
  @IsNotEmpty()
  username: string;
}
