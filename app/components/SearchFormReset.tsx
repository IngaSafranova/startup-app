import React from 'react'

{
  /* we cannot have button in server side component so we need to create new resetcomponenet */
}
const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search_form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type='reset' onClick={reset} >
    
              </button>
  )
}

export default SearchFormReset