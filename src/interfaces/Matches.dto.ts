export interface CDMatchDTO {
  id: string
  name: string
  matchType: string
  status: string
  venue: string
  date: string
  dateTimeGMT: string
  teams: string[]
  teamInfo: TeamInfo[]
  series_id: string
  fantasyEnabled: boolean
  bbbEnabled: boolean
  hasSquad: boolean
  matchStarted: boolean
  matchEnded: boolean
}

export interface TeamInfo {
  name: string
  shortname: string
  img: string
}
