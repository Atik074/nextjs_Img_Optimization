import Image from "next/image";


export const metadata = {
     title:'gallery' ,
    description:'our gallery  section'
}


const Gallery = () => {
    return (
        <div>
            <h1 className="text-3xl text-center mt-10">Image optimization in next.js</h1>
         
            <Image src='https://blog.logrocket.com/wp-content/uploads/2023/05/Structure-scalable-Next-js-project-architecture.png' 
            alt="next"
            className="rounded mx-auto mt-10 shadow-2xl"
             width={500}
             height={500} 
            /> 

        </div>
    );
};

export default Gallery;