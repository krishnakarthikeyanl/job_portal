import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Inputfield from "../components/Inputfield";
import Newsletter from "../components/Newsletter";
const Home=()=>{
    const [selectedCategory,setSelectedCategory]=useState(null);
    const[jobs,setJobs]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const[currentPage,SetCurrentPage]=useState(1);
    const itemsPerPage = 6;
   
    useEffect(() =>{
        setIsLoading(true);
        fetch("http://localhost:5000/all-jobs").then((res)=>res.json()).then((data) =>{
            setJobs(data);
            setIsLoading(false);
        });
},[])

    const[query,setQuery] = useState("");
    const handlInputChange = (event)=>{
        setQuery(event.target.value)
    }
const filteredItems = jobs.filter((job)=>job.jobTitle?.toLowerCase().includes(query.toLocaleLowerCase()) );
const handleChange=(event)=>{
    setSelectedCategory(event.target.value)
}
const handleClick=(event)=>{
    setSelectedCategory(event.target.value)
}
const calculatePageRange =()=>{
    const startIndex=(currentPage-1)* itemsPerPage
    const endIndex=startIndex+itemsPerPage;
    return{startIndex,endIndex};
}

const nextPage=()=>{
    if(currentPage<Math.ceil(filteredItems.length/itemsPerPage)){
        SetCurrentPage(currentPage+1);
    }
}
const prevPage=()=>{
    if(currentPage>1){
        SetCurrentPage(currentPage-1)
    }
}
const filteredData=(jobs,selected,query)=>{
    let filteredJobs=jobs;
    if(query){
        filteredJobs=filteredItems;
    }

    if(selected){
        filteredJobs=filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=> 
           jobLocation?.toLowerCase() === selected.toLowerCase() ||
           parseInt(maxPrice) <= parseInt(selected) ||
           postingDate >= selected ||
           salaryType?.toLowerCase() === selected.toLowerCase() ||
           experienceLevel?.toLowerCase() === selected.toLowerCase()||
           employmentType?.toLowerCase() === selected.toLowerCase()
        )
    }
    const{startIndex,endIndex}=calculatePageRange();
    filteredJobs=filteredJobs.slice(startIndex,endIndex);
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>);
};
     const result= filteredData(jobs,selectedCategory,query);     

    return(
        <div>
            <Banner query={query} handlInputChange={handlInputChange}/>
            
            <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
               <div className="bg-white p-4 rounded"> 
               <Sidebar handleChange={handleChange} handleClick={handleClick}/>
               </div>
               <div className="col-span-2 bg-white p-4 rounded-sm"> 
               {
                isLoading ? ( <p> Loading.....</p>): result.length>0 ? <Jobs result={result} />:<> 
                <p>No Data Found!</p>
                </>
               }
               {
                result.length>0 &&(
                <div className="flex justify-center mt-4 space-x-8">
                    <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline">Previous</button>
                    <span className="mx-2">Page{currentPage} of {" "} {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)}>Next</button>
                </div>
                )
               }
               </div>
               <div className="bg-white p-4 rounded"><Newsletter/></div>
            </div>
        </div>
    )
}
export default Home;