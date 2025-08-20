// domain/interfaces/invoice.repository.ts
import { Invoice } from '../entities/invoice.entity';

export interface IInvoiceRepository {
  findById(id: string): Promise<Invoice | null>;
  save(invoice: Invoice): Promise<Invoice>;
  update(id: string, invoice: Partial<Invoice>): Promise<Invoice | null>;
  delete(id: string): Promise<boolean>;
}
export const INVOICE_REPO = Symbol('INVOICE_REPO');
