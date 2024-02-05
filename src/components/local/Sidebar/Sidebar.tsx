const Sidebar = () => {
   return (
      <div className="content__sidebar">
         <div className="sidebar__card checkbox">
            <div className="sidebar__card-title">
               <h2 className="card__title">
                  Количество пересадок
               </h2>
            </div>
            <form className="sidebar_card-checkbox">
            <label className="checkbox" htmlFor={'nonStop'}>
               <input type="checkbox" value={0} id={'nonStop'}/>
                  Без пересадок        
            </label>
            <label className="checkbox" htmlFor={'1Change'}>
               <input type="checkbox" value={1} id={'1Change'}/>
                  1 пересадка      
            </label>
            <label className="checkbox" htmlFor={'2Change'}>
               <input type="checkbox" value={2} id={'2Change'}/>
                  2 пересадки    
            </label>
            <label className="checkbox" htmlFor={'3Change'}>
               <input type="checkbox" value={3} id={'3Change'}/>
                  3 пересадки    
            </label>
            </form>
         </div>
         <div className="sidebar__card radio">
            <div className="sidebar__card-title">
               <h2 className="card__title">
                  Компании
               </h2>
            </div>
            <form className="sidebar_card-checkbox">
               <label className="checkbox" htmlFor={'victory'}>
                  <input name={'company'} type="radio" value={'victory'} id={'victory'}/>
                  Победа
               </label>
               <label className="checkbox" htmlFor={'redWings'}>
                  <input name={'company'} type="radio" value={'redWings'} id={'redWings'}/>
                  Red Wings
               </label>
               <label className="checkbox" htmlFor={'S7'}>
                  <input name={'company'} type="radio" value={'S7'} id={'S7'}/>
                  S7 Airlines
               </label>
            </form>
         </div>
      </div>
   )
}

export default Sidebar