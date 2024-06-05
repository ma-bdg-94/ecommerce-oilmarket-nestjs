import { Controller, Post, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post()
    registerUser(): string {
        return 'Register User'
    }

    @Post()
    confirmUser(): string {
        return 'Confirm User With Email'
    }

    @Post()
    Login(): string {
        return 'Login User'
    }

    @Put()
    RefreshToken(): string {
        return 'Refresh Token'
    }

    @Post()
    RequestPasswordReset(): string {
        return 'Request Password Reset'
    }

    @Put()
    ResetPassword(): string {
        return 'Reset Password'
    }
}
