import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup, faArrowUpRightFromSquare, faCalendarDay, faComment, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Info, TitlePostContainer } from "./styles";
import { Link } from 'react-router-dom';

export function TitlePostCard() {
  return (
    <TitlePostContainer>
      <div className='links'>
        <Link to='/'> <FontAwesomeIcon icon={faChevronLeft} /> Voltar </Link>
        <a href="">VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
      </div>

      <h2>JavaScript data types and data structures</h2>

      <Info>
        <span><FontAwesomeIcon icon={faGithub} /></span>
        <p>cameronwll</p>

        <span><FontAwesomeIcon icon={faCalendarDay} /></span>
        <time>Há 1 dia</time>

        <span><FontAwesomeIcon icon={faComment} /></span>
        <p>5 comentários</p>
      </Info>
    </TitlePostContainer>
  )
}