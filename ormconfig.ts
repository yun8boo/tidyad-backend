import TypeOrmNamingStrategy from './src/config/TypeOrmNamingStrategy';

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "tidyad_db",
  entities: ["src/entities/*.ts"],
  logging: true,
  synchronize: true,
  namingStrategy: new TypeOrmNamingStrategy()
}