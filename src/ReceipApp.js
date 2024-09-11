import { useEffect, useState } from "react"
import axios from 'axios';

import Nav from "./Reciep_components/Nav"
import Banner from "./Reciep_components/Banner"
import List from "./Reciep_components/List"
import Footer from "./Reciep_components/Footer"
import Copy from "./Reciep_components/Copy"





const ReceipApp = ()=>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [frecipes, setFRecipes] = useState([])
    const[keyword, setKeyWord]=useState('');

    useEffect(() => {
        makeApiCall()
    },[])

    const handleFilter =() =>{
        const filtered_recipes = recipes.filter((recipe)=>{
            return recipe.name.toLowerCase().includes(keyword.toLowerCase())
        })
        setFRecipes(filtered_recipes)
    }
    function makeApiCall(){
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            console.log(resp.data.recipes);
            setLoading(false)
            setRecipes(resp.data.recipes)
            
        })
        .catch(function(err){
            console.log(err);
            setLoading(false)
            setError(true)
            
        })
    }


    return(
        <div className="container-fluid">
            <Nav/>
            <Banner setKeyWord={setKeyWord} keyword={keyword} handleFilter={handleFilter}/>
            <List  loading={loading} error={error} keyword={keyword} recipes={recipes} frecipes={frecipes}/>
            <Footer/>
            <Copy/>
            <h1></h1>
        </div>
    )
}





export default ReceipApp