import { DateAPIEntity } from "./DateAPIEntity"
import { MetadataAPIEntity } from "./MetadataAPIEntity"

export interface ScheduleAPIEntity {
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalMatches: number,
    metaData: MetadataAPIEntity,
    wait: number,
    dates: DateAPIEntity[]
}