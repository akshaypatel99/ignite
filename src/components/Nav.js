import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchSearched } from '../redux/actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animation';

const Nav = () => {
	const [textInput, setTextInput] = useState('');
	const dispatch = useDispatch();

	const inputHandler = (e) => {
		e.preventDefault();
		setTextInput(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		dispatch(fetchSearched(textInput));
	};

	const clearSearched = () => {
		dispatch({
			type: 'CLEAR_SEARCHED',
		});
	};

	return (
		<StyledNav variants={fadeIn} initial='hidden' animate='show'>
			<Logo onClick={clearSearched}>
				<h1>&#x1f4a5; IGNITE</h1>
			</Logo>
			<form className='search'>
				<input onChange={inputHandler} value={textInput} type='text' />
				<button onClick={searchHandler} type='submit'>
					SEARCH
				</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.2rem;
		padding: 0.75rem;
		border: none;
		margin-top: 2rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		outline-color: #ff3d33;
		font-weight: bold;
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.75rem 2rem;
		background: #51548c;
		/* background: #ff3d33; */
		color: white;
		font-family: 'Ceviche One', cursive;
		cursor: pointer;
		&:hover {
			background: #ff3d33;
		}
	}
	@media (max-width: 1400px) {
		input {
			width: 40%;
		}
	}
	@media (max-width: 700px) {
		padding: 1rem 2rem;
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		input {
			width: 80%;
			padding: 0.5rem;
		}
		button {
			width: 80%;
			padding: 0.5rem 1rem;
		}
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	color: #ff271a;
	font-family: 'Ceviche One', cursive;
	font-size: 3rem;
	@media (max-width: 700px) {
		font-size: 2.75rem;
	}
`;

export default Nav;
