export const foodieFilterData = {
    Foodie:[
        {
            label:"Show With Resturant",
            itemKey:"name",
            returnKey:"key",
            type:"radio",
            data:[
             {
                name:"Non Veg",
                key:"non-veg"
             },
             {
                name:"Pure Veg",
                key:"pure-veg"
    
             }
            ]
        },
        {
            label:"Category",
            returnKey:"id",
            itemKey:"name",
            data:[],
            type:"checkbox",
            multiple:true
    
        }
    ],
    Shopa:[
        {
            label:"Quick Filter",
            itemKey:"name",
            returnKey:"key",
            type:"radio",
            data:[]
        },
        {
            label:"Category",
            returnKey:"id",
            itemKey:"name",
            data:[],
            type:"checkbox",
            multiple:true
    
        }
    ]
}