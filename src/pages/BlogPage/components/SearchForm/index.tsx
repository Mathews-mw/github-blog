import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>

      <div className='headContent'>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>

      <form action="">
        <input type="text" placeholder="Buscar conteúdo"/>
        <button type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar</button>
      </form>

    </SearchFormContainer>
  )
}