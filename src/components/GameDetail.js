import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
// Image import
import playstation from '../img/playstation.svg';
import nintendo from '../img/nintendo.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

const GameDetail = ({ pathId }) => {
	const history = useHistory();

	// Exit Detail
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	};

	// Platform icon function
	const getPlatform = (platform) => {
		switch (platform) {
			case 'PlayStation 4':
				return playstation;
			case 'PlayStation 5':
				return playstation;
			case 'Xbox One':
				return xbox;
			case 'Xbox Series S/X':
				return xbox;
			case 'iOS':
				return apple;
			case 'PC':
				return steam;
			case 'Nintendo Switch':
				return nintendo;
			default:
				return gamepad;
		}
	};

	// Data from store
	const { game, screen, isLoading } = useSelector((state) => state.detail);

	return (
		<>
			{!isLoading && (
				<CardShadow className='shadow' onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className='rating'>
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>PLATFORMS</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<div key={data.platform.id} className='icon'>
											<img
												src={getPlatform(data.platform.name)}
												alt={data.platform.name}
											/>
											<p>{data.platform.name}</p>
										</div>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img
								layoutId={`image ${pathId}`}
								src={
									game.background_image
										? smallImage(game.background_image, 1280)
										: gamepad
								}
								alt={game.name}
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<Gallery>
							{screen.map((screen) => (
								<img
									src={screen.image ? screen.image : gamepad}
									alt={`${game.name} screenshot`}
									key={screen.id}
								/>
							))}
						</Gallery>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #bf4158;
		border-radius: 1rem;
	}
	&::-webkit-scrollbar-track {
		background-color: #f49cad;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 10rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
	@media (max-width: 1300px) {
		padding: 2rem 5rem;
	}
	@media (max-width: 800px) {
		padding: 1rem 2rem;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	h3 {
		font-size: 3rem;
		font-weight: bold;
	}
	@media (max-width: 1400px) {
		flex-direction: column;
	}
	@media (max-width: 800px) {
		h3 {
			font-size: 2rem;
		}
	}
`;

const Info = styled(motion.div)`
	text-align: right;
	h3 {
		font-family: 'Ceviche One', cursive;
		font-size: 2rem;
		color: #ff3d33;
	}
	@media (max-width: 1400px) {
		text-align: center;
	}
	@media (max-width: 800px) {
		margin: 1rem 0;
		text-align: left;
		h3 {
			font-size: 1.6rem;
		}
	}
`;

const Platforms = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	.icon {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-left: 1rem;
		p {
			font-size: 0.8rem;
		}
		img {
			width: 3rem;
			height: 3rem;
			margin-top: 0.3rem;
		}
		@media (max-width: 1400px) {
			img {
				width: 2rem;
				height: 2rem;
			}
		}
	}
	@media (max-width: 800px) {
		justify-content: flex-start;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
	@media (max-width: 800px) {
		margin-top: 2rem;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
	@media (max-width: 800px) {
		margin: 2rem 0rem;
	}
`;

const Gallery = styled(motion.div)`
	img {
		width: 100%;
	}
`;

export default GameDetail;
