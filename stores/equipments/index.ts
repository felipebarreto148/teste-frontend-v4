// Constants
import equipments from "@/data/equipment.json";
import states from "@/data/equipmentState.json";
import models from "@/data/equipmentModel.json";
import positions from "@/data/equipmentPositionHistory.json";
import statesHistory from "@/data/equipmentStateHistory.json";

// Types
import type { IEquipmentsWithMoreInfos, IState } from "./equipments.schema";

export const useEquipmentsStore = defineStore('equipments', {
  state: (): IState => ({
    states: [],
    models: [],
    positions: [],
    equipments: [],
    stateHistory: []
  }),
  getters: {
    equipmentsWithMoreInfos: (state): IEquipmentsWithMoreInfos[] => {
      return state.equipments.map(eqp => {
        // Recupera a última posição do equipamento.
        const last_position = state.positions.filter(p => p.equipmentId === eqp.id).pop()!.positions[positions.length - 1];
        // Recupera o modelo do equipamento.
        const model = state.models.filter(m => m.id === eqp.equipmentModelId).pop();
        return {
          ...eqp,
          last_position,
          model
        }
      });
    }
  },
  actions: {
    async getEquipments(name?: string) {
      this.equipments = name ? equipments.filter(eqp => eqp.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) : equipments;
    },
    async getStates() {
      this.states = states;
    },
    async getEquipmentsModels() {
      this.models = models;
    },
    async getEquipmentsPositionHistory() {
      this.positions = positions;
    },
    async getEquipmentStateHistory() {
      this.stateHistory = statesHistory;
    },
  }
})