import { registerAs } from '@nestjs/config';

export default registerAs(
  'database',
  (): Record<string, any> => ({
    mongoUri: process.env.MONGO_CONNECTION_STRING,
    mysqlReplicaHost: process.env.MYSQL_REPLICA_HOST,
    mysqlPort: parseInt(process.env.MYSQL_PORT),
    mysqlDatabase: process.env.MYSQL_DATABASE,
    mysqlUserName: process.env.MYSQL_USER_NAME,
    mysqlPassword: process.env.MYSQL_PASSWORD,
    mysqlPrimaryHost: process.env.MYSQL_PRIMARY_HOST,
  }),
);
