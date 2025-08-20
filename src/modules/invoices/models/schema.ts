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
  id: uuid().primaryKey().defaultRandom(), // UUID as primary key
  customerId: uuid('customer_id').notNull(),
  amountCents: integer('amount_cents').notNull(),
  paid: boolean('paid').notNull().default(false),
});
