import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

function SearchForm() {
  const query = 'Test'
  

  return (
    <Form action='/' scroll={false} className='search-form'  >
      <input name='query'
        defaultValue={query}
        className='search-input'
        placeholder = 'Search Startups'
      />
      <div className='flex gap-2' >
        {/* if we have active query button will reset it */}
        {/* we cannot have button in server side component so we need to create new resetcomponenet */}
        {query && <SearchFormReset/>
          
      }
      </div>
    </Form>
  )
}

export default SearchForm