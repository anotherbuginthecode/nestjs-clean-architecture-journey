// domain/entities/invoice.entity.ts
export class Invoice {
  constructor(
    public readonly id: string,
    public customerId: string,
    public amount: number,
    public paid = false,
  ) {}
}
