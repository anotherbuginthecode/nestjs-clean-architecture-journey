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
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  async create(@Body() body: CreateInvoiceDto) {
    // Optionally validate with Zod here
    return await this.invoicesService.save(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const invoice = await this.invoicesService.get(id);
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<CreateInvoiceDto>,
  ) {
    const updated = await this.invoicesService.update(id, body);
    if (!updated) throw new NotFoundException('Invoice not found');
    return updated;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.invoicesService.delete(id);
    if (!deleted) throw new NotFoundException('Invoice not found');
    return { deleted };
  }
}
