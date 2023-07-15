import Products from "../Components/Products";

function Home(){
    return(
        <>
        <div className="hero py-16 ">  
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg"><em>Are you Hungry?</em></h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Don't wait!</h1>
                    <button className="bg-yellow-500 rounded-full text-white px-2 py-2 mt-4 hover:bg-yellow-600">Order Now</button>
                </div>

                <div className="w-1/2">
                    <img className="w-4/5"src="/Images/pizza.png" alt="pizza" />
                </div>
            </div>
        </div>  

         <Products/>
        </>
    )
}

export default Home;