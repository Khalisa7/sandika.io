const interfaces = {
    app : {
        _name : 'Amind',
        _version : '1.0 Beta',
        _owner : 'Herlina Sunaryanto'
    },
    logo :{
        _src : 'https://sleekr.co/wp-content/themes/sleekr_08/images/icon/icon-sleekr.svg',
        _alt : 'Sandika Partner',
        _label : 'Sunar Admin'
    },
    user : false,
    navbar_link : [
        {
            _type: 'link',
            _label : 'Home',
            _routes : '/',
        },
        {
            _type: 'link',
            _label : 'Notification',
            _routes : '/notification',
        },
        {
            _type: 'dropdown',
            _label : 'User Profile',
            _item: [
                {
                    _type: 'link',
                    _label : 'Logout',
                    _routes : '/logout',
                }
            ]
        }
    ]
}

export default interfaces