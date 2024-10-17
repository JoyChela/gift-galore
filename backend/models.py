from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from sqlalchemy import MetaData

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)

class Occasion(db.Model, SerializerMixin):
    __tablename__ = 'occasions'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    gifts = db.relationship('Gift', back_populates='occasion')

    serialize_rules = ('-gifts',)

    def __repr__(self):
        return f'<Occasion {self.name}>'

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    gifts = db.relationship('Gift', back_populates='user', cascade='all, delete-orphan')
    orders = db.relationship('Order', back_populates='user')

    serialize_rules = ('-password', '-gifts', '-orders')  

    def __repr__(self):
        return f'<User {self.username}>'


class Gift(db.Model, SerializerMixin):
    __tablename__ = 'gifts'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Integer, nullable=False)
    occasion_id = db.Column(db.Integer, db.ForeignKey('occasions.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image = db.Column(db.String)

    user = db.relationship('User', back_populates='gifts')
    occasion = db.relationship('Occasion', back_populates='gifts')
    orders = db.relationship('Order', back_populates='gift')

    serialize_rules = ()

    def __repr__(self):
        return f'<Gift {self.name}>'

    def to_serializable_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image": self.image
        }

    
    
class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    gift_id = db.Column(db.Integer, db.ForeignKey('gifts.id'), nullable=True)
    price = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='orders')
    gift = db.relationship('Gift', back_populates='orders')

    serialize_rules = ()

    def __repr__(self):
        return f'<Order {self.name}>'

    def to_serializable_dict(self):
        return {
            "name": self.name,
            "quantity": self.quantity,
            "user_id": self.user_id,
            "gift_id": self.gift_id,
            "price": self.price
        }