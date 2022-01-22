import './style.scss'
const Footer = () => {
     const date = new Date()
     const year = date.getFullYear()
     return (
          <div className='footer-wrapper'>
               <div className="footer-heading">
                    <h2>Wanna say hey ? 👋</h2>
               </div>
               <div className="footer-mail">
                    <h4>
                         <div>Pop me an email at <span> mohammedfarisofficial@gmail.com</span> -</div>
                         <div>I’d love to hear from you !</div>
                    </h4>
               </div>
               <div className="footer-social">
                    <h3 className='resume'>
                         <a download href="https://drive.google.com/file/d/1KjJNBnagE77VJtUzcGmPY25By1LrtKpa/view?usp=sharing">Resume</a>
                    </h3>
                    <h3>LinkedIn</h3>
                    <h3>Twitter</h3>
               </div>
               <div className="footer-location">
                    <h4>Currently based :  <span mailto="mailto:no-reply@example.com" >India , kerala</span></h4>
               </div>
               <div className="footer-copyright">
                    <h4>
                         <span>&copy; {year}</span> All Rights Reserved
                    </h4>
               </div>
          </div>
     )
}

export default Footer
