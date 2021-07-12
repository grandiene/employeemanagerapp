import {Position} from "./position";

export interface Employee {
  id: number;
  name: string;
  birthDate: string;
  idPosition: number;
  position: Position;
  positionName: string;
  nip: number;
  gender: string;
  isDelete: number;
}
