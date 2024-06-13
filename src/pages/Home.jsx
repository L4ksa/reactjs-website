import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CourseSection'
import { tutorSection, tutorList } from '../data/TutorSection'
import { partnerList, partnerSection } from '../data/PartnerSection'
import { contactSection } from '../data/ContactSection'
import '../styles/Home.css'
import parse from 'html-react-parser'
import Partners from '../components/Partners'
import Contacts from '../components/Contacts'


function Home() {
  return (
    <>
        <Navbar />
            <div className="wrapper">
                {/* Home */}
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>

                {/* Courses */}
                <section id="courses">
                    <div className="kolom">
                        {parse(courseSection.content)}
                    </div>
                    <img src={courseSection.image}/>
                </section>

                {/* Tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                           {parse(tutorSection.content)}
                        </div>

                        <Tutors tutorlist={tutorList}/>
                    </div>
                </section>

                {/* Partners */}
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(partnerSection.content)}
                        </div>

                        <Partners partnerList={partnerList}/>
                    </div>
                </section>

                {/* Contacts */}
                <Contacts contactSection={contactSection} />
            </div>
        <Footer />
    </>
  )
}

export default Home