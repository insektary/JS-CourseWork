import {Util} from "./Util"
import {ObjectsField} from "./ObjectsField"

export class Field {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.x0 = 0;
        this.y0 = 0;
        this.cellSize = Util.cellSize;
        this.Field = this.createField();
        this.objects = [];

    }
     
    addObject(obj){
        this.objects.push(obj);
    }

    renderObjects(){
        this.objects.forEach(function(obj){
            obj.x;
            obj.y;
            if 
            this.ctx.fillStyle = "#8B0000";
            this.ctx.fillRect(x,y,this.cellSize,this.cellSize);
            this.ctx.stroke();
        })
    }

    getColumns() {
        return Util.getCellsCount(this.canvas.clientWidth);
    
    }

    getRows() {
        return Util.getCellsCount(this.canvas.clientHeight);
    }

    createField() {
        console.log(this.getColumns());
        let field = new Array(this.getColumns());
        for (let i = 0; i < this.getColumns(); i++) {
            field[i] = new Array(this.getRows());
            for (let j = 0; j < this.getRows(); j++) {
                if (i == 0 || j  == 0 || i == (this.getColumns() - 1) || j == (this.getRows() - 1)) { field[i][j] = 1; }
                else { field[i][j] = 0; };
            };

        };

        return field;
    }

    renderField() {
        let x = this.x0;
        let y = this.y0;

        for (let i = 0; i < this.getColumns() + 1; i++) {
            this.ctx.moveTo(x, this.y0);
            this.ctx.lineTo(x, this.canvas.clientHeight - 1);
            x += this.cellSize;

        }
        for (let i = 0; i < this.getRows() + 1; i++) {
            this.ctx.moveTo(this.x0, y);
            this.ctx.lineTo(this.canvas.clientWidth - 1, y);
            y += this.cellSize;
        }

        this.ctx.strokeStyle = "#A9A9A9";
        this.ctx.fillStyle = "#C0C0C0";
        this.ctx.fillRect(this.x0, this.y0, this.canvas.clientWidth, this.canvas.clientHeight);
        this.ctx.clearRect(this.cellSize, this.cellSize, this.canvas.clientWidth - 2 * this.cellSize, this.canvas.clientHeight - 2 * this.cellSize);
        this.ctx.stroke();
    }

    printArr() {
        console.log(this.Field);
    }

}