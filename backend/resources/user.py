from flask_restful import Resource, reqparse
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

from models import User, db


class UserResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username', required=True, help='Username is required')
    parser.add_argument('email', required=True, help="Email is required")
    parser.add_argument('password', required=True, help="Password is required")

    # create user method
    def post(self):
        data = self.parser.parse_args()
        print(data)

        # 1. Verify email is unique
        email = User.query.filter_by(email=data['email']).first()

        if email:
            return {
                "message": "Email already taken"
            }, 422

        # 2. Encrypt our password
        hash = generate_password_hash(data['password']).decode('utf-8')

        # 3. Save the user to the db
        user = User(username=data['username'], email=data['email'], password=hash)

        db.session.add(user)

        db.session.commit()

        # 4. generate jwt and send it to react
        access_token = create_access_token(identity=user.id)

        return {
            "message": "User  created successfully",
            "user": user.to_dict(),
            "access_token": access_token
        }

    def delete(self, id):
        user = User.query.get(id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {'message': 'User  deleted'}, 204
        else:
            return {'error': 'User  not found'}, 404


class LoginResource(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username', required=True, help="Username is required")
    parser.add_argument('password', required=True, help="Password is required")

    def post(self):
        data = self.parser.parse_args()

        # 1. retrieve the user using the unique field
        user = User.query.filter_by(username=data['username']).first()

        if user is None:
            return {
                "message": "Invalid username/password"
            }, 401

        # if password matches, everything is ok
        if check_password_hash(user.password, data['password']):
            # generate jwt
            access_token = create_access_token(identity=user.id)

            return {
                "message": "Login successful",
                "user": user.to_dict(),
                "access_token": access_token
            }
        else:
            return {
                "message": "Invalid username/password"
            }, 401