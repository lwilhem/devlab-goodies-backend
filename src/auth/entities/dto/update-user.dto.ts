import { Prisma } from '@prisma/client';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
}
