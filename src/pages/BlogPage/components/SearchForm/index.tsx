import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchFormContainer } from './styles'
import { useContext, useState } from 'react';
import { IssuesContext } from '../../../../contexts/IssuesContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type searchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  
  const { fetchIssues, issues } = useContext(IssuesContext);
  
  const { register, handleSubmit, reset, formState: {isSubmitting} } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchIssues(data: searchFormInput) {
    console.log(data)
    await fetchIssues(data.query)
  }
  
  return (
    <SearchFormContainer>

      <div className='headContent'>
        <h3>Publicações</h3>
        {issues.length ? (
          <p>{issues.length} resultados</p>
        ) : (
          <p></p>
        )}
      </div>

      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
        <button type="submit" > <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar</button>
      </form>

    </SearchFormContainer>
  )
}