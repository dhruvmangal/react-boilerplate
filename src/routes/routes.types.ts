export interface RouteListType {
  name: string,
  path: string,
  component: React.FC,
  children?: RouteListType[]
}

export interface ProtectedRouteListType extends RouteListType {
  protected: boolean
}