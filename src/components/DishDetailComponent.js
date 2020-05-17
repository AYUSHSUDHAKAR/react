import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state= {

        };
    }

    renderComments(dish) {

        if(dish != null){
            this.state.comments=dish.comments.map((comment) => {
                return(
                    <li>
                        {comment.comment}<br/>
                        --{comment.author}, {comment.date}
                    </li>
                )
            })
        }
        else{
            return(<div></div>);
        }

        return(
            <span>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {this.state.comments}
            </ul>
            </span>
        )      
    }

    renderDish(dish) {
        
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

    render() {
        const dish=this.props.dishDetail; 
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish)}
                </div>
            </div> 
        )
    }
}

export default DishDetail;