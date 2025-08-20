// domain/entities/invoice.entity.ts
export class Invoice {
  constructor(
    public readonly id: string,
    public readonly customerId: string,
    private amount: number,
    private paid: boolean = false,
  ) {}

  pay() {
    if (this.paid) throw new Error('Already paid');
    this.paid = true;
  }

  isPaid() {
    return this.paid;
  }

  getAmount() {
    return this.amount;
  }
}
