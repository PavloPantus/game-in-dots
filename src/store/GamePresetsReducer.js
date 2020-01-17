import { getGameSettingsFromServer } from '../API';

const SET_PRESETS = 'SET_PRESETS';

export const getPresets = state => state.presets;

const setPresets = payload => ({
  type: SET_PRESETS,
  payload,
});

export const loadPresets = () => (dispatch) => {
  getGameSettingsFromServer()
    .then(
      (settings) => {
        dispatch(
          setPresets(settings)
        );
      }
    )
    .catch()
    .finally();
};

export const PresetsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRESETS: return action.payload;
    default: return state;
  }
};
