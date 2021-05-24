import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const isBrowser = typeof window !== "undefined"

const createLocalStorage = (plain) => {
  let parameterKey = queryString.parse(plain)

  if(isBrowser){
    if(parameterKey.plain) {
      window.localStorage.setItem("plain", true)

    } else {
      window.localStorage.removeItem("plain")
    }
  }
}

const withLocation = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => {
      
    createLocalStorage(location.search)
    return (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}}
  </Location>
)

export default withLocation;