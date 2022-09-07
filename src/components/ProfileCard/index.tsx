import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { ProfileCardContainer, ProfileContentContainer, Info, Bio, Name } from './styles'


export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <div className='avatarContainer'>
        <img src="https://source.unsplash.com/random/900×700/?dogs" alt="" className='avatar' />
      </div>

      <ProfileContentContainer>
        <Name>
          <h2>Mathews Araújo</h2>
          <a href="">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
        </Name>

        <Bio>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
        </Bio>

        <Info>
          <span><FontAwesomeIcon icon={faGithub} /></span>
          <p>cameronwll</p>

          <span><FontAwesomeIcon icon={faBuilding} /></span>
          <p>Rocketseat</p>

          <span><FontAwesomeIcon icon={faUserGroup} /></span>
          <p>32 seguidores</p>
        </Info>
      </ProfileContentContainer>
    </ProfileCardContainer>
  )
}