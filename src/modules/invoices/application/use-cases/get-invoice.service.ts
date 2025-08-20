import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPO } from '../../domain/interfaces/invoice.interface';
import { InvoiceRepository } from '../../infrastructure/repositories/invoice.repository';
import { Invoice } from '../../domain/entities/invoice.entity';

@Injectable()
export class GetInvoiceService {
  constructor(
    @Inject(INVOICE_REPO)
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async execute(id: string): Promise<Invoice | null> {
    return await this.invoiceRepository.findById(id);
  }
}
