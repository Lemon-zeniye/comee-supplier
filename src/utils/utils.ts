export function getStatusColor(status: string): string {
  switch (status) {
    case "shipped" || "accepted":
      return "#10B981";
    case "canceled" || "declined":
      return "#EF4444";
    case "delivered":
      return "#F59E0B";
    case "pending":
      return "#3B82F6";
    default:
      return "#6B7280";
  }
}
