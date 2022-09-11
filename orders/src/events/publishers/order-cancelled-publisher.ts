import { Publisher, OrderCancelledEvent, Subjects } from "@dr-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
