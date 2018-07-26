$(function(){

    var flag=0;
    var x1;//mousedown
    var y1;//mousedown
    var x2;//mouseup
    var y2;//mouseup
    var cx1;//for path x1
    var cy1;//for path y1
    var cx2;//for path x2
    var cy2;//for path y2

    var svg = Pablo('#client').svg({ //create svg with height and width
        width: 1100,
        height: 500
    });

    $('#line').click(function(){ //when id=line button clicked
        flag=1;//set flag line
    });
    
    $('#circle').click(function(){ //when id=circle button clicked
        flag=2;//set flag circle
    });
    $('#rectangle').click(function(){//when id=rectangle button clicked
        flag=3;//set flag rectangele
    });
    $('#path').click(function(){//when id=path button clicked
        flag=4;//set flag path
    });
    

    $('#client').mousedown(function(event){//when mouse down
        x1=event.clientX-406;//shear rate 406px--x coordinate
        y1=event.clientY-200;//shear rate 200px--y coordinate
        cx1=x1-100;
        cy1=y1-100;

    });

    $('#client').mouseup(function(event){//when mouse up
        x2=event.clientX-406;//shear rate 406px--x coordinate
        y2=event.clientY-200;//shear rate 200px--y coordinate
        cx2=x2-50;
        cy2=y2-50;

        if(flag==1){
           svg.line({x1:x1,x2:x2,y1:y1,y2:y2,stroke:'green'});
            
        }

        if(flag==2){

          svg.circle({cx:x2, cy:y2, r:50, fill:'#ca973b'});
        

        }

        if(flag==3){
            
            svg.rect({width:200, height:100,x:x2,y:y2,fill:'#7c1814'})
            
        }
        if(flag==4){
            
             svg.path({
                d: 'M '+x2+' '+y2+' C '+cx2+' '+cy2+', '+cx1+' '+cy1+', '+x1+' '+y1+'',
                fill:  'none',
                stroke:'#3c287c',
                'stroke-width': 2,
                'stroke-linecap': 'round'
             });
            
        }
       
        
        
    });
    
    

});