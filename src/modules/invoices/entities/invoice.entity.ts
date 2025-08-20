// domain/entities/invoice.entity.ts
export class Invoice {
  constructor(
    public readonly id: string,
    public customerId: string,
    public amountCents: number,
    public paid = false,
  ) {}
}
