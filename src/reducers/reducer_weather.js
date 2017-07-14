import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
					//this doesn't mutate the state it adds the new data to the old and returns a new instance kinda
			//return state.concat([action.payload.data]);
			//es6 way
			return [ action.payload.data, ...state ];
	}
	return state;
}