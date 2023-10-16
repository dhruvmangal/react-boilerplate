export interface RouteListType {
  name: string,
  path: string,
  component: React.FC,
  children?: RouteListType[]
}