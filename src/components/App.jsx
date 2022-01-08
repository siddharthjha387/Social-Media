import React, { useState } from "react";
import posts from "../posts.js";
function App() {
    console.log(posts);
    return (
        <div>
            <h1>Hello World</h1>
            {posts.map(item => {
                return (<div className="outer">
                    <div className="postContainer">
                        <img className="dp"
                            src={item.dpUrl}
                            alt="" />
                        <h3 className="username">{item.name}</h3><br />
                        <img className="postImg" width="600" height="400"
                            src={item.imgUrl}
                            alt="" />
                        <p>{item.caption}</p>

                    </div>
                </div>);
            })}

        </div>

    );
}
export default App;
