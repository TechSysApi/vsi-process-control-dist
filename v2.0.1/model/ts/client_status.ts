export interface ClientStatus {
    state: ClientState

    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp?: string
}

export enum ClientState {
    CONNECTED,
    DISCONNECTED,
    BROKEN
}
