import { Injectable, Inject } from '@nestjs/common';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { INVOICE_REPO } from '../../domain/interfaces/invoice.interface';
import { InvoiceRepository } from '../../infrastructure/repositories/invoice.repository';
import { Invoice } from '../../domain/entities/invoice.entity';

@Injectable()
export class CreateInvoiceService {
  constructor(
    @Inject(INVOICE_REPO)
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async execute(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = new Invoice(
      crypto.randomUUID(),
      createInvoiceDto.customerId,
      createInvoiceDto.amountCents,
    );
    return await this.invoiceRepository.save(invoice);
  }
}
