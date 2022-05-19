
function Card(){
return(
<div className="card">
            <div className="card-favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
                <img width={250} height={250} src="/products/la-roshe.jpg" alt="product" className="mb-15"></img>
                  <div className="product-name mb-20">La roche posay Effaclar Gel Exfoliante Puro 400ml</div>
                  <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>
                        Ціна:
                      </span>
                      <b>500 ₴</b>
                    </div>
                      <button>
                      <img width={11} height={11} src="/img/plus.svg" alt="Plus" /> 
                      </button>
                  </div>
            </div>
        );
    }

    export default Card;