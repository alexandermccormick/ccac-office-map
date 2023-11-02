import L from "leaflet";

export class County {
  isActive: boolean = false;

  constructor(public title: string, public geojson: any) {}

  addTo(map: L.Map, options: L.GeoJSONOptions) {
    if (!this.isActive) {
      L.geoJson(this.geojson, options).addTo(map);

      this.isActive = true;
    }
  }
}

export const stanislaus = new County(
  "Stanislaus",
  {"type":"Feature","properties":{"name":"Stanislaus","cartodb_id":50,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-120.400166,37.643351],[-120.387329,37.633499],[-120.392825,37.631293],[-120.509417,37.586231],[-120.72913,37.499962],[-120.841047,37.456438],[-120.886429,37.44018],[-120.93402,37.420694],[-120.940616,37.416676],[-120.98439,37.399366],[-120.993641,37.388037],[-120.98224,37.385637],[-120.983241,37.376436],[-120.977262,37.374123],[-120.981194,37.364197],[-120.975979,37.349324],[-120.964223,37.345782],[-121.001038,37.316908],[-121.015039,37.304539],[-121.06634,37.262939],[-121.106162,37.231835],[-121.226804,37.134774],[-121.23134,37.138542],[-121.236629,37.156675],[-121.237712,37.15758],[-121.262093,37.159323],[-121.275378,37.178739],[-121.282271,37.183675],[-121.299133,37.165789],[-121.314034,37.16791],[-121.328409,37.16595],[-121.342382,37.174192],[-121.346666,37.179914],[-121.348703,37.181121],[-121.36317,37.183509],[-121.384552,37.165507],[-121.383551,37.151487],[-121.400004,37.150863],[-121.404636,37.155989],[-121.411704,37.194924],[-121.422711,37.22236],[-121.441746,37.231127],[-121.45575,37.24944],[-121.454009,37.28405],[-121.443551,37.296638],[-121.436816,37.291971],[-121.425767,37.296336],[-121.405753,37.31099],[-121.411939,37.324445],[-121.40915,37.330637],[-121.42075,37.344737],[-121.42365,37.358837],[-121.415849,37.375916],[-121.409075,37.380672],[-121.412549,37.389435],[-121.436085,37.39613],[-121.448163,37.391677],[-121.456651,37.395535],[-121.456351,37.406735],[-121.472606,37.423345],[-121.46186,37.438799],[-121.464022,37.453838],[-121.473089,37.456764],[-121.484252,37.466032],[-121.486775,37.475652],[-121.472648,37.48217],[-121.471925,37.481783],[-121.373251,37.560231],[-121.3337,37.590793],[-121.273751,37.63833],[-121.272352,37.641431],[-121.245151,37.66433],[-121.230191,37.662976],[-121.22185,37.670329],[-121.221955,37.682624],[-121.198177,37.69036],[-121.182439,37.687705],[-121.182428,37.69662],[-121.168922,37.699125],[-121.15922,37.704439],[-121.160829,37.711142],[-121.155849,37.719844],[-121.145444,37.719988],[-121.128718,37.724308],[-121.120743,37.722341],[-121.10763,37.73228],[-121.111349,37.740028],[-121.088368,37.741052],[-121.076428,37.737574],[-121.066603,37.740091],[-121.056266,37.749577],[-121.051813,37.742507],[-121.037469,37.739769],[-121.025733,37.742356],[-121.01748,37.755406],[-121.012352,37.750665],[-121.002513,37.751902],[-120.995754,37.760152],[-120.981786,37.756352],[-120.973165,37.747952],[-120.954032,37.738352],[-120.944445,37.742128],[-120.920665,37.738392],[-120.922645,37.759528],[-120.923251,37.793571],[-120.926347,37.886724],[-120.926449,38.077421],[-120.918749,38.070822],[-120.876047,38.028894],[-120.849933,38.00714],[-120.8338,37.994724],[-120.775787,37.943041],[-120.761301,37.931067],[-120.752695,37.923334],[-120.74453,37.912419],[-120.659938,37.838228],[-120.655199,37.833254],[-120.5629,37.765952],[-120.54188,37.749943],[-120.470804,37.696511],[-120.400166,37.643351]]]}}
);

