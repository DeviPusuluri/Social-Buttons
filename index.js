const Button = props => {
   const {className,buttonText}=props;
   return <button className={`${className}`}>{buttonText}</button>
  //  Write your code here.
}

const element = (
    <div>
        <h1>Social Buttons</h1>
        <div className="buttonContainer" >
             <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
        </div>
    </div>

  //  Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
