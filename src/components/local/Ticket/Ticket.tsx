const Tiket = () => {
   return (
      <div className="content__tikets">
         <div className="tiket__body" >
            <div className="tiket__price">
               <h2 className="tiket__price-text">
                     Р
               </h2>
            </div>
            <div className="tiket__logo">
               <img src="#" alt="Logo" className="tiket__logo-img" />
            </div>
            <div className="tiket__time tiket__details">
               <div className="tiket__title">
                  <h2 className="tiket__title-text">
                     SVO - LED
                  </h2>
               </div>
               <div className="tiket__subtitle">
                  <h2 className="tiket__subtitle-text">
                     
                  </h2>
               </div>
            </div>
            <div className="tiket__duration tiket__details">
               <div className="tiket__title">
                  <h2 className="tiket__title-text">
                     В пути
                  </h2>
               </div>
               <div className="tiket__subtitle">
                  <h2 className="tiket__subtitle-text">
                     
                  </h2>
               </div>
            </div>
            <div className="tiket__transplants tiket__details">
               <div className="tiket__title">
                  <h2 className="tiket__title-text">
                     Пересадки
                  </h2>
               </div>
               <div className="tiket__subtitle">
                  <h2 className="tiket__subtitle-text">
                     
                  </h2>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Tiket;