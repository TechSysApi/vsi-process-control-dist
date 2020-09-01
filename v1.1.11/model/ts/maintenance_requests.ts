export interface HardwareRebootRequest{
     /**
     * The date+timestamp which identifies the point in time, where the reboot request was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string; 
}


export interface SoftwareRestartRequest{
     /**
     * The date+timestamp which identifies the point in time, where the restart request was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string;
}

