import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config()

@Injectable()
export class DBService implements OnModuleInit, OnModuleDestroy {
    public sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize(process.env.DB_URL || "", {
            dialect: 'postgres',
            pool: {
                max: 20,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            logging: false
        });
    }

    async onModuleInit() {
        try {
            await this.sequelize.authenticate();
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Database connection failed: ', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.sequelize.close();
    }

    // Get Sequelize instance
    getSequelize(): Sequelize {
        return this.sequelize;
    }

    // Sync database (create tables if they don't exist)
    async syncDatabase(force: boolean = false) {
        try {
            await this.sequelize.sync({ force });
            console.log('Database synced successfully');
        } catch (error) {
            console.error('Database sync failed: ', error);
            throw error;
        }
    }
}
