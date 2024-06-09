export class RegisterUserDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly birthdate: string;
    readonly phone: string;
    readonly password: string;
    readonly active: boolean;
    readonly deleted: boolean;
    readonly blocked: boolean
}