
      // create polygon
      var draw = SVG('drawing').size(700, 700);
      var polygon = draw.polygon("113.8,376 162,331.3 162,362.7 224,362.7 224,246.7 384,246.7 384,472.7 227,472.7 227,389.7 161.3,389.7 161.3,423.3").fill('blue').stroke({ width: 1 })
      // var text = draw.text("Lorem ipsum dolor\nsit amet consectetur.\nCras sodales \nimperdiet auctor.");

      // draw.select('polygon').transform({ rotation: 90 });

      var text = draw.text(function(add) {
        add.tspan('Lorem ipsum dolor').dy(20.8).x(235)
        add.tspan('sit amet consectetur.').fill('#F00').dy(20.8).x(235)
        add.tspan('Cras sodales').dy(20.8).x(235)
        add.tspan('imperdiet auctor.').dy(20.8).x(235)
      })

      text.animate().move(235, 280);

      // text.x = 150;
      // text.y = 350;
      // var path = 'M 100 200';
      //
      // text.path(path).font({ size: 20, family: 'Verdana' })

      // var text = draw.text('This is just the start, ')
      //
      // text.build(true)  // enables build mode
      //
      // var tspan = text.tspan('something pink in the middle ').fill('#00ff97')
      // text.plain('and again boring at the end.')
      //
      // text.build(false) // disables build mode
      //
      // tspan.animate('2s').fill('#f06')

      // text.font({
      //   family:   'Helvetica'
      // , size:     144
      // , anchor:   'middle'
      // , leading:  '1.5em'
      // })

      // create RECT
      // var draw = SVG('drawing').size(700, 700);
      // var rect = draw.rect(100, 100).attr({ fill: '#f06' })
      //
      // SVG.select('rect').animate().move(500,500).animate().fill('green');   // working
      // SVG.select('#SvgjsRect1008').animate().move(500,500).animate().fill('green'); // working
      // SVG.select('#SvgjsSvg1001').select('rect').fill('#ff0'); // not working

      // var svgRootElement = $("#testArroBoxSVG")[0];
      // console.log(svgRootElement);
      // var svgWrapper = new $.svg._wrapperClass(svgRootElement);
      // console.log(svgWrapper);
      // svgWrapper.polygon('0,0 100,50 50,100').animate().fill('blue').stroke({ width: 1 });
      //svgWrapper.export('polygon').animate().fill('green');

      // var svg = new $.svg._wrapperClass($('#test'));
      // // $(svg._svg).animate({svgTransform: 'rotate(720,100,100)'}, 2000);
      // $(svg._svg).select('polygon');

      // var svg = new $.svg._wrapperClass($('#myRect'));
      // $(svg._svg).fill("green");
