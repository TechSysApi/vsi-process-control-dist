/**
 * Contains a list of logistic or technical identifiers to track a mail item within a specific context.
 */
export interface IdentifierTags {
    /**
     * Contains the list of national identifiers to track a mail item within the country.
     * The id is printed on the mailpiece by the sender.
     */
    nationalMailpieceIds?: string[]

    /**
     * Contains the list of national identifiers to track a mail item internationally.
     * The id is printed on the mailpiece by the sender.
     */
    internationalMailpieceIds?: string[]

    /**
     * Contains the list of national identifiers to track a letter item within the country.
     * The id can only be created once during a machine sorting cycle and printed on the letter.
     */
    nationalLetterIds?: string[]

    /**
     * Contains the list of Universal Postal Union Identifier (UPU-Id) as technical identifiers to track an letter item internationally.
     * The id can only be created once during a machine sorting cycle and printed on the letter.
     * Remarks: BDE converts the UPU-Id into a shorter version
     */
    internationalLetterIds?: string[]

    /**
     * Contains the list of national identifiers from the customer to track a letter item within the country.
     */
    customerLetterIds?: string[]

    /**
     * Contains the list of national identifiers from the customs to track an imported mail item within the country.
     */
    customsNumbers?: string[]

    /**
     * Contains the list of identifiers to track a Dispobox within the country.
     */
    boxIds?: string[]

    /**
     * The technical identifier to track an mail item during the complete sorting process. UPU-Id is set as default.
     * @maxLength 200
     */
    sortingProcessId?: string

    /**
     * Contains the Unique Mailpiece-Image Identifier (UMI) as machine independent technical identifier to reference a machine sorting cycle of a mail item. The identifier is used to access the mail images.
     * The id is created during every machine sorting cycle.
     * @maxLength 200
     */
    sortingProcessStepId?: string
}
