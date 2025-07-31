import { Get, Post, Controller, Body } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftDTO } from './shift.Dto';

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftSrv: ShiftsService){}

    @Get()
    getAllShifts(){
        return this.shiftSrv.getAllShifts()
    }

    @Post()
    craeteShift(@Body() data: ShiftDTO){
        return this.shiftSrv.addShift(data)
    }
}
