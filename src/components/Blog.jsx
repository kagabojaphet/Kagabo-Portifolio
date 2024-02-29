import React from "react";
import { Carousel } from 'antd';
import kjeff from "../assests/gigi.jpg";
import kajeff from "../assests/k.japhet.jpg";
import k_jeff from "../assests/kagabo.png";
import kjeph from "../assests/uu-r.png";

const Blogs=()=>{
    return(
        <>
        <div className="blogs-container">
            <div className="blogs-left">
            <h1>BLOGS</h1>
            <div className="blogs">
            <div className="blogs-image">
                    <Carousel autoplay className="image">
    <div>
  
      <img src={k_jeff}alt="" />
    </div>
    <div>
      <img src={kajeff} alt="" />
    </div>
    <div>
      <img src={kjeff} alt="" />
    </div>
    <div>
      <img src={kjeph} alt="" />
    </div>
  </Carousel>
                </div>
            </div>

            </div>
            <div className="blogs-right">
                <h2>MY BLOGS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus ipsa error possimus 
                    dolore totam enim amet, aperiam sunt praesentium quis. Doloremque recusandae excepturi 
                    atque minima repellendus? Iusto, possimus ducimus!</p>
                    <div className="blog-card">
                    <div className="blog-news">
                            <img src='https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" />
                            <div className="view">
                            <div className="like">
                            <i class='bx bx-like'>2</i>
                            <i class='bx bx-dislike'>4</i>
                            <i class='bx bx-comment'>4</i>
                            </div>
                            <div className="title">
                            <h3>Nyabike</h3>
                            </div>
                            <div className="date">
                            <h5>16/02/2024</h5>
                            </div>
                            </div>
                            <h5>Lorem ipsum dolor sit amet consectetur </h5>
                            <a href="@">Read more...</a> 
                        </div>
                        <div className="blog-news">
                            <img src='https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" />
                            <div className="view">
                            <div className="like">
                            <i class='bx bx-like'>2</i>
                            <i class='bx bx-dislike'>4</i>
                            <i class='bx bx-comment'>4</i>
                            </div>
                            <div className="title">
                            <h3>Nyabike</h3>
                            </div>
                            <div className="date">
                            <h5>16/02/2024</h5>
                            </div>
                            </div>
                            <h5>Lorem ipsum dolor sit amet consectetur </h5>
                            <a href="@">Read more...</a> 
                        </div>
                        <div className="blog-news">
                            <img src='https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" />
                            <div className="view">
                            <div className="like">
                            <i class='bx bx-like'>2</i>
                            <i class='bx bx-dislike'>4</i>
                            <i class='bx bx-comment'>4</i>
                            </div>
                            <div className="title">
                            <h3>Nyabike</h3>
                            </div>
                            <div className="date">
                            <h5>16/02/2024</h5>
                            </div>
                            </div>
                            <h5>Lorem ipsum dolor sit amet consectetur </h5>
                            <a href="@">Read more...</a> 
                        </div>
                        <div className="blog-news">
                            <img src='https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" />
                            <div className="view">
                            <div className="like">
                            <i class='bx bx-like'>2</i>
                            <i class='bx bx-dislike'>4</i>
                            <i class='bx bx-comment'>4</i>
                            </div>
                            <div className="title">
                            <h3>Nyabike</h3>
                            </div>
                            <div className="date">
                            <h5>16/02/2024</h5>
                            </div>
                            </div>
                            <h5>Lorem ipsum dolor sit amet consectetur </h5>
                            <a href="@">Read more...</a> 
                        </div>
                    </div>
 
            </div>
        </div>
        </>
    )
}
export default Blogs