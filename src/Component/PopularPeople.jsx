import React, { useEffect, useState } from 'react'
import './movielist.css'
import PeopleCards from './PeopleCards'

const PopularPeoples = () => {

    const [popularPeople, setPopularPeople] = useState([])

    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then((res) => res.json())
        .then((res) => setPopularPeople(res.results))
    }
    
  return (
    <div className='MovieList'>
            <h5 className='listTitle'> List of Popular Peoples.</h5>
            <div className='listCards'>
                {
                    popularPeople.map(person => (
                        <PeopleCards key={person.id} people={person} />
                    ))
                }
            </div>
        </div>
  )
}

export default PopularPeoples