export const sanJoaquin = new County(
  "San Joaquin",
  {"type":"Feature","properties":{"name":"San Joaquin","cartodb_id":39,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-121.557038,37.815988],[-121.556936,37.817218],[-121.553511,37.818386],[-121.549459,37.833569],[-121.542413,37.833398],[-121.536595,37.844723],[-121.551676,37.8604],[-121.562094,37.856757],[-121.578021,37.857821],[-121.573796,37.864324],[-121.579425,37.8723],[-121.57387,37.883395],[-121.574963,37.88945],[-121.565904,37.897672],[-121.571769,37.902497],[-121.563212,37.912217],[-121.565656,37.91849],[-121.556408,37.923639],[-121.557274,37.932247],[-121.563406,37.944273],[-121.565138,37.959849],[-121.573713,37.966434],[-121.573583,37.980309],[-121.581978,37.985811],[-121.565157,38.002799],[-121.553536,38.008885],[-121.562338,38.030131],[-121.57004,38.032378],[-121.572159,38.043006],[-121.579134,38.045226],[-121.58042,38.060042],[-121.576363,38.069347],[-121.567827,38.071541],[-121.555115,38.056846],[-121.539595,38.055797],[-121.52006,38.020898],[-121.492261,38.029178],[-121.479801,38.024037],[-121.473192,38.026312],[-121.469621,38.034908],[-121.48198,38.040059],[-121.488407,38.038391],[-121.499305,38.054156],[-121.507408,38.053347],[-121.530467,38.056499],[-121.530579,38.067273],[-121.537711,38.068872],[-121.546917,38.063336],[-121.555216,38.072736],[-121.56915,38.080369],[-121.569958,38.096824],[-121.565751,38.105279],[-121.580783,38.111009],[-121.584074,38.120228],[-121.576344,38.129054],[-121.557288,38.139118],[-121.559176,38.143886],[-121.53631,38.151581],[-121.536151,38.158158],[-121.524934,38.171405],[-121.524695,38.184204],[-121.529152,38.193828],[-121.520688,38.202932],[-121.509935,38.20458],[-121.504303,38.212579],[-121.507487,38.222563],[-121.491669,38.22769],[-121.486613,38.240458],[-121.478581,38.246169],[-121.48007,38.253576],[-121.471683,38.259816],[-121.459017,38.25756],[-121.456,38.257564],[-121.430891,38.255038],[-121.428182,38.253103],[-121.420517,38.237242],[-121.398431,38.227425],[-121.389672,38.23301],[-121.372102,38.229939],[-121.354682,38.231031],[-121.345416,38.228139],[-121.343742,38.228374],[-121.315661,38.236039],[-121.296662,38.238049],[-121.282285,38.249829],[-121.26838,38.252271],[-121.245698,38.244535],[-121.22925,38.247525],[-121.203407,38.248754],[-121.195752,38.254187],[-121.173079,38.255208],[-121.159865,38.265564],[-121.133825,38.271875],[-121.127782,38.277447],[-121.116829,38.277349],[-121.102092,38.28323],[-121.09544,38.281633],[-121.083847,38.28652],[-121.068887,38.298248],[-121.066653,38.299146],[-121.049411,38.291601],[-121.046599,38.291777],[-121.04057,38.297718],[-121.027084,38.300252],[-120.995497,38.225405],[-120.981751,38.194118],[-120.93885,38.088321],[-120.926449,38.077421],[-120.926347,37.886724],[-120.923251,37.793571],[-120.922645,37.759528],[-120.920665,37.738392],[-120.944445,37.742128],[-120.954032,37.738352],[-120.973165,37.747952],[-120.981786,37.756352],[-120.995754,37.760152],[-121.002513,37.751902],[-121.012352,37.750665],[-121.01748,37.755406],[-121.025733,37.742356],[-121.037469,37.739769],[-121.051813,37.742507],[-121.056266,37.749577],[-121.066603,37.740091],[-121.076428,37.737574],[-121.088368,37.741052],[-121.111349,37.740028],[-121.10763,37.73228],[-121.120743,37.722341],[-121.128718,37.724308],[-121.145444,37.719988],[-121.155849,37.719844],[-121.160829,37.711142],[-121.15922,37.704439],[-121.168922,37.699125],[-121.182428,37.69662],[-121.182439,37.687705],[-121.198177,37.69036],[-121.221955,37.682624],[-121.22185,37.670329],[-121.230191,37.662976],[-121.245151,37.66433],[-121.272352,37.641431],[-121.273751,37.63833],[-121.3337,37.590793],[-121.373251,37.560231],[-121.471925,37.481783],[-121.471198,37.482829],[-121.471198,37.485034],[-121.469824,37.48833],[-121.469275,37.489688],[-121.485452,37.502532],[-121.496052,37.504932],[-121.504153,37.525932],[-121.522154,37.524832],[-121.545754,37.532532],[-121.556655,37.542732],[-121.557002,37.77346],[-121.557038,37.815988]]],[[[-121.501346,38.037508],[-121.501044,38.028141],[-121.515308,38.023121],[-121.524965,38.042783],[-121.518358,38.052054],[-121.507866,38.050647],[-121.501346,38.037508]]]]}}
);

