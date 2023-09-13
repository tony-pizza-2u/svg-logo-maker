const inquirer = require("inquirer");
const SVG = require("./lib/svg.js");
const {Triangle, Circle, Square} = require("./shapes.js");
const {writeFile} = require("fs/promises");

class CLI{
    run(){
        return inquirer
        .prompt([
            {
                name: "text",
                type: "input",
                message: "please enter up to 3 characters",
            },
            {
                name: "text_color",
                type: "input",
                message: "please choose a text color",
            },
            {
                name: "shape",
                type: "list",
                choices: ["triangle", "circle", "square"],
                message: "please choose either triangle, circle, or square",
            },
            {
                name: "shape_color",
                type: "input",
                message: "please choose a shape color",
            },
        ]) .then(({text, text_color, shape, shape_color}) => {
            let chosenShape;
            switch (shape){
                case"triangle":
                chosenShape = new Triangle()
                break;

                case"circle":
                chosenShape = new Circle()
                break;

                case"square":
                chosenShape = new Square()
                break;
            }
            chosenShape.setColor(shape_color);
            const svg = new SVG();
            svg.setText(text, text_color);
            svg.setShape(chosenShape);
            return writeFile("logo.svg",svg.render())

        })
        .then(()=>{
            console.log("logo.svg has been generated");
        })
        .catch((err)=>{
            console.log("unsuccessful",err);
        })
    }
}