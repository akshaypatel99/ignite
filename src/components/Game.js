import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../redux/actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animation';
import gamepad from '../img/gamepad.svg';

const Game = ({ game }) => {
	const name = game.name,
		released = game.released,
		image = game.background_image,
		id = game.id;

	const stringPathId = id.toString();

	// Load Details
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = 'hidden';
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame
			layoutId={stringPathId}
			onClick={loadDetailHandler}
			variants={popup}
			initial='hidden'
			animate='show'
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={image ? smallImage(image, 1280) : gamepad}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	background: #f7f7ff;
	color: #343659;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}

	@media (max-width: 700px) {
		h3 {
			font-size: 1.25rem;
			padding: 0.5rem;
		}
	}
`;

export default Game;
