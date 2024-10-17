from flask_restful import Resource, reqparse
from models import Order, db  # Ensure that the Order model and db are imported
from flask import request

order_parser = reqparse.RequestParser()
order_parser.add_argument('name', type=str, required=True, help='Order name is required')
order_parser.add_argument('quantity', type=int, required=True, help='Quantity is required')
order_parser.add_argument('user_id', type=int, help='User ID for the order')
order_parser.add_argument('gift_id', type=int, help='Gift ID for the order')
order_parser.add_argument('price', type=int, required=True, help='Price is required')

class OrderResource(Resource):
    
    def get(self, id=None):
        if id:
            order = Order.query.get(id)
            if order:
                return order.to_serializable_dict(), 200
            else:
                return {'error': 'Order not found'}, 404
        else:
            orders = Order.query.all()
            return [order.to_serializable_dict() for order in orders], 200
        
    def post(self):
        args = order_parser.parse_args()
        new_order = Order(
            name=args['name'],
            quantity=args['quantity'],
            user_id=args.get('user_id'),  # Optional
            gift_id=args.get('gift_id'),  # Optional
            price=args['price']
        )

        try:
            db.session.add(new_order)
            db.session.commit()
            return new_order.to_serializable_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400
    def put(self, id):
        order = Order.query.get(id)
        if not order:
            return {'error': 'Order not found'}, 404
        
        args = order_parser.parse_args()
        order.name = args['name']
        order.quantity = args['quantity']
        order.user_id = args.get('user_id')
        order.gift_id = args.get('gift_id')
        order.price = args['price']

        try:
            db.session.commit()
            return order.to_serializable_dict(), 200
        except Exception as e:
            db.session.rollback()
            return {'error': str(e)}, 400

    def delete(self, id):
        order = Order.query.get(id)
        if order:
            db.session.delete(order)
            db.session.commit()
            return {'message': 'Order deleted'}, 204
        else:
            return {'error': 'Order not found'}, 404   