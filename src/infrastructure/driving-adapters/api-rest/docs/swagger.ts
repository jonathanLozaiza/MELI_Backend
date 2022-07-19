import swaggerJSDoc, {
  OAS3Definition,
  OAS3Options
} from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ]
  // components: {
  //   securitySchemes: {
  //     bearerAuth:{
  //       type: "http",
  //       scheme: "bearer",
  //     },
  //   },
  //   schemas: {
  //     Items: {
  //       type: 'object',
  //       properties: {
  //         author: {
  //           type: 'object',
  //           properties: {
  //             name: 'string',
  //             lastname: 'string'
  //           }
  //         },
  //         categories: {
  //           type: 'array',
  //           items: {
  //             type: 'string'
  //           }
  //         },
  //         items: {
  //           type: 'array',
  //           items: {
  //             type: 'object',
  //             properties: {
  //               id: {
  //                 type: 'string'
  //               },
  //               title: {
  //                 type: 'string'
  //               },
  //               price: {
  //                 type: 'object',
  //                 properties: {
  //                   currency: {
  //                     type: 'string'
  //                   },
  //                   amount: {
  //                     type: 'integer'
  //                   },
  //                   decimal: {
  //                     type: 'integer'
  //                   }
  //                 }
  //               },
  //               picture: {
  //                 type: 'string'
  //               },
  //               condition: {
  //                 type: 'string'
  //               },
  //               free_shipping: {
  //                 type: 'boolean'
  //               },
  //               state_name: {
  //                 type: 'string'
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/infrastructure/driving-adapters/api-rest/routes/items.routes.ts']
}

export default swaggerJSDoc(swaggerOptions)
