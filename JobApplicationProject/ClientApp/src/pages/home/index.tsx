import { useDispatch } from 'react-redux'
import { HeroSection, SearchSection, JobReferences, TopCompanySection, CareerSection } from './components'
import { setNavigation } from 'apps/navBar.slice'
import { useEffect } from 'react'

const Home = (props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setNavigation(-1))
    }, [dispatch])
    return (
        <div>
            <HeroSection />
            <SearchSection />
            <JobReferences />
            <TopCompanySection />
            <CareerSection />
        </div>
    )
}

export default Home
