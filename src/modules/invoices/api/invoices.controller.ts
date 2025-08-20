import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateInvoiceService } from '../application/use-cases/create-invoice.service';
import { UpdateInvoiceService } from '../application/use-cases/update-invoice.service';
import { GetInvoiceService } from '../application/use-cases/get-invoice.service';
import { DeleteInvoiceService } from '../application/use-cases/delete-invoice.service';
import { CreateInvoiceDto } from '../application/dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../application/dto/update-invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(
    private readonly createInvoice: CreateInvoiceService,
    private readonly updateInvoice: UpdateInvoiceService,
    private readonly getInvoice: GetInvoiceService,
    private readonly deleteInvoice: DeleteInvoiceService,
  ) {}

  @Post()
  async create(@Body() body: CreateInvoiceDto) {
    // Optionally validate with Zod here
    return await this.createInvoice.execute(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const invoice = await this.getInvoice.execute(id);
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateInvoiceDto) {
    const updated = await this.updateInvoice.execute(id, body);
    if (!updated) throw new NotFoundException('Invoice not found');
    return updated;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.deleteInvoice.execute(id);
    if (!deleted) throw new NotFoundException('Invoice not found');
    return { deleted };
  }
}
