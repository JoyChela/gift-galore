from flask_restful import Resource, reqparse
from models import Gift, db  
from flask import request


class GiftResource(Resource):
    
    def get(self, id=None):
        if id:
            gift = Gift.query.get(id)
            if gift:
                return gift.to_serializable_dict(), 200
            else:
                return {'error': 'Gift not found'}, 404
        else:
            gifts = Gift.query.all()
            return [gift.to_serializable_dict() for gift in gifts], 200