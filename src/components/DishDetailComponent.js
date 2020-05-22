import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null) {
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
            );
        }
        else {
            return(<div></div>);
        }
    }

function RenderComments({dish}) {

        if(dish != null){
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            let comm;
            comm = dish.comments.map((comment) => {
                return(
                    <li>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, <span>{new Date(comment.date).toLocaleDateString("en-US", options)}</span></p>
                    </li>
                )
            });
            return(
            <span>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comm}
            </ul>
            </span>
        )      
        }
        else{
            return(<div></div>);
        }
    }

const DishDetail=(props)=>{
    return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                </div>
            </div> 
            </div>
        )
}

export default DishDetail;