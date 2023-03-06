import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadGames } from '../redux/actions/gamesAction';
import styled from 'styled-components';
import {
	motion,
	AnimatePresence,
	AnimateSharedLayout,
} from 'framer-motion';
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import { fadeIn } from '../animation';

const Home = () => {
	// Get location
	const location = useLocation();
	// Get Game ID from URL (location.pathname)
	const pathId = location.pathname.split('/')[2];
	// Fetch Games
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	// Get Games from Redux store
	const { popular, upcoming, newGames, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList
			variants={fadeIn}
			initial='hidden'
			animate='show'>
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<motion.div className='searched'>
						<motion.h2>Search Results</motion.h2>
						<Games>
							{searched.map((game) => (
								<Game
									key={game.id}
									game={game}
								/>
							))}
						</Games>
					</motion.div>
				) : (
					''
				)}
				<motion.div className='upcoming'>
					<motion.h2>Upcoming Games</motion.h2>
					<Games>
						{upcoming.map((game) => (
							<Game
								key={game.id}
								game={game}
							/>
						))}
					</Games>
				</motion.div>
				<motion.div className='popular'>
					<motion.h2>Popular Games</motion.h2>
					<Games>
						{popular.map((game) => (
							<Game
								key={game.id}
								game={game}
							/>
						))}
					</Games>
				</motion.div>
				<motion.div className='newgames'>
					<motion.h2>New Games</motion.h2>
					<Games>
						{newGames.map((game) => (
							<Game
								key={game.id}
								game={game}
							/>
						))}
					</Games>
				</motion.div>
			</AnimateSharedLayout>
			<a href='https://rawg.io/apidocs'>Data supplied by RAWG</a>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 4rem 0rem;
		&:hover {
			color: #ff3d33;
		}
	}
	@media (max-width: 800px) {
		padding: 0rem 3rem;
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;

	@media (max-width: 800px) {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`;

export default Home;
