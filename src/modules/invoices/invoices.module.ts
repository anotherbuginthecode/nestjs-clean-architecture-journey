import { Module } from '@nestjs/common';
import { InvoicesController } from './api/invoices.controller';
import { CreateInvoiceService } from './application/use-cases/create-invoice.service';
import { UpdateInvoiceService } from './application/use-cases/update-invoice.service';
import { GetInvoiceService } from './application/use-cases/get-invoice.service';
import { DeleteInvoiceService } from './application/use-cases/delete-invoice.service';
import { InvoiceRepository } from './infrastructure/repositories/invoice.repository';
import { INVOICE_REPO } from './domain/interfaces/invoice.interface';
import { DatabaseModule } from '@/database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [
    CreateInvoiceService,
    UpdateInvoiceService,
    GetInvoiceService,
    DeleteInvoiceService,
    {
      provide: INVOICE_REPO,
      useClass: InvoiceRepository,
    },
  ],
  controllers: [InvoicesController],
})
export class InvoicesModule {}
