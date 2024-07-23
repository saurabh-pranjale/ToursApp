import { Button } from "react-bootstrap";

function Card({tours1,Remove}){
   
    return(
        <>
     {
        tours1.map((items)=>{
       
            return(
              <section key={items.id} className="d-flex my-2 flex-column align-items-center " style={{height:'500px',width:'300px',border:'2px solid black'}}>
                <img src={items.image}  alt="image" className=" h-25 w-100" />
                <h2 className="text-center">{items.name}</h2>
                <p className="text-center">{items.info.substring(0,100)}...</p>
                <Button onClick={()=>{Remove(items.id)}} className="w-50" >Hatao</Button>
              </section>
            )
        })
     }
        </>
    )
}

export default Card;