import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderMenuComponent({dish,onClick}){

    return(<Card key={dish.id} onClick={() => onClick(dish.id)}>
                        <CardImg width="100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>)
}


    /*renderDish(dish) {
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
            return(
                <div></div>
            );
        }
    }*/


const Menu=(props) =>{
    const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <RenderMenuComponent dish={dish} onClick={props.onClick} />
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}
        

        /*<div>
                    {this.renderDish(this.state.selectedDish)}
                </div>
        */

export default Menu;        