
import Card from "../components/Card"
function Favorite({items}){

    return(
        <section className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
            <h1 className=""> Список побажань</h1>
        </div>
        <div className="products d-flex m-w1400">
          {items.map((item,index) =>(
              <Card
                key={index}
                title = {item.title}
                price = {item.price}
                imgageUrl={item.imgageUrl}
                type = {item.type}
            />
            ))}
          </div>

    </section> 
    )
}
export default Favorite