export const kern = new County(
  "Kern",
  {"type":"Feature","properties":{"name":"Kern","cartodb_id":15,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-119.997392,35.439495],[-119.997382,35.468702],[-120.015659,35.469039],[-120.014602,35.483652],[-120.033314,35.483648],[-120.033241,35.498642],[-120.05105,35.498627],[-120.051237,35.512695],[-120.068905,35.512779],[-120.068657,35.52632],[-120.086674,35.526554],[-120.085922,35.614524],[-120.173567,35.613994],[-120.193918,35.614359],[-120.19378,35.707276],[-120.194146,35.789204],[-120.117165,35.78878],[-120.004851,35.788852],[-119.92166,35.7896],[-119.888473,35.78895],[-119.772945,35.790163],[-119.646519,35.790424],[-119.625958,35.789494],[-119.572556,35.789576],[-119.538116,35.789567],[-119.320489,35.790219],[-119.125249,35.790799],[-118.933878,35.790512],[-118.858466,35.790549],[-118.629975,35.78958],[-118.504002,35.789825],[-118.469424,35.792634],[-118.366921,35.790609],[-118.270003,35.790008],[-118.067719,35.791537],[-118.008043,35.789161],[-117.939352,35.786762],[-117.92312,35.786812],[-117.924459,35.798149],[-117.750945,35.798202],[-117.632996,35.797251],[-117.634251,35.709927],[-117.651986,35.709934],[-117.652319,35.680782],[-117.616195,35.680856],[-117.616395,35.651755],[-117.63383,35.651569],[-117.634872,35.62216],[-117.634771,35.564109],[-117.630126,35.564071],[-117.630604,35.499947],[-117.630216,35.451041],[-117.633509,35.434438],[-117.631295,35.419566],[-117.632782,35.405407],[-117.631241,35.361538],[-117.631208,35.202464],[-117.63088,35.097604],[-117.632907,35.080062],[-117.632233,34.993424],[-117.63179,34.877224],[-117.632011,34.82227],[-117.738725,34.823251],[-117.881132,34.822517],[-117.987678,34.822625],[-118.114465,34.821037],[-118.204107,34.820159],[-118.308655,34.820063],[-118.440005,34.818703],[-118.489589,34.81785],[-118.765862,34.817995],[-118.854253,34.817772],[-118.854576,34.803027],[-118.886824,34.801876],[-118.881364,34.790629],[-118.976723,34.79066],[-118.976721,34.812199],[-119.086138,34.812642],[-119.243645,34.814178],[-119.243645,34.857576],[-119.278346,34.857276],[-119.276946,34.879675],[-119.382451,34.879675],[-119.382154,34.900936],[-119.401909,34.901186],[-119.472754,34.901174],[-119.472719,35.076885],[-119.490709,35.077208],[-119.490632,35.091805],[-119.560975,35.087673],[-119.553641,35.179975],[-119.571259,35.180292],[-119.667056,35.174809],[-119.666663,35.262527],[-119.809449,35.263584],[-119.809346,35.350865],[-119.880172,35.351211],[-119.880045,35.439133],[-119.997392,35.439495]]]}}
);

