import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UpdateInvoiceSchema = z.object({
  id: z.uuid(),
  customerId: z.uuid().optional(),
  amountCents: z.number().int().min(0).optional(),
  paid: z.boolean().optional(),
});

export class UpdateInvoiceDto extends createZodDto(UpdateInvoiceSchema) {}
