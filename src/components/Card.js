import React from 'react';

const Card = (props) =>{
    return (
        <>
        <div className={`flex flex-col bg-white shadow-lg m-4 p-6 my-16 mx-10 rounded ${props.job.featured && "border-l-4 border-blue-500 border-solid"} sm:flex-row `} >
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:w-24 sm:h-24 sm:my-0 " src={props.job.logo} alt={props.job.company} />
            </div>

            <div className="ml-4 flex flex-col justify-between ">
                <h3 className="font-bold text-blue-300" >
                    {props.job.company}
                    {props.job.new && (<span className="text-white bg-blue-500 m-2 font-bold px-2 py-1 rounded-full" >New</span>)}
                    {props.job.featured && (<span className="text-white bg-gray-800 m-2 font-bold px-2 py-1 rounded-full" >Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl my-2">{props.job.position}</h2>
                <p className="text-grey-400">{props.job.postedAt} . {props.job.contract} . {props.job.location}</p>
            </div>

            
            <div className="flex flex-wrap item-center mt-4 mx-4 pt-4 border-t-2 border-gray-500 border-solid sm:pt-0 sm:mt-0 sm:justify-center sm:ml-auto sm:border-0 sm:h-8"/* style={{height:'60px'}}*/>
                <span className="text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded" >{props.job.level}</span> 
                <span className="text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded" >{props.job.role}</span> 
                {
                    props.job.languages ? (props.job.languages.map((language) =>(<span className="text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded" >{language}</span> )) ): ('')
                }
                {
                    props.job.tools ? (props.job.tools.map((tool) =>(<span className="text-blue-500 bg-blue-100  font-bold mr-4 mb-4 p-2  rounded">{tool}</span> )) ): ('')
                }
            </div>
        </div>

        </>
    );
}

export default Card;

 /* "homepage": "https://ummu2222.github.io/job",*/
 /*"predeploy": "yarn run build",
    "deploy": "gh-pages -d build",*/ 