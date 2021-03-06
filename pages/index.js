import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return(
  <Box>
    <img src = {`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}}/>
  </Box>
  )
}

export default function Home() {
  const userAleatorio = 'Alfirinaur';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'thiagotoyomoto', 
    'tibianobr', 
    'felipefialho'
  ]

  return ( 
    <>
    <AlurakutMenu />
    <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSideBar githubUser={userAleatorio}/>
    </div>

    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>    
      <Box>
        <h1 className="tile">
        Bem vindo(a)
        </h1>
        <OrkutNostalgicIconSet />
      </Box>
    </div>

    <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Comunidade ({pessoasFavoritas.length})
      </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
      </ProfileRelationsBoxWrapper>
    </div>
      
    </MainGrid>
    </>
  ) 
}
