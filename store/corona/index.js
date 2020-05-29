import axios from "axios";

export const state = () => ({
  list: [],
});

export const mutations = {
  MERGE_CORONA_LIST: (state, payload) => {
    state.list = state.list.concat(payload);
  },
};

export const actions = {
  async fetchCoronaData({ commit }) {
    const { data } = await axios.get(
      `https://covid19-japan-web-api.now.sh/api/v1/prefectures`
    );
    commit("MERGE_CORONA_LIST", data);
  },
};
