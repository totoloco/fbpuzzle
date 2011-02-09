Array.prototype.in_array=function(){ 
  for(var j in this)
    if(this[j]==arguments[0])
      return true;
  return false;     
}

$(function (){
  var lastTip=0;
  var founded=[];
  drawEmpty();
  showTip();
  assignEvents();
  var defText='Hacé click en un casillero';
  $('#tip-status').text(defText);

  function drawEmpty(){
    lastTip=0;
    founded=[];
    $('#puzzle').html('').css('width',puzzle_one_imge_size[0]*puzzle_cols).css('height',puzzle_one_imge_size[1]*puzzle_rows);
    for(var i=0;i<puzzle_rows;i++){
      var div=$('<div></div>').appendTo('#puzzle').addClass('puzzle-row');
      for(var j=0;j<puzzle_cols;j++){
        var ind=puzzle_rows*i+j
        var img=$('<div><img border="0" src="'+puzzle_image_empty+'" width="'+puzzle_one_imge_size[0]+'" height="'+puzzle_one_imge_size[1]+'" /></div>').appendTo(div).addClass('puzzle-img').attr('id','img-'+ind);
        img.css('width',puzzle_one_imge_size[0]).css('height',puzzle_one_imge_size[1]);
      }
    }
  }

  function assignEvents(){
    $('#puzzle .puzzle-img').click(function(ev){
      if($('img',this).attr('src')==puzzle_image_empty){
        var num=this.id.replace(/^img-/,'');
        if(num==lastTip){
          $(this).html('<img border="0" src="'+puzzle_images[num]+'" width="'+puzzle_one_imge_size[0]+'" height="'+puzzle_one_imge_size[1]+'" />');
          founded.push(num);
          if(founded.length!=puzzle_images.length){
            showTip();
            $('#tip-status').text('¡Correcto! Hacé click en otro.');
          }
          else{
            showPoints();
            detachEvents();
          }
        }
        else{
          showPoints();
          detachEvents();
        }
      }
    });
  }

  function showTip(){
    do{
      lastTip=Math.floor(Math.random()*puzzle_images.length);
    }while(founded.in_array(lastTip));
    var img=puzzle_images[lastTip];
    $('#tip').html('<img border="0" src="'+puzzle_images[lastTip]+'" width="'+puzzle_one_imge_size[0]+'" height="'+puzzle_one_imge_size[1]+'" />');
  }

  function showPoints(){
    var points=founded.length*puzzle_inc_points;
    $('#tip-status').text('Puntos totales: '+points);
  }

  function detachEvents(){
    $('#puzzle .puzzle-img').unbind('click');
  }
});
