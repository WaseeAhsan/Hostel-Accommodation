import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomModule } from './room/room.module';
import { NoticeController } from './notice/notice.controller';
import { NoticeService } from './notice/notice.service';
import { NoticeModule } from './notice/notice.module';
import { MealModule } from './meal/meal.module';
import { AdminModule } from './admin/admin.module';
import { EventModule } from './event/event.module';
import {StaffModule} from './staff/staff.module' ; 
import {GroceryModule} from './grocery/grocery.module'

@Module({
  imports: [RoomModule, NoticeModule, MealModule,AdminModule, EventModule , StaffModule ,  GroceryModule ],
  // controllers: [NoticeController],
  // providers: [NoticeService],
  // controllers: [AppController, RoomController],
  // providers: [AppService, RoomService],
})
export class AppModule {}
