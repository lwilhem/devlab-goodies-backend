import { Prisma } from '@prisma/client';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}
