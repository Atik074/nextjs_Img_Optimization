"use client"

const ErrorPage = ({error , reset}) => {
    return (
        <div>
            <h2 className="text-3xl text-red-600 text-center">something is error : {error.message}</h2>
              <button onClick={()=>reset()}>Try again</button>
        </div>
    );
};

export default ErrorPage;