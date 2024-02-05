import Sidebar from '../Sidebar/Sidebar'
import Filtration from '../Filtration/Filtration'
import Ticket from '../Ticket/Ticket'
import Button from '../Button/Button'

const Content = () => {
   return (
      <section className="content__page page">
         <div className="content__container container">
            <div className="content__body body">
               <div className="content__card">
                  <Sidebar/>
                  <Filtration/>
                  <Ticket/>
                  <Button/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Content