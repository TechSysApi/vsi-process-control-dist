import { SubmitMailpiece } from './submit_mailpiece'

export interface SubmitMailpiecePAR extends SubmitMailpiece {
    /**
     * Key assigned to an image (PicId)
     * @maxLength 200
     */
    imageKey?: string
}
