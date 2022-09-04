import { Publisher, Subjects, TicketCreatedEvent } from "@dr-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
