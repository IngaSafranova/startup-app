import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

function SearchForm({ query }: { query?: string}) {
  
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
        {query && <SearchFormReset />}
        <button type='submit' className='search-btn text-white' >
          <Search className='size-5' />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm