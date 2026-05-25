import type { ApplicationStatus } from "@/lib/matac-data";

const statusStyles: Record<
  ApplicationStatus,
  { bg: string; text: string }
> = {
  Interview: { bg: "bg-[var(--status-interview)]", text: "text-[var(--status-interview-text)]" },
  Applied: { bg: "bg-[var(--status-applied)]", text: "text-[var(--status-applied-text)]" },
  Saved: { bg: "bg-[var(--status-saved)]", text: "text-[var(--status-saved-text)]" },
  Rejected: { bg: "bg-[var(--status-rejected)]", text: "text-[var(--status-rejected-text)]" },
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const style = statusStyles[status];
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-medium ${style.bg} ${style.text}`}
    >
      {status}
    </span>
  );
}
