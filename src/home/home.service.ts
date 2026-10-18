import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { ClockService } from '../clock/clock.service';

@Injectable()
export class HomeService {
  constructor(
    private readonly configService: ConfigService<AllConfigType>,
    private readonly clockService: ClockService,
  ) {}

  appInfo() {
    return { name: this.configService.get('app.name', { infer: true }) };
  }
}
