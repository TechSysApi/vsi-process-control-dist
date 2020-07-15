import { RequestStatus } from "./request_status";
import { ClientStatus } from "./client_status";
import { ParameterMetadata } from "./parameter_metadata";
import { OverallState } from "./overall_state";
import { Messages } from "./messages";
import { ReadRates } from "./read_rates";
import { Statistics } from "./statistics";
import { TrackEvents } from "./track_events";
import { ParameterValues } from "./parameter_values";
import { FillLevels } from "./fill_levels";

/**
 * Dummy object that references all objects used by the API. Used so we can pass a single input file (all-objects.json)
 * to the NSwag jsonschema2csclient generator.
 *
 * Otherwise, we need to run the generator for each type and it will create redundant shared objects (like Group).
 *
 * Using swagger2csclient didn't work either...
 */
export interface AllObjects {
    response: RequestStatus;
    cilent: ClientStatus;
    parameterMetadata: ParameterMetadata;
    parameterValues: ParameterValues;
    states: OverallState;
    messages: Messages;
    fillLevels: FillLevels
    readRates: ReadRates;
    statistics: Statistics;
    trackEvents: TrackEvents;
}