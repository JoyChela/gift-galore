# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Api, Resource
from flask_jwt_extended import JWTManager
from models import Gift, Occasion, Order, User, db
from resources.user import UserResource, LoginResource
from resources.occasion import OccasionResource
from resources.gift import GiftResource
from resources.order import OrderResource


# Initialize Flask application
app = Flask(__name__)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:VKLxeBn4FxjcVgTzioDpdnBHt7pqe0BB@dpg-cs8f455svqrc73bq18pg-a.oregon-postgres.render.com/giftgalore'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
"""  """
# Enable CORS for all routes
CORS(app)
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this to a secure secret key
jwt = JWTManager(app)

# Initialize the database
# db = SQLAlchemy(app)  # This line already initializes the `db` instance
db.init_app(app)

# Initialize migration
migrate = Migrate(app, db)

# Initialize the API
api = Api(app)

# Remove the extra db.init_app(app) because db is already initialized

@app.route('/')
def home():
    return "Welcome to Gift Galore!"


api.add_resource(UserResource, '/users', '/users/<int:id>')
api.add_resource(LoginResource, '/login')
api.add_resource(OccasionResource, '/occasions', '/occasions/<int:id>')
api.add_resource(GiftResource, '/gifts', '/gifts/<int:id>')
api.add_resource(OrderResource, '/orders', '/orders/<int:id>') 

if __name__ == '__main__':
    app.run(port=5555, debug=True)