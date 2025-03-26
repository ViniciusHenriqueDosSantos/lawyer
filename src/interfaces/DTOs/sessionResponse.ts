import User from "../user"

export default interface sessionsResponse {
  user: User
  token: string
}