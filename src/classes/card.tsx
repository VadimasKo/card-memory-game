
export class Card{
    id:number;
    value:number;
    isHidden:boolean;
    isSelected: boolean;

    constructor(value:number,id:number,isHidden:boolean = true, isSelected:boolean = false ){
        this.id = id;
        this.value = value;
        this.isHidden = isHidden;
        this.isSelected = isSelected;
    }
}