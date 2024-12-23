import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Admin]), // Register the Admin entity here
  ],
  controllers: [AppController, AdminController], // Using AdminController
  providers: [AppService, AdminService], // Using AdminService
})
export class AdminModule {}
