import { styled } from 'styled-components'

export const UserStyled = styled.div`
  display: flex;
  width: 358px;
  height: 50px;
  gap: 1.2rem;
`

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

export const UserDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-self: center;
`

export const UserName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`

export const UserId = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #767676;
`
