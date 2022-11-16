import { DivisionAPIEntity } from "./DivisionAPIEntity"
import { TeamRecordAPIEntity } from "./TeamRecordAPIEntity"

export interface RecordAPIEntity {
    division: DivisionAPIEntity,
    teamRecords: TeamRecordAPIEntity[]
}
