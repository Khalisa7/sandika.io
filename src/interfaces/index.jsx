const interfaces = {
    app : {
        _name : 'Amind',
        _version : '1.0 Beta',
        _owner : 'Herlina Sunaryanto'
    },
    logo :{
        _src : 'https://sleekr.co/wp-content/themes/sleekr_08/images/icon/icon-sleekr.svg',
        _alt : 'Sandika Partner',
        _label : 'Sandika'
    },
    user : false,
    navbar_link : [
        {
            _type: 'link',
            _label : 'Login',
            _routes : '/login',
            _style : 'd-none d-md-block nav-link customer-login'
        },
        {
            _type: 'link',
            _label : 'Register',
            _routes : '/register',
            _style : 'd-none d-md-block nav-link customer-register'
        },
        {
            _type: 'link',
            _label : 'Cart',
            _routes : '/cart',
            _style : 'nav-link quickcart'
        },
    ]
}

export default interfaces