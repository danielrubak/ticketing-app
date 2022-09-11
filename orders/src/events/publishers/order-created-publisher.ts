import { Publisher, OrderCreatedEvent, Subjects } from "@dr-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
