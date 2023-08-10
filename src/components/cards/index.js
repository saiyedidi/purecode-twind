import React from "react";
import './index.css'
import blogObj from "../data";
const Cards = () => {
    return (
        <>
            <div className="bg-cards">
                <div className="cards-blog">
                    <h3>blogs</h3>
                    <div className="card-flex">
                        {blogObj.map((item) =>
                            <>
                                <div className="card">
                                    <div className="cnt">
                                        <img src={item.image} width='100%' />
                                        <div className="card-cnt">
                                            <h4 className="fashion">{item.type}</h4>
                                            <h3>{item.title}</h3>
                                            <p className="des">
                                                {item.subTitle}
                                            </p>
                                            <div className="employee">
                                                <div className="profile">
                                                    <img src="https://mannatthemes.com/T-Wind/default/assets/images/users/avatar-3.jpg" />
                                                    <div className="Fitbit">
                                                        <div>Fitbit Incorporation</div>
                                                        <div className="designation">San Diego, California</div>
                                                    </div>
                                                </div>
                                                <div className="profile-click">
                                                    <div className="read-more">
                                                        <p>read more <i className="fa fa-arrow-right"></i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Cards