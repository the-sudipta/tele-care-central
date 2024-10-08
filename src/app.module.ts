import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { PatientModule } from "./patient/patient.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { AuthModule } from "./patient/auth/auth.module";

@Module({
  imports: [
    PatientModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      // url: process.env.DATABASE_URL,
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      username: process.env.PGUSER, 
      password: process.env.PGPASSWORD, 
      database: process.env.PGDATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST, 
        port: parseInt(process.env.MAILER_PORT, 10),
        ignoreTLS: true,
        secure: true,
        auth: {
          user: process.env.MAILER_USER, // your-SMTP-mail-id-here
          pass: process.env.MAILER_PASSWORD, // your-SMTP-mail-password-here
        },
      },
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
