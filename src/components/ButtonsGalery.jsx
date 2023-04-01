export function ButtonsGalery(props){
    return (
      <>
        <button
          onClick={props.nextImg}
          disabled={
            !props.slideState.state &&
            props.imgsList.indexOf(props.img) === props.imgsList.length - 1
          }
          type="button"
          className=" button btn btn-secondary"
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>

        <button
          onClick={props.previousImg}
          disabled={
            !props.slideState.state && props.imgsList.indexOf(props.img) === 0
          }
          className="button btn btn-secondary"
          type="button"
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
        <button
          onClick={props.setInfintiSlide}
          className="button btn btn-secondary"
        >
          show in loop? {props.slideState.icon}
        </button>

        <button onClick={props.deleteImg} className="button btn btn-secondary">
          <i className="bi bi-trash3"></i>
        </button>
       
      </>
    );
}