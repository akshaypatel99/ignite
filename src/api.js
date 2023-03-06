// Base URL
const base_url = 'https://api.rawg.io/api/';

const apiKey = process.env.REACT_APP_API_KEY;
const keyParams = `key=${apiKey}`;

// Getting the date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// Getting the date
const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?${keyParams}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?${keyParams}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?${keyParams}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game Details
export const gameDetailsURL = (gameId) =>
	`${base_url}games/${gameId}?${keyParams}`;

// Game ScreenShots
export const gameScreenshotURL = (gameId) =>
	`${base_url}games/${gameId}/screenshots?${keyParams}`;

// Searched game
export const searchGameURL = (gameName) =>
	`${base_url}games?${keyParams}&search=${gameName}&page_size=10`;
