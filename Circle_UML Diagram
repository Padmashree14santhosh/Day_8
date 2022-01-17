class Circle{
            constructor(radius=1.0,color="red"){
                this.radius=radius;
                this.color=color;
            }

            circle(){
                return `
                    radius=${this.radius}
                    color=${this.color}
                `;
            }

            circle(radius=2.0){
                this.radius=radius;
                return `
                    radius=${this.radius}
                    color=${this.color}
                `;
            }

            circle(radius=3.0,color="blue"){
                this.radius=radius;
                this.color=color;
                return `
                    radius=${this.radius}
                    color=${this.color}
                `;
            }

            getRadius(){
                return `
                    Get the Radius=${this.radius}
                `;
            }

            setRadius(){
                this.radius=4.0;
                return `
                    Set the New Radius=${this.radius}
                `;
            }

            getcolor(){
                return `
                    Get the Color of circle=${this.color}
                `;
            }

            setcolor(color="pink"){
                this.color=color;
                return `
                    Set the New Color=${this.color}
                `;
            }

            
            getArea(){
                let area=this.radius*this.radius*Math.PI;
                console.log(`area of the circle=${area.toFixed(4)}`);

            }

            getCircumference(){
                let circum=2*Math.PI*this.radius;
                console.log(
                `
                circumference of circle=${circum.toFixed(4)}

                `);
            }

            tostring(){
                console.log(` converted radius to string = ${(this.radius).toString()}`);
            }


        }

        let round=new Circle(1.0,"red");
        console.log(round.circle());
        console.log(round.getRadius());
        console.log(round.setRadius());
        console.log(round.getcolor());
        console.log(round.setcolor());
        console.log(round.getArea());
        console.log(round.getCircumference());
        console.log(round.tostring());

