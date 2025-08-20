CREATE TABLE "invoices" (
	"id" uuid PRIMARY KEY NOT NULL,
	"customer_id" uuid NOT NULL,
	"amount" integer NOT NULL,
	"paid" boolean DEFAULT false NOT NULL
);
