import { Body, Controller, Post, Put } from '@nestjs/common';
import { RegisterUserDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
    @Post()
    registerUser(@Body() registerUserDTO: RegisterUserDTO): string {
        const { firstName, lastName, email, phone, birthdate, password, active, blocked, deleted } = registerUserDTO
        return `
        First Name: ${firstName}
        Last Name: ${lastName}
        Birthdate: ${birthdate}
        Email: ${email}
        Phone: ${phone}
        Password: ${password}
        Is Active?: ${active?.toString()}
        Is Blocked?: ${blocked?.toString()}
        Is Deleted?: ${deleted?.toString()}
        `
    }

    @Post('confirm')
    confirmUser(): string {
        return 'Confirm User With Email'
    }

    @Post('login')
    loginUser(): string {
        return 'Login User'
    }

    @Put('refresh')
    refreshToken(): string {
        return 'Refresh Token'
    }

    @Post('request')
    requestPasswordReset(): string {
        return 'Request Password Reset'
    }

    @Put('reset')
    resetPassword(): string {
        return 'Reset Password'
    }

    @Put('update')
    updateUser(): string {
        return 'Update Password'
    }

    @Put('block')
    blockUser(): string {
        return 'Block User'
    }
}
