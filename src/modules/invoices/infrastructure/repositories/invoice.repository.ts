import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_CONNECTION } from '@/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { InvoicesTable } from '@/modules/invoices/infrastructure/models/schema';
import { eq } from 'drizzle-orm';
import { Invoice } from '@/modules/invoices/domain/entities/invoice.entity';
import { IInvoiceRepository } from '@/modules/invoices/domain/interfaces/invoice.interface';
import { InvoiceMapper } from '@/modules/invoices/infrastructure/mappers/invoice.mapper';

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {
  constructor(
    @Inject(DATABASE_CONNECTION) private readonly db: NodePgDatabase,
  ) {}

  async save(invoice: Invoice): Promise<Invoice> {
    const data = InvoiceMapper.toPersistence(invoice);
    const res = await this.db.insert(InvoicesTable).values(data).returning();
    return InvoiceMapper.toDomain(res[0]);
  }

  async update(
    id: string,
    updatedInvoice: Partial<Invoice>,
  ): Promise<Invoice | null> {
    const [updated] = await this.db
      .update(InvoicesTable)
      .set(updatedInvoice)
      .where(eq(InvoicesTable.id, id))
      .returning();
    return InvoiceMapper.toDomain(updated) || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.db
      .delete(InvoicesTable)
      .where(eq(InvoicesTable.id, id));
    return result.rowCount > 0;
  }

  async findById(id: string): Promise<Invoice | null> {
    const result = await this.db
      .select()
      .from(InvoicesTable)
      .where(eq(InvoicesTable.id, id))
      .limit(1)
      .then((rows) => rows[0] || null);
    return InvoiceMapper.toDomain(result) || null;
  }
}
