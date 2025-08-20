import { Inject, Injectable } from '@nestjs/common';
import { INVOICE_REPO } from '../../domain/interfaces/invoice.interface';
import { InvoiceRepository } from '../../infrastructure/repositories/invoice.repository';

@Injectable()
export class DeleteInvoiceService {
  constructor(
    @Inject(INVOICE_REPO)
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async execute(id: string): Promise<boolean> {
    const deleted = await this.invoiceRepository.delete(id);
    if (!deleted) {
      throw new Error(`Invoice with id ${id} not found`);
    }
    return deleted;
  }
}
