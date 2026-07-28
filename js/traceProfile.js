export function getTraceSettings(profile){


return {


logo:{

mode:"COLOR",

colors:profile.colors,

paths:profile.path,

corners:profile.corner,

noise:profile.noise

},


icon:{

mode:"COLOR",

colors:profile.colors,

paths:profile.path,

corners:profile.corner,

noise:profile.noise

},


flat:{

mode:"COLOR",

colors:profile.colors,

paths:profile.path,

corners:profile.corner,

noise:profile.noise

},


lineart:{

mode:"BLACK_WHITE",

colors:2,

paths:98,

corners:95,

noise:1

},


photo:{

mode:"COLOR",

colors:profile.colors,

paths:90,

corners:70,

noise:5

}


}[profile.type];


}