export const fresno = new County(
  "Fresno",
  {"type":"Feature","properties":{"name":"Fresno","cartodb_id":10,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-119.845538,36.860502],[-119.843652,36.860658],[-119.837294,36.854114],[-119.823421,36.848333],[-119.815499,36.850522],[-119.813634,36.851481],[-119.809639,36.862569],[-119.797603,36.874373],[-119.78819,36.876607],[-119.78529,36.885753],[-119.789655,36.895349],[-119.775665,36.909125],[-119.772737,36.918599],[-119.758728,36.920238],[-119.752699,36.924426],[-119.752758,36.933719],[-119.742119,36.943537],[-119.733767,36.946441],[-119.743254,36.954631],[-119.7405,36.970212],[-119.731298,36.97974],[-119.713819,36.990896],[-119.698075,37.008748],[-119.690779,37.011987],[-119.670918,37.00926],[-119.658611,37.01333],[-119.657114,37.018903],[-119.659377,37.038938],[-119.651604,37.042961],[-119.639349,37.043287],[-119.629033,37.034619],[-119.63618,37.023696],[-119.621116,37.026605],[-119.610361,37.045668],[-119.613373,37.050778],[-119.60967,37.064692],[-119.604908,37.071016],[-119.589431,37.066636],[-119.562979,37.064095],[-119.559002,37.088058],[-119.541561,37.095955],[-119.537592,37.105067],[-119.546596,37.115367],[-119.567938,37.11618],[-119.56826,37.119647],[-119.56494,37.124996],[-119.563935,37.126582],[-119.563691,37.127767],[-119.563401,37.128284],[-119.563587,37.132403],[-119.56327,37.133644],[-119.563784,37.13832],[-119.562651,37.140853],[-119.559412,37.143619],[-119.547893,37.143611],[-119.538786,37.134391],[-119.523961,37.128656],[-119.51702,37.14712],[-119.506733,37.150554],[-119.489883,37.138413],[-119.493208,37.124603],[-119.484089,37.11082],[-119.470844,37.110548],[-119.466252,37.119596],[-119.468647,37.128383],[-119.462634,37.144211],[-119.44272,37.144051],[-119.434875,37.146954],[-119.43306,37.161516],[-119.425805,37.164297],[-119.408655,37.161218],[-119.399787,37.149835],[-119.388848,37.149215],[-119.365115,37.1657],[-119.360416,37.170081],[-119.360565,37.180539],[-119.347834,37.186784],[-119.339392,37.194415],[-119.332709,37.204138],[-119.330573,37.205791],[-119.334005,37.223455],[-119.331619,37.239641],[-119.323235,37.245006],[-119.322178,37.25341],[-119.326402,37.269858],[-119.332027,37.273588],[-119.327055,37.292687],[-119.333609,37.303474],[-119.33466,37.312904],[-119.332297,37.315128],[-119.326098,37.319305],[-119.323122,37.320974],[-119.318563,37.321156],[-119.315752,37.324775],[-119.317395,37.328886],[-119.324546,37.332511],[-119.325809,37.333963],[-119.312226,37.339706],[-119.315371,37.345814],[-119.315351,37.34737],[-119.315066,37.348679],[-119.312186,37.352725],[-119.286658,37.374943],[-119.181777,37.458197],[-119.130207,37.499941],[-119.022363,37.585737],[-119.002262,37.571137],[-118.981461,37.564937],[-118.97696,37.556837],[-118.964061,37.558137],[-118.952661,37.565836],[-118.942661,37.562136],[-118.93896,37.554436],[-118.92966,37.548936],[-118.91706,37.550336],[-118.909759,37.539336],[-118.883658,37.520136],[-118.881658,37.510336],[-118.875658,37.507936],[-118.871158,37.507936],[-118.860758,37.501535],[-118.857223,37.479472],[-118.850474,37.475796],[-118.841901,37.480895],[-118.832795,37.480194],[-118.815526,37.487807],[-118.797097,37.488712],[-118.786046,37.478681],[-118.775389,37.463992],[-118.774474,37.461475],[-118.764544,37.45691],[-118.758922,37.44452],[-118.759581,37.435573],[-118.767506,37.42364],[-118.773039,37.424635],[-118.775681,37.424578],[-118.783558,37.413312],[-118.781811,37.408513],[-118.790031,37.394032],[-118.777513,37.375214],[-118.773049,37.373178],[-118.769735,37.368773],[-118.770167,37.358862],[-118.778235,37.35833],[-118.786736,37.34338],[-118.778764,37.334267],[-118.757855,37.32884],[-118.740026,37.315237],[-118.716016,37.328208],[-118.706227,37.314071],[-118.68522,37.290468],[-118.6821,37.280473],[-118.665167,37.261009],[-118.675347,37.248831],[-118.684611,37.242819],[-118.680788,37.222925],[-118.679723,37.201568],[-118.666755,37.190031],[-118.66424,37.178145],[-118.672282,37.168487],[-118.667447,37.155443],[-118.654593,37.141826],[-118.643521,37.138022],[-118.628539,37.137766],[-118.613411,37.14301],[-118.599645,37.136468],[-118.592661,37.138147],[-118.586051,37.124934],[-118.568569,37.122298],[-118.56841,37.115295],[-118.537956,37.113577],[-118.522127,37.098354],[-118.51186,37.092811],[-118.503103,37.095221],[-118.491733,37.086354],[-118.48658,37.077414],[-118.471143,37.072661],[-118.467332,37.066745],[-118.447907,37.068701],[-118.437137,37.059818],[-118.434927,37.050881],[-118.441729,37.045013],[-118.422595,37.02436],[-118.42798,37.011974],[-118.412233,36.998335],[-118.420133,36.989435],[-118.409133,36.980535],[-118.404433,36.972035],[-118.403333,36.959535],[-118.396632,36.957335],[-118.383032,36.934634],[-118.381532,36.925934],[-118.371032,36.908634],[-118.369832,36.900434],[-118.360831,36.887734],[-118.367131,36.881434],[-118.369863,36.870078],[-118.362223,36.861359],[-118.361522,36.845269],[-118.371494,36.836083],[-118.389758,36.834466],[-118.393724,36.829668],[-118.390122,36.819872],[-118.379585,36.808917],[-118.372803,36.79454],[-118.38023,36.782234],[-118.37203,36.767034],[-118.36923,36.750034],[-118.361129,36.745333],[-118.360586,36.744773],[-118.555487,36.744746],[-118.555031,36.739138],[-118.641527,36.738972],[-118.751033,36.739693],[-118.982441,36.741646],[-118.984779,36.657147],[-119.071657,36.658259],[-119.088417,36.657509],[-119.178339,36.658866],[-119.25095,36.661214],[-119.304625,36.660606],[-119.305102,36.573725],[-119.412931,36.57522],[-119.466322,36.575238],[-119.500966,36.54683],[-119.566468,36.494339],[-119.636063,36.44145],[-119.65444,36.427975],[-119.66692,36.418728],[-119.671958,36.425502],[-119.681112,36.429719],[-119.686941,36.425819],[-119.705134,36.427155],[-119.711525,36.419802],[-119.727561,36.420347],[-119.745097,36.417046],[-119.754213,36.402023],[-119.887145,36.402027],[-119.959227,36.400975],[-119.959996,36.379132],[-119.958885,36.304382],[-119.95921,36.181403],[-120.125972,36.053407],[-120.195948,35.999966],[-120.257021,35.952025],[-120.315068,35.907186],[-120.324267,35.908838],[-120.336711,35.923645],[-120.335883,35.93709],[-120.33724,35.937842],[-120.337864,35.937773],[-120.340249,35.938978],[-120.354514,35.946488],[-120.359821,35.963978],[-120.396605,35.970358],[-120.410209,35.975723],[-120.433053,35.968933],[-120.439662,35.979577],[-120.4497,35.988432],[-120.463688,35.992778],[-120.477391,36.000824],[-120.478698,36.010183],[-120.497549,36.020177],[-120.510445,36.021999],[-120.517568,36.027544],[-120.529796,36.024281],[-120.53077,36.035439],[-120.540409,36.036664],[-120.545408,36.046123],[-120.566649,36.052932],[-120.592308,36.071881],[-120.596029,36.077785],[-120.592311,36.091831],[-120.600607,36.101587],[-120.61165,36.095634],[-120.632224,36.10183],[-120.641895,36.101272],[-120.648784,36.10799],[-120.645423,36.116199],[-120.653203,36.118815],[-120.655726,36.131781],[-120.664845,36.140346],[-120.667985,36.160574],[-120.663057,36.171158],[-120.654621,36.167721],[-120.642366,36.185915],[-120.638366,36.197482],[-120.62691,36.203227],[-120.649265,36.223952],[-120.651691,36.230659],[-120.666916,36.235997],[-120.681837,36.251046],[-120.679915,36.254178],[-120.672955,36.257679],[-120.679597,36.267305],[-120.678184,36.267512],[-120.673839,36.2824],[-120.682885,36.286796],[-120.682834,36.294264],[-120.666391,36.311446],[-120.658806,36.316235],[-120.64267,36.319014],[-120.630009,36.316908],[-120.612032,36.321624],[-120.596562,36.328488],[-120.597263,36.374955],[-120.597155,36.488235],[-120.603706,36.488242],[-120.669786,36.541113],[-120.749436,36.605294],[-120.763038,36.615645],[-120.901926,36.726469],[-120.918731,36.740381],[-120.806659,36.831093],[-120.734331,36.889976],[-120.65595,36.952832],[-120.590566,36.952641],[-120.5912,36.992834],[-120.595406,37.001504],[-120.554259,37.034413],[-120.541696,37.044505],[-120.537124,37.039836],[-120.541241,37.031029],[-120.545536,37.027582],[-120.530713,37.020184],[-120.528471,37.01248],[-120.513791,37.010962],[-120.508544,37.000775],[-120.501183,36.996745],[-120.499519,36.981966],[-120.483795,36.970985],[-120.488947,36.965692],[-120.480744,36.959244],[-120.47562,36.939992],[-120.468011,36.937472],[-120.457344,36.924097],[-120.462206,36.917172],[-120.450341,36.911172],[-120.460924,36.902674],[-120.466695,36.889744],[-120.456542,36.883838],[-120.456246,36.862863],[-120.43853,36.854489],[-120.42627,36.839902],[-120.40925,36.836379],[-120.40071,36.82241],[-120.38903,36.824441],[-120.379098,36.817166],[-120.37413,36.80027],[-120.369823,36.795967],[-120.370256,36.78494],[-120.358092,36.787185],[-120.346523,36.784559],[-120.342987,36.79093],[-120.334194,36.790988],[-120.299995,36.777301],[-120.289706,36.769611],[-120.285504,36.773504],[-120.254798,36.770038],[-120.229179,36.769687],[-120.233502,36.778668],[-120.222039,36.78306],[-120.217973,36.788567],[-120.202218,36.790005],[-120.20181,36.782948],[-120.18883,36.776408],[-120.181966,36.788073],[-120.168484,36.803438],[-120.155336,36.798816],[-120.12976,36.8115],[-120.127521,36.812037],[-120.114559,36.814042],[-120.111,36.812773],[-120.09774,36.815512],[-120.091644,36.821187],[-120.077038,36.824901],[-120.075783,36.824362],[-120.070733,36.818621],[-120.057399,36.822965],[-120.042292,36.815497],[-120.027775,36.814505],[-120.020174,36.824954],[-120.013334,36.828228],[-119.998055,36.827493],[-119.990737,36.830616],[-119.989929,36.838233],[-119.979717,36.839732],[-119.968882,36.832261],[-119.961867,36.835688],[-119.943507,36.83403],[-119.934547,36.838023],[-119.927777,36.848458],[-119.919523,36.845072],[-119.904824,36.85118],[-119.890304,36.851534],[-119.884889,36.858549],[-119.868884,36.850347],[-119.861411,36.85546],[-119.85499,36.851175],[-119.845538,36.860502]]]}}
);

