import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/components/carousel', title: 'Carrusel', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/components/videoembebido', title: 'Video Embebido', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/components/editor', title: 'Editor Texto', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/components/mapa', title: 'Mapa', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    
    {
        path: '/adminapi', title: 'Api Rest', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,

        submenu: [

            { path: '/tipovacuna', title: 'Tipo vacuna', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [

                { path: '/adminapi/tipovacuna/tipovacuna-add', title: 'Crear Tipo vacuna', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

                { path: '/adminapi/tipovacuna/tipovacuna-get', title: 'Buscar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

                
            ] },
           
            { path: '/veterinario', title: 'veterinario', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [

                { path: '/adminapi/veterinario/veterinario-add', title: 'Crear veterinario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

                { path: '/adminapi/veterinario/veterinario-get', title: 'Buscar veterinario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

            ] },

            { path: '/propietario', title: 'propietario', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [

                { path: '/adminapi/propietario/propietario-add', title: 'Crear propietario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

                { path: '/adminapi/propietario/propietario-get', title: 'Buscar propietario', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

            ] },
                      

        ]

    },


    /*
    {
        path: '/full-layout', title: 'Full Layout', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {
                path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
*/
];
