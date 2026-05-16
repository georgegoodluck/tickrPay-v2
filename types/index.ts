export interface Profile {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}

export interface Event {
  id: string;
  organiser_id: string;
  title: string;
  description: string | null;
  venue: string;
  banner_url: string | null;
  date: string;
  slug: string;
  status: "draft" | "published" | "cancelled" | "ended";
  created_at: string;
}

export interface TicketTier {
  id: string;
  event_id: string;
  name: string;
  price: number;
  capacity: number;
  sold: number;
  created_at: string;
}

export interface Order {
  id: string;
  event_id: string;
  tier_id: string;
  attendee_name: string;
  attendee_email: string;
  quantity: number;
  total_amount: number;
  payment_ref: string | null;
  payment_gateway: "paystack" | "flutterwave" | null;
  status: "pending" | "paid" | "failed" | "refunded";
  created_at: string;
}

export interface Ticket {
  id: string;
  order_id: string;
  event_id: string;
  tier_id: string;
  unique_id: string;
  scanned: boolean;
  scanned_at: string | null;
  created_at: string;
}

// Joined types for convenience
export interface EventWithTiers extends Event {
  ticket_tiers: TicketTier[];
}

export interface OrderWithTickets extends Order {
  tickets: Ticket[];
}
