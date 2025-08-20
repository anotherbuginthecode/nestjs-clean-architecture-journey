// infrastructure/mappers/invoice.mapper.ts
import { Invoice } from '../../domain/entities/invoice.entity';

export class InvoiceMapper {
  static toDomain(row: any): Invoice {
    if (!row) return null;
    return new Invoice(row.id, row.customerId, row.amount, row.paid);
  }

  static toPersistence(invoice: Invoice): any {
    return {
      id: invoice.id,
      customerId: invoice.customerId,
      amount: invoice.getAmount(),
      paid: invoice.isPaid(),
    };
  }
}
