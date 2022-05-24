import { Int } from 'apikana/default-types'
/**
 * A positions to sort to.
 */
export interface Position {
    /**
     * An unique key inside the sort plan to identify
     * this occurrence of Position 🔑
     * @maxLength 200
     */
    name: string

    /**
     * The position within an outlet.
     * i.e. "1" or "A"
     * @maxLength 200
     */
    outletPosition?: string

    /**
     * The outlet name, where this position belongs to.
     * This is only needed, if this position is related to an outlet.
     * i.e. for bulk sorting, no outlet is available.
     * @maxLength 200
     */
    outlet?: string

    /**
     * Priority of the Position.
     * This is used for the distribution strategy.
     * 0 = Low priority
     * @minimum 0
     */
    priority: Int
}
