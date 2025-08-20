import { CreateInvoiceService } from './use-cases/create-invoice.service';
import { UpdateInvoiceService } from './use-cases/update-invoice.service';
import { GetInvoiceService } from './use-cases/get-invoice.service';
import { DeleteInvoiceService } from './use-cases/delete-invoice.service';

export const INVOICE_USE_CASE = [
  CreateInvoiceService,
  UpdateInvoiceService,
  GetInvoiceService,
  DeleteInvoiceService,
];

export default {
  CreateInvoiceService,
  UpdateInvoiceService,
  GetInvoiceService,
  DeleteInvoiceService,
};
