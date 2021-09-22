import './style.scss'
import image from '../../assets/home-images/3.jpg'
const DetailsCard = () => {
     return (
          <div className='details-wrapper'>
               <div className="details-text">
                    <div className="details-heading">
                         <h3>Review Writing</h3>
                    </div>
                    <div className="details-paragraph">
                         <p>Pagination is the process of splitting the contents of a website, or a section of contents from a website, into discrete pages</p>
                    </div>
               </div>
               <div className="details-screenshot">
                    <img src={image} alt="" />
               </div>
          </div>
     )
}

export default DetailsCard
