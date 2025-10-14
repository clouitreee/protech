-- This file serves as a reference for the Cloudflare D1 database schema.
-- Database migrations are managed exclusively via the Cloudflare Dashboard or Wrangler CLI, not directly in this repository.

-- Table: customers
CREATE TABLE IF NOT EXISTS customers (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    address TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Trigger for customers.updated_at
CREATE TRIGGER IF NOT EXISTS customers_updated_at
AFTER UPDATE ON customers
FOR EACH ROW BEGIN
  UPDATE customers SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: services
CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    price_cents INTEGER NOT NULL CHECK(price_cents >= 0),
    is_active INTEGER DEFAULT 1 NOT NULL CHECK(is_active IN (0, 1)),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Trigger for services.updated_at
CREATE TRIGGER IF NOT EXISTS services_updated_at
AFTER UPDATE ON services
FOR EACH ROW BEGIN
  UPDATE services SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: contracts
CREATE TABLE IF NOT EXISTS contracts (
    id TEXT PRIMARY KEY NOT NULL,
    customer_id TEXT NOT NULL,
    service_id TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT,
    status TEXT NOT NULL CHECK(status IN (
        'active', 'pending', 'cancelled', 'completed'
    )),
    monthly_fee_cents INTEGER NOT NULL CHECK(monthly_fee_cents >= 0),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);

-- Trigger for contracts.updated_at
CREATE TRIGGER IF NOT EXISTS contracts_updated_at
AFTER UPDATE ON contracts
FOR EACH ROW BEGIN
  UPDATE contracts SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: tickets
CREATE TABLE IF NOT EXISTS tickets (
    id TEXT PRIMARY KEY NOT NULL,
    customer_id TEXT NOT NULL,
    contract_id TEXT,
    subject TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL CHECK(status IN (
        'open', 'in_progress', 'closed', 'pending_customer'
    )),
    priority TEXT NOT NULL CHECK(priority IN (
        'low', 'medium', 'high', 'urgent'
    )),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE SET NULL
);

-- Trigger for tickets.updated_at
CREATE TRIGGER IF NOT EXISTS tickets_updated_at
AFTER UPDATE ON tickets
FOR EACH ROW BEGIN
  UPDATE tickets SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: invoices
CREATE TABLE IF NOT EXISTS invoices (
    id TEXT PRIMARY KEY NOT NULL,
    customer_id TEXT NOT NULL,
    contract_id TEXT,
    amount_cents INTEGER NOT NULL CHECK(amount_cents >= 0),
    issue_date TEXT NOT NULL,
    due_date TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN (
        'pending', 'paid', 'overdue', 'cancelled'
    )),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE SET NULL
);

-- Trigger for invoices.updated_at
CREATE TRIGGER IF NOT EXISTS invoices_updated_at
AFTER UPDATE ON invoices
FOR EACH ROW BEGIN
  UPDATE invoices SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: payments
CREATE TABLE IF NOT EXISTS payments (
    id TEXT PRIMARY KEY NOT NULL,
    invoice_id TEXT NOT NULL,
    amount_cents INTEGER NOT NULL CHECK(amount_cents >= 0),
    payment_date TEXT NOT NULL,
    method TEXT NOT NULL,
    transaction_id TEXT UNIQUE,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE
);

-- Trigger for payments.updated_at
CREATE TRIGGER IF NOT EXISTS payments_updated_at
AFTER UPDATE ON payments
FOR EACH ROW BEGIN
  UPDATE payments SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

-- Table: audit_logs
CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT,
    event_type TEXT NOT NULL,
    description TEXT,
    ip_address TEXT,
    user_agent TEXT,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Index for faster lookups on audit_logs
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_event_type ON audit_logs(event_type);
CREATE INDEX IF NOT EXISTS idx_audit_logs_timestamp ON audit_logs(timestamp);