export const madera = new County(
  "Madera",
  {"type":"Feature","properties":{"name":"Madera","cartodb_id":20,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-120.399944,37.118059],[-120.384886,37.124589],[-120.363456,37.119704],[-120.341204,37.124596],[-120.324544,37.136382],[-120.303757,37.141093],[-120.289872,37.152621],[-120.276096,37.152211],[-120.232277,37.159922],[-120.227286,37.1634],[-120.194794,37.163151],[-120.187594,37.160252],[-120.170226,37.165982],[-120.164576,37.162698],[-120.152954,37.166021],[-120.142563,37.164065],[-120.132811,37.167359],[-120.120096,37.165532],[-120.103327,37.16774],[-120.094743,37.172554],[-120.064678,37.177816],[-120.054096,37.182414],[-120.017708,37.210981],[-120.000895,37.224905],[-119.819115,37.371454],[-119.761809,37.417114],[-119.747102,37.417748],[-119.651191,37.417832],[-119.651172,37.461351],[-119.615495,37.461522],[-119.615148,37.494681],[-119.58422,37.494696],[-119.583585,37.560335],[-119.345084,37.750131],[-119.308995,37.777986],[-119.308584,37.777328],[-119.293382,37.767929],[-119.288381,37.74503],[-119.268979,37.73923],[-119.260078,37.726631],[-119.243045,37.728547],[-119.24047,37.72708],[-119.233336,37.722405],[-119.230306,37.718092],[-119.216333,37.714123],[-119.198491,37.736657],[-119.18736,37.736612],[-119.185434,37.73682],[-119.172437,37.736813],[-119.169071,37.738359],[-119.165969,37.737591],[-119.147891,37.732757],[-119.130088,37.7342],[-119.126985,37.734552],[-119.109694,37.724735],[-119.093126,37.703627],[-119.073352,37.692886],[-119.065166,37.684556],[-119.059548,37.665378],[-119.0614,37.657834],[-119.045318,37.637046],[-119.031453,37.627863],[-119.031166,37.626373],[-119.030828,37.624936],[-119.030887,37.620892],[-119.031466,37.617036],[-119.031966,37.613836],[-119.034365,37.603536],[-119.022363,37.585737],[-119.130207,37.499941],[-119.180918,37.458882],[-119.286658,37.374943],[-119.312186,37.352725],[-119.315066,37.348679],[-119.315351,37.34737],[-119.315371,37.345814],[-119.312226,37.339706],[-119.325809,37.333963],[-119.324546,37.332511],[-119.317395,37.328886],[-119.315752,37.324775],[-119.318563,37.321156],[-119.323122,37.320974],[-119.326098,37.319305],[-119.332297,37.315128],[-119.33466,37.312904],[-119.333609,37.303474],[-119.327055,37.292687],[-119.332027,37.273588],[-119.326402,37.269858],[-119.322178,37.25341],[-119.323235,37.245006],[-119.331619,37.239641],[-119.334005,37.223455],[-119.330573,37.205791],[-119.332709,37.204138],[-119.339392,37.194415],[-119.347834,37.186784],[-119.360565,37.180539],[-119.360416,37.170081],[-119.365115,37.1657],[-119.388848,37.149215],[-119.399787,37.149835],[-119.408655,37.161218],[-119.425805,37.164297],[-119.43306,37.161516],[-119.434875,37.146954],[-119.44272,37.144051],[-119.462634,37.144211],[-119.468647,37.128383],[-119.466252,37.119596],[-119.470844,37.110548],[-119.484089,37.11082],[-119.493208,37.124603],[-119.489883,37.138413],[-119.506733,37.150554],[-119.51702,37.14712],[-119.523961,37.128656],[-119.538786,37.134391],[-119.547893,37.143611],[-119.559412,37.143619],[-119.562651,37.140853],[-119.563784,37.13832],[-119.56327,37.133644],[-119.563587,37.132403],[-119.563401,37.128284],[-119.563691,37.127767],[-119.563935,37.126582],[-119.56494,37.124996],[-119.56826,37.119647],[-119.567938,37.11618],[-119.546596,37.115367],[-119.537592,37.105067],[-119.541561,37.095955],[-119.559002,37.088058],[-119.562979,37.064095],[-119.589431,37.066636],[-119.604908,37.071016],[-119.60967,37.064692],[-119.613373,37.050778],[-119.610361,37.045668],[-119.621116,37.026605],[-119.63618,37.023696],[-119.629033,37.034619],[-119.639349,37.043287],[-119.651604,37.042961],[-119.659377,37.038938],[-119.657114,37.018903],[-119.658611,37.01333],[-119.670918,37.00926],[-119.690779,37.011987],[-119.698075,37.008748],[-119.713819,36.990896],[-119.731298,36.97974],[-119.7405,36.970212],[-119.743254,36.954631],[-119.733767,36.946441],[-119.742119,36.943537],[-119.752758,36.933719],[-119.752699,36.924426],[-119.758728,36.920238],[-119.772737,36.918599],[-119.775665,36.909125],[-119.789655,36.895349],[-119.78529,36.885753],[-119.78819,36.876607],[-119.797603,36.874373],[-119.809639,36.862569],[-119.813634,36.851481],[-119.815499,36.850522],[-119.823421,36.848333],[-119.837294,36.854114],[-119.843652,36.860658],[-119.845538,36.860502],[-119.85499,36.851175],[-119.861411,36.85546],[-119.868884,36.850347],[-119.884889,36.858549],[-119.890304,36.851534],[-119.904824,36.85118],[-119.919523,36.845072],[-119.927777,36.848458],[-119.934547,36.838023],[-119.943507,36.83403],[-119.961867,36.835688],[-119.968882,36.832261],[-119.979717,36.839732],[-119.989929,36.838233],[-119.990737,36.830616],[-119.998055,36.827493],[-120.013334,36.828228],[-120.020174,36.824954],[-120.027775,36.814505],[-120.042292,36.815497],[-120.057399,36.822965],[-120.070733,36.818621],[-120.075783,36.824362],[-120.077038,36.824901],[-120.091644,36.821187],[-120.09774,36.815512],[-120.111,36.812773],[-120.114559,36.814042],[-120.127521,36.812037],[-120.12976,36.8115],[-120.155336,36.798816],[-120.168484,36.803438],[-120.181966,36.788073],[-120.18883,36.776408],[-120.20181,36.782948],[-120.202218,36.790005],[-120.217973,36.788567],[-120.222039,36.78306],[-120.233502,36.778668],[-120.229179,36.769687],[-120.254798,36.770038],[-120.285504,36.773504],[-120.289706,36.769611],[-120.299995,36.777301],[-120.334194,36.790988],[-120.342987,36.79093],[-120.346523,36.784559],[-120.358092,36.787185],[-120.370256,36.78494],[-120.369823,36.795967],[-120.37413,36.80027],[-120.379098,36.817166],[-120.38903,36.824441],[-120.40071,36.82241],[-120.40925,36.836379],[-120.42627,36.839902],[-120.43853,36.854489],[-120.456246,36.862863],[-120.456542,36.883838],[-120.466695,36.889744],[-120.460924,36.902674],[-120.450341,36.911172],[-120.462206,36.917172],[-120.457344,36.924097],[-120.468011,36.937472],[-120.47562,36.939992],[-120.480744,36.959244],[-120.488947,36.965692],[-120.483795,36.970985],[-120.499519,36.981966],[-120.501183,36.996745],[-120.508544,37.000775],[-120.513791,37.010962],[-120.528471,37.01248],[-120.530713,37.020184],[-120.545536,37.027582],[-120.541241,37.031029],[-120.537124,37.039836],[-120.541696,37.044505],[-120.476692,37.09639],[-120.465508,37.097777],[-120.427787,37.106252],[-120.406505,37.11226],[-120.405901,37.112983],[-120.402838,37.116714],[-120.399944,37.118059]]]}}
);

