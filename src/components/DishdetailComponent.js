import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';
// user defined components always start with capital letters
// object destructuring, in this case we're destructuring this.props to get this.props.dish as variable dish
// we're turning this into it's own functional component
function RenderDish({ dish }){
  return(
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

function RenderComments({ comments }){
  if(comments != null){
      return(
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return(
                <li key={comment.id}>
                {comment.comment}
                <h6>-- {comment.author} , {(new Date(comment.date)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})}</h6>
                </li>
              )}
            )};
          </ul>
        </div>
    )
  }else{
    return(
      <div></div>
    );
  };
};

const DishDetail = (props) => {
  if(props.selectedDish != null){
    return(
      <div className="container">
        <div className="row">
          <RenderDish dish={props.selectedDish} />
          <RenderComments comments={props.selectedDish.comments} />
        </div>
      </div>
    );
  }else{
    console.log('No selected dish')
    return(
      <div></div>
    );
  };
};



export default DishDetail;
