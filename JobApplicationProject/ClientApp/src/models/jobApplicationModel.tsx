interface IJobApplicationModel {
    status?: number
    id?: string | null
    userId?: string | null
    userName?: string | null
    jobDescriptionId?: string | null
    jobDescriptionName?: string | null
    coverLetter?: string | null
    cv?: string | null
    createdOn?: string | null
    responseSummary?: string | null
    hrRejectReason?: string | null
}
export type { IJobApplicationModel }
