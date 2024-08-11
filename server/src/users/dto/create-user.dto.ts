import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUsersDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  prenom: string;
  @ApiProperty()
  nom: string;
  @ApiProperty()
  telephone: string;
  @ApiProperty()
  lieux: string;
  @ApiProperty()
  classe: string;
}