export const tulare = new County(
  "Tulare",
  {"type":"Feature","properties":{"name":"Tulare","cartodb_id":54,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-119.474892,36.400953],[-119.528792,36.401465],[-119.528286,36.487545],[-119.573194,36.488835],[-119.566468,36.494339],[-119.500966,36.54683],[-119.466322,36.575238],[-119.412931,36.57522],[-119.305102,36.573725],[-119.304625,36.660606],[-119.25095,36.661214],[-119.178339,36.658866],[-119.088417,36.657509],[-119.071657,36.658259],[-118.984779,36.657147],[-118.982441,36.741646],[-118.751033,36.739693],[-118.641527,36.738972],[-118.555031,36.739138],[-118.555487,36.744746],[-118.360586,36.744773],[-118.356729,36.742234],[-118.351329,36.741034],[-118.339629,36.729034],[-118.334728,36.705334],[-118.346728,36.696534],[-118.358828,36.695634],[-118.364228,36.687935],[-118.353328,36.683934],[-118.347727,36.673234],[-118.333427,36.671434],[-118.329327,36.666734],[-118.337927,36.654834],[-118.336827,36.654634],[-118.325226,36.647134],[-118.320326,36.637234],[-118.320826,36.627034],[-118.311026,36.624934],[-118.301925,36.618134],[-118.297025,36.607334],[-118.282725,36.604434],[-118.274624,36.597334],[-118.278024,36.592334],[-118.289024,36.590734],[-118.288024,36.583734],[-118.294124,36.576335],[-118.290523,36.558535],[-118.274923,36.550535],[-118.265323,36.551535],[-118.252022,36.542135],[-118.250122,36.530935],[-118.250922,36.528835],[-118.246721,36.521435],[-118.239121,36.521335],[-118.239121,36.515635],[-118.238921,36.513435],[-118.241421,36.500035],[-118.23502,36.493735],[-118.24842,36.487035],[-118.24992,36.482435],[-118.23702,36.477035],[-118.23262,36.466335],[-118.21592,36.456736],[-118.21042,36.438936],[-118.21212,36.437036],[-118.193619,36.426536],[-118.184719,36.426636],[-118.174919,36.426536],[-118.156819,36.432636],[-118.154219,36.427136],[-118.141219,36.420936],[-118.137919,36.418036],[-118.140319,36.403536],[-118.160019,36.393836],[-118.153118,36.379536],[-118.141018,36.371636],[-118.131118,36.370736],[-118.120818,36.350237],[-118.100317,36.346137],[-118.100116,36.328823],[-118.114164,36.319261],[-118.110417,36.309837],[-118.125917,36.29867],[-118.127601,36.280348],[-118.117385,36.271165],[-118.119366,36.255561],[-118.112216,36.240039],[-118.105216,36.233639],[-118.109216,36.225539],[-118.101916,36.208839],[-118.073715,36.18944],[-118.070015,36.17864],[-118.061615,36.17394],[-118.060414,36.149741],[-118.071514,36.143341],[-118.071614,36.129241],[-118.064614,36.110442],[-118.066913,36.092442],[-118.058713,36.091842],[-118.049813,36.076742],[-118.051713,36.059543],[-118.042712,36.048543],[-118.045612,36.040743],[-118.039512,36.034243],[-118.033611,36.008944],[-118.012077,35.998305],[-118.003577,35.983718],[-118.009614,35.978178],[-118.01824,35.960977],[-118.006882,35.946483],[-117.991944,35.943771],[-117.983287,35.926563],[-117.990046,35.915919],[-117.987074,35.899247],[-117.982473,35.895796],[-117.988802,35.879769],[-117.981043,35.866912],[-117.998258,35.868782],[-118.005489,35.862699],[-118.004459,35.836091],[-118.006195,35.829037],[-117.998605,35.823419],[-118.007734,35.816004],[-118.01048,35.804386],[-118.008043,35.789161],[-118.067719,35.791537],[-118.270003,35.790008],[-118.366921,35.790609],[-118.469424,35.792634],[-118.504002,35.789825],[-118.629975,35.78958],[-118.858466,35.790549],[-118.933878,35.790512],[-119.125249,35.790799],[-119.320489,35.790219],[-119.538116,35.789567],[-119.537379,35.963347],[-119.536175,35.963415],[-119.53638,36.137893],[-119.529141,36.137914],[-119.529358,36.26985],[-119.474607,36.269025],[-119.475234,36.313373],[-119.475481,36.34182],[-119.475187,36.374941],[-119.474892,36.400953]]]}}
);

