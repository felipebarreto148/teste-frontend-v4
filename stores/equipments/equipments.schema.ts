import type { IEquipment, IEquipmentState, IEquipmentModel, IEquipmentPosition, IEquipmentStateHistory, IPosition } from "~/@types";

export interface IState {
  equipments: IEquipment[];
  states: IEquipmentState[];
  models: IEquipmentModel[];
  positions: IEquipmentPosition[];
  stateHistory: IEquipmentStateHistory[];
}

export interface IEquipmentsWithMoreInfos extends IEquipment {
  model?: IEquipmentModel;
  last_position: IPosition;
}