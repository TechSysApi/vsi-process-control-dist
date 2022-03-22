import { UpdateMailpieceAttributes } from './update_mailpiece_attributes'

/**
 * The notification about the sortation of the mail piece. This event triggers the mail piece sorting Event in BDE.
 **/
export interface UpdateMailpieceAttributesMail
    extends UpdateMailpieceAttributes {
    /**
     * The ID if the sortplan used for sorting
     * @maxLength 200
     */
    sortplanId: string

    /**
     * The name of the sortplan used for sorting
     * @maxLength 200
     */
    sortplanName: string

    /**
     * The id of the sorting product that the item was sorted to
     * @maxLength 200
     */
    sortingProductId?: string

    /**
     * The target VAP ("Verarbeitungsprodukt") the item was sorted to.
     * @maxLength 32
     */
    sortingProductVap?: string

    /**
     * The type of the label barcode concerning the outlet the mailpiece was sorted to.
     * @maxLength 2
     */
    sortingProductBcType: string
}
