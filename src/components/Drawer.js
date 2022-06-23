
function Drawer({onRemove,onClose,items = []}){
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className="mb-40">Кошик<img onClick={onClose} className="drawer__remove-btn" src="/img/btn-remove.svg" alt="remove"/></h2>
          {
            items.length>0?(
          <div>              
                <div className="drawer__items">
                {
                  items.map((obj) =>(
                    <div key = {obj.id} className="cardItem">
                      <img className="mr-20" width={70} height={70} src={obj.imgageUrl} alt="product"/>
                        <div className="mr-20">
                          <p className="mb-5">{obj.title}</p>
                          <b>{obj.price}грн.</b>
                        </div>
                      <img onClick ={() => onRemove(obj.id)}  className="drawer__remove-btn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>
                  ))
                }
            </div>
            <div className="drawer__total">
                  <ul>
                    <li className="d-flex mb-30">
                      <span>Вартість</span>
                      <div></div>
                      <b>12223грн.</b>
                    </li>
                  </ul>
                  <button className="greenButton">
                    Оформлення заказу 
                    <img src="/img/arrow.svg" alt="arrow" /></button>
              </div>
          </div>):(
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
              <h2>Кошик порожній</h2>
              <p className="opacity-6">Додайте хоча б один товар, щоб зробити замовлення.</p>
              <button onClick={onClose} className="greenButton">
                <img src="/img/arrow.svg" alt="Arrow" />
                Повернутися назад
              </button>
          </div>)
          }


        </div>
      </div>
    );
}

export default Drawer