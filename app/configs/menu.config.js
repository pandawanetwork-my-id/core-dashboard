export const menuItems = [
    {
        name: 'menu.summary',
        title: 'Summary',
        icon: 'fa-solid fa-gauge',
        link: '/summary',
        childs: false
    },
    {
        name: 'menu.api-gateway',
        title: 'API Gateway',
        icon: 'fa-solid fa-network-wired',
        link: '',
        childs: [
            {
                link: '/administration/api-gateway/stats',
                title: 'Stats'
            },
            {
                link: '/administration/api-gateway/routers',
                title: 'Routers'
            },
        ]
    },
    {
        name: 'menu.master-data',
        title: 'Master Data',
        icon: 'fa-solid fa-cubes-stacked',
        link: '',
        childs: [
            {
                link: '/administration/master/clients',
                title: 'Clients'
            },
            {
                link: '/administration/master/domains',
                title: 'Domains'
            },
            {
                link: '/administration/master/middlewares',
                title: 'Middlewares'
            },
        ]
    }
]