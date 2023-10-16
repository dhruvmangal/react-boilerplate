export interface UserData {
  avatar_url: string,
  id: number,
  login: string,
  organizations_url: string,
  type: string,
  url: string
}

export interface URLResponse {
  incomplete_results: boolean,
  total_count: number,
  items: UserData[]
}