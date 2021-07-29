import React from "react";

function Data(props) {
    const displayData = (props) => {
        const { data } = props;

        const imgStyle={
          margin:"20px 0 30px 0"
        }
        const ulStyle={
        
            listStyleType: "none",
            textAlign: "center"
        }
        

        if (data.length > 0) {
            return (
                data.map((val, index) => {
                    //'console.log(val);
                    return (
                        <div className="border border-info" style={{margin: "auto", width: "30vw"}} key={index}>
                            <ul className="fs-2" style={ulStyle} >
                                <img className="img-fluid" style={imgStyle} src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="avatar"/>
                                <li className="fw-bold" style={{color: "#FF1493"}}>Name: {val.name}</li>
                                <li>Gender: {val.gender}</li>
                                <li>Height: {val.height}</li>
                            </ul>
                        </div>
                    );
                })
            )
        }
        
    };

    return <>{displayData(props)}</>;
}

export default Data;

