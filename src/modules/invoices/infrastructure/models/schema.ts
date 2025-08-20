import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
  boolean,
  uuid,
} from 'drizzle-orm/pg-core';

export const InvoicesTable = pgTable('invoices', {
  id: uuid().primaryKey(), // UUID as primary key
  customerId: uuid('customer_id').notNull(),
  amount: integer('amount').notNull(),
  paid: boolean('paid').notNull().default(false),
});
