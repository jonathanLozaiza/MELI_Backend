import { Router } from 'express'

import {
  getItemsByQueryController,
  getByIdController
} from '../controllers/index'

const route = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Items:
 *      type: object
 *      properties:
 *        author:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            lastname:
 *              type: string
 *        categories:
 *          type: array
 *          items:
 *            type: string
 *        items:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              title:
 *                type: string
 *              price:
 *                type: object
 *                properties:
 *                  currency:
 *                    type: string
 *                  amount:
 *                    type: integer
 *                  decimal:
 *                    type: integer
 *              picture:
 *                type: string
 *              condition:
 *                type: string
 *              free_shipping:
 *                type: boolean
 *              state_name:
 *                type: string
 */

/**
 * Get track
 * @swagger
 * /api/items:
 *  get:
 *    summary: Retrieves all items related to a search term.
 *    tags: [Items]
 *    parameters:
 *      - in: query
 *        name: q
 *        type: string
 *        description: variable to filter the search data
 *        required: true
 *    responses:
 *      200:
 *        description:  get all items
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Items'
 *      400:
 *        description: items not found
 */
route.get('', getItemsByQueryController)

/**
 * @swagger
 * components:
 *  schemas:
 *    Item:
 *      type: object
 *      properties:
 *        author:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            lastname:
 *              type: string
 *        item:
 *          type: object
 *          properties:
 *              id:
 *                type: string
 *              title:
 *                type: string
 *              price:
 *                type: object
 *                properties:
 *                  currency:
 *                    type: string
 *                  amount:
 *                    type: integer
 *                  decimal:
 *                    type: integer
 *              picture:
 *                type: string
 *              condition:
 *                type: string
 *              free_shipping:
 *                type: boolean
 *              sold_quantity:
 *                type: integer
 *              description:
 *                type: string
 *              path_from_root:
 *                type: array
 *                items:
 *                  type: string
 */

/**
 * Get track
 * @swagger
 * /api/items/{id}:
 *  get:
 *    summary: Retrieves an item by its ID
 *    tags: [Item]
 *    parameters:
 *      - in: path
 *        name: id
 *        type: string
 *        description: item id
 *        required: true
 *    responses:
 *      200:
 *        description:  get item
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Item'
 *      400:
 *        description: item not found
 */
route.get('/:id', getByIdController)

export default route
