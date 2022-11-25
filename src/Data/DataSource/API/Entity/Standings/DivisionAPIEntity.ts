import { TeamRecordAPIEntity } from "./TeamRecordAPIEntity";

export interface DivisionAPIEntity {
    id: number
    name: string
    teamRecords: TeamRecordAPIEntity[]
}
