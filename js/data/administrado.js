export const admin = [
    {
        user: 'luis.lucero@upeu.edu.pe',
        password: '123',
        name: 'Luis Keny Lucero Balvin',
        post: 'admin',
        permission:[
            {
                id: 1,
                namePermission: 'planificar',
                actions: [
                    {
                        id: 1,
                        action: 'editar',
                    },
                    {
                        id: 2,
                        action: 'añadir'
                    },
                    {
                        id: 3,
                        action: 'eliminar'
                    },
                    {
                        id: 4,
                        action: 'observar equipos'
                    }
                ]
            },
            {
                id: 2,
                namePermission: 'ejecutar',
            }
        ],
        projects:[
            {
                id: 1,
                access:[
                    {
                        id: 1,
                        post: 'admin'
                    },
                    {
                        id: 2,
                        post: 'coordinadora de sistemas'
                    }
                ],
                nameProject: 'Manitos a la obra',
                Semester: '2023-01',
                hours: 10
            },
            {
                id: 2,
                nameProject: 'Manitos a la obra',
                Semester: '2024-01',
                hours: 18
            }
        ]
    }
]

export default admin;