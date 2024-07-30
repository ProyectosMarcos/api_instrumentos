### API Instrumentos

- API para conservatorio - docentes de música
- Conexión con Base de datos relacional PostgreSQL
- Contiene validaciones de datos con dependencia Joi version 17.13.3
- Hash para las contraseñas
- Tokens
- ORM Prisma para la creacion de tablas

## Entorno de desarrollo

| Node.js | PostgreSQL |

### Dependencias utilizadas

| Nombre        | Version  |
| ------------- | -------- |
| express       | v6.4.5   |
| dotenv        | v16.4.5  |
| cors          | v2.8.5   |
| express-jwt   | v8.4.1   |
| joi           | v17.13.3 |
| bcrypt        | v^5.1.1  |
| uuid          | v10.0.0  |
| prisma/client | v5.17.0  |
| jsonwebtoken  | v9.0.2   |

### Tablas en PostgreSQL

| Nombre                        | Contenido                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| instruments                   | Contiene el id del instrumento musical, descripción, tipo y nombre                                         |
| users                         | Contiene el id de los usuarios, nombres , email, contraseñas y su rol, sea usuario o administrador         |
| ussers_assignated_instruments | Contiene a los usuarios con sus instrumentos asignados, relacion entre id del usuario y id del instrumento |

### Endpoints

- GET/api/instruments
