import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwt') {
  // This guard for jwt startegy.
  constructor() {
    super();
  }
}
