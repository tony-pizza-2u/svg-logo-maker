class SVG{
    constructor(){
        this.textChoice=""
        this.shapeChoice=""
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeChoice}${this.textChoice}</svg>`;
    }
    setText(text, text_color){
        this.textChoice=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>`;
    }
    setShape(shape){
        this.shapeChoice=shape.render()
    }
}
module.exports=SVG