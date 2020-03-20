$(function(){
    var $fir = $('#fir');
    var data = [
        {name:'Java',paim:'1',updown:'降',change:'-0.01%'},
        {name:'C',paim:'2',updown:'升',change:'+2.44%'},
        {name:'Python',paim:'3',updown:'升',change:'+1.41%'},
        {name:'C++',paim:'4',updown:'降',change:'-2.58%'},
        {name:'C#',paim:'5',updown:'升',change:'+2.07%'},
        {name:'Visual Basic.NET',paim:'6',updown:'降',change:'-1.17%'},
        {name:'JavaScript',paim:'7',updown:'降',change:'-0.85%'}
    ];
    var gre = new Handsontable($fir.get(0),{
        data:data,
        colHeaders:['语言名称','排名','升或降','变化幅度'],
        colWidths:200,
        contextMenu:true,
        manualRowResize:true,
        manualColumnResize:true,
    });
    var mychart = echarts.init($('#echart').get(0));
    var option = {
        title:{
            text:'JavaScript语言排名变化'
        },
        tooltip:{},
        legend:{
            data:['排名']
        },
        xAxis:{
            data:[2000,2005,2010,2015,2020],
        },
        yAxis:{},
        series:[{
            name:'排名',
            type:'line',
            data:[6,9,8,8,7]
        }]
    };
    mychart.setOption(option);
    return gre;
})