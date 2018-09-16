let BASE_URL;

if(process.env.NODE_ENV === 'development'){
    BASE_URL = '';
} else if (process.env.NODE_ENV === 'production') {
    BASE_URL = '';
}

let serviceAPI = {
    'bannerUrl' : BASE_URL + '/bannerData',
    'shoplistsUrl': BASE_URL + '/shoplists',
    'nearbyhotUrl': BASE_URL + '/nearbyhot',
    'searchdataUrl': BASE_URL + '/searchdata',
}

export default serviceAPI





