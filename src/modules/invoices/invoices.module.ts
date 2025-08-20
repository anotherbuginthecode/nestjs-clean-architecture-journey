import { Module } from '@nestjs/common';
import { InvoicesController } from './api/invoices.controller';
import { INVOICE_USE_CASE } from './application/use-cases.index';
import { InvoiceRepository } from './infrastructure/repositories/invoice.repository';
import { INVOICE_REPO } from './domain/interfaces/invoice.interface';
import { DatabaseModule } from '@/database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...INVOICE_USE_CASE,
    {
      provide: INVOICE_REPO,
      useClass: InvoiceRepository,
    },
  ],
  controllers: [InvoicesController],
})
export class InvoicesModule {}
