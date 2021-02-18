import axios from 'axios';
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGameURL,
} from '../../api';

// Action Creators
export const loadGames = () => async (dispatch) => {
	// Fetch axios
	const popularData = await axios.get(popularGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	const newGamesData = await axios.get(newGamesURL());

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearched = (name) => async (dispatch) => {
	const searchedGames = await axios.get(searchGameURL(name));

	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchedGames.data.results,
		},
	});
};
