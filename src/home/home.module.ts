import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { ConfigModule } from '@nestjs/config';
import { ClockModule } from '../clock/clock.module';

@Module({
  imports: [ConfigModule, ClockModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
