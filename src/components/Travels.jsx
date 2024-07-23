import Card from "./Card"

function Travels ({tours,Remove}){

    console.log(Remove)
   
    return(
        <>
        <h1 className="text-center py-3 bg-info fw-bolder">Welcome to Our Travel Agency 😎</h1>
        <section className="w-100 bg-warning d-flex flex-row justify-content-evenly flex-wrap">
        <Card tours1={tours} Remove={Remove}/>
        </section>
        </>
    )
}

export default Travels