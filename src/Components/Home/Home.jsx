import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";



const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className="max-w-6xl mx-auto ">
            
            <Banner></Banner>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {
                categories.map(category =><Categories category={category} key={category.id}></Categories>)
            }
            </div>
           
        
            
        </div>
    );
};

export default Home;