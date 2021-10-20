function Button({title,clr}){
    return (
        <div>
             <button className="Button" style ={{backgroundColor:clr}}>{title}</button>
        </div>
    )
}

export {Button}