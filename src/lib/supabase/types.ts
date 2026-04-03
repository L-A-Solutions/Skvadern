export type Activity = {
  id: string;
  title: string;
  date: string; // ISO datetime, e.g. "2026-04-15T18:30:00"
  description: string | null;
  location: string | null;
  created_at: string;
};
