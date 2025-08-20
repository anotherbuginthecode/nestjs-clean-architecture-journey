import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_CONNECTION } from '@/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { InvoicesTable } from './models/schema';
import { eq } from 'drizzle-orm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @Inject(DATABASE_CONNECTION) private readonly db: NodePgDatabase,
  ) {}

  async save(invoice: CreateInvoiceDto): Promise<Invoice> {
    const [created] = await this.db
      .insert(InvoicesTable)
      .values(invoice)
      .returning();
    console.log('Invoice created:', created);
    return created;
  }

  async update(id: string, updatedInvoice: any): Promise<Invoice | null> {
    const [updated] = await this.db
      .update(InvoicesTable)
      .set(updatedInvoice)
      .where(eq(InvoicesTable.id, id))
      .returning();
    return updated || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.db
      .delete(InvoicesTable)
      .where(eq(InvoicesTable.id, id));
    return result.rowCount > 0;
  }

  async get(id: string): Promise<Invoice | null> {
    return await this.db
      .select()
      .from(InvoicesTable)
      .where(eq(InvoicesTable.id, id))
      .limit(1)
      .then((rows) => rows[0] || null);
  }
}
