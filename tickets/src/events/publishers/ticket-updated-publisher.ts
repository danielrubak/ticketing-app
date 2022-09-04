import { Publisher, Subjects, TicketUpdatedEvent } from "@dr-ticketing/common";

export class TicketUpdateddPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
