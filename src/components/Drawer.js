
function Drawer(props){
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className="mb-40">Кошик  <img onClick={props.onClose} className="drawer__remove-btn" src="/img/btn-remove.svg" alt="remove"/></h2>
              <div className="drawer__items">
                  <div className="cardItem">
                    <img className="mr-20" width={70} height={70} src="/products/la-roshe.jpg" alt="product"/>
                      <div className="mr-20">
                        <p className="mb-5">La roche posay Effaclar Gel Exfoliante Puro 400ml</p>
                        <b>666 грн</b>
                      </div>
                    <img className="drawer__remove-btn" src="/img/btn-remove.svg" alt="remove"/>
                  </div>
                  <div className="cardItem">
                    <img className="mr-20" width={70} height={70} src="/products/la-roshe.jpg" alt="product"/>
                      <div className="mr-20">
                        <p className="mb-5">La roche posay Effaclar Gel Exfoliante Puro 400ml</p>
                        <b>666 грн</b>
                      </div>
                    <img className="drawer__remove-btn" src="/img/btn-remove.svg" alt="remove"/>
                  </div>
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
        </div>
      </div>
    );
}

export default Drawer