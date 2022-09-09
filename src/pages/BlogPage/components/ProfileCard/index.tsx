import { useEffect, useState } from 'react';
import { api } from '../../../../libs/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup, faBuilding, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { ProfileCardContainer, ProfileContentContainer, Info, Bio, Name } from './styles';

interface User {
  avatar: string,
  name: string,
  bio: string,
  login: string,
  company: string,
  followers: string,
  gitUrl: string,
}

export function ProfileCard() {

  const [userInfo, setUserInfo] = useState<User>({} as User);

  async function getUser() {
    const response = await api.get('/users/Mathews-mw');
    const data = await response.data;

    setUserInfo({
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
      gitUrl: data.html_url,
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileCardContainer>

      <div className='avatarContainer'>
        <img src={userInfo.avatar} alt="Foto de perfil" className='avatar' />
      </div>

      <ProfileContentContainer>
        <Name>
          <h2>{userInfo.name}</h2>
          <a href={userInfo.gitUrl} > GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </Name>

        <Bio>
          <p>
            {userInfo.bio}
          </p>
        </Bio>

        <Info>
          <span><FontAwesomeIcon icon={faGithub} /></span>
          <p>{userInfo.login}</p>

          <span><FontAwesomeIcon icon={faBuilding} /></span>
          <p>{userInfo.company}</p>

          <span><FontAwesomeIcon icon={faUserGroup} /></span>
          <p>{userInfo.followers}</p>
        </Info>
      </ProfileContentContainer>
    </ProfileCardContainer>
  )
}