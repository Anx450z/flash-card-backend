import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: `${process.env.HOST}`,
    port: 5432 || process.env.PORT ,
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASE}`,
    synchronize: false,
    // logging: false,
    entities: [User],
    // migrations: [],
    // subscribers: [],
})