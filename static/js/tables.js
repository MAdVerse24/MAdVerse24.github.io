var x = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
var y = [11, 51, 452, 87]
var z = [0, 0, 42, 13]
var trace1 = {
    x: x,
    y: y,
    type: 'histogram',
    histfunc: 'sum',
    opacity: 0.5,
    name: 'BRANDS'
};
var trace2 = {
    x: x,
    y: z,
    type: 'histogram',
    histfunc: 'sum',
    opacity: 0.5,
    name: 'MISC'
};
const layout = {
    title: 'Number of Nodes per Level',
    xaxis: {
        title: 'Level'
    },
    yaxis: {
        title: 'Number of Nodes'
    },
    barmode: 'overlay'
};
var data = [trace1, trace2];
Plotly.newPlot('NodesPerLevel', data, layout);

// Graph 2
var a = ['sports',
    'food',
    'financial_institutions',
    'body_wear',
    'baby_products',
    'home_essentials',
    'travel',
    'cosmetics',
    'drinks',
    'electronics',
    'vehicles'];
var b = [8, 144, 23, 35, 15, 21, 23, 44, 57, 66, 88];
var c = [1, 12, 2, 4, 3, 3, 2, 4, 7, 4, 13];
var trace3 = {
    x: a,
    y: b,
    type: 'histogram',
    histfunc: 'sum',
    opacity: 0.5,
    name: 'BRANDS'
};
var trace4 = {
    x: a,
    y: c,
    type: 'histogram',
    histfunc: 'sum',
    opacity: 0.5,
    name: 'MISC'
};
const layout1 = {
    title: 'Number of Brands per Category',
    xaxis: {
        title: 'Category'
    },
    yaxis: {
        title: 'Number of Brands'
    },
    barmode: 'overlay'
};
var data1 = [trace3, trace4];
Plotly.newPlot('BrandsPerCategory', data1, layout1);  