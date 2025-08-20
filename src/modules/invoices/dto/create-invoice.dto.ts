import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateInvoiceSchema = z.object({
  customerId: z.uuid(),
  amount: z.number().int().min(0),
  paid: z.boolean().optional(),
});

export class CreateInvoiceDto extends createZodDto(CreateInvoiceSchema) {}
