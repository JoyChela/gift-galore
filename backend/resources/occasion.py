from flask_restful import Resource, reqparse
from models import Occasion, db  # Ensure that the Occasion model and db are imported
from flask import request


class OccasionResource(Resource):
    
    def get(self, id=None):
        if id:
            occasion = Occasion.query.get(id)
            if occasion:
                return occasion.to_dict(), 200
            else:
                return {'error': 'Occasion not found'}, 404
        else:
            occasions = Occasion.query.all()
            return [occasion.to_dict() for occasion in occasions], 200