export const kings = new County(
  "Kings",
  {"type":"Feature","properties":{"name":"Kings","cartodb_id":16,"created_at":"2015-07-04T21:04:58Z","updated_at":"2015-07-04T21:04:58Z"},"geometry":{"type":"Polygon","coordinates":[[[-119.475234,36.313373],[-119.474607,36.269025],[-119.529358,36.26985],[-119.529141,36.137914],[-119.53638,36.137893],[-119.536175,35.963415],[-119.537379,35.963347],[-119.538116,35.789567],[-119.572556,35.789576],[-119.625958,35.789494],[-119.646519,35.790424],[-119.772945,35.790163],[-119.888473,35.78895],[-119.92166,35.7896],[-120.004851,35.788852],[-120.117165,35.78878],[-120.213979,35.789276],[-120.218086,35.814297],[-120.220667,35.819542],[-120.249836,35.829936],[-120.259302,35.845053],[-120.245988,35.864135],[-120.243275,35.877669],[-120.262692,35.89609],[-120.276934,35.906463],[-120.281977,35.906778],[-120.315068,35.907186],[-120.257021,35.952025],[-120.195948,35.999966],[-120.125972,36.053407],[-119.95921,36.181403],[-119.958885,36.304382],[-119.959996,36.379132],[-119.959227,36.400975],[-119.887145,36.402027],[-119.754213,36.402023],[-119.745097,36.417046],[-119.727561,36.420347],[-119.711525,36.419802],[-119.705134,36.427155],[-119.686941,36.425819],[-119.681112,36.429719],[-119.671958,36.425502],[-119.66692,36.418728],[-119.65444,36.427975],[-119.636063,36.44145],[-119.573194,36.488835],[-119.528286,36.487545],[-119.528792,36.401465],[-119.474892,36.400953],[-119.475187,36.374941],[-119.475481,36.34182],[-119.475234,36.313373]]]}}
);
