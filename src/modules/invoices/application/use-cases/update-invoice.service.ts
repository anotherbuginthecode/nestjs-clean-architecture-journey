import { Injectable, Inject } from '@nestjs/common';
import { INVOICE_REPO } from '../../domain/interfaces/invoice.interface';
import { InvoiceRepository } from '../../infrastructure/repositories/invoice.repository';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';
import { Invoice } from '../../domain/entities/invoice.entity';

@Injectable()
export class UpdateInvoiceService {
  constructor(
    @Inject(INVOICE_REPO)
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async execute(
    id: string,
    updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<Invoice | null> {
    return await this.invoiceRepository.update(id, updateInvoiceDto);
  }
}
