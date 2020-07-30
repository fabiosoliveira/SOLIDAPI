import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRespository } from './../../repositories/implementations/PostgresUsersRepository';
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRespository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }