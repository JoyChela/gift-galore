from app import app, db
from models import User, Gift, Occasion, Order

def seed_data():
    with app.app_context():
        # Drop all existing tables
        db.drop_all()

        # Recreate all tables
        db.create_all()

        # Create occasions
        birthday = Occasion(name='Birthday')
        anniversary = Occasion(name='Anniversary')
        graduation = Occasion(name='Graduation')

        db.session.add_all([birthday, anniversary, graduation])

        # Create users
        user1 = User(username='John Doe', email='john@example.com', password='password123')
        user2 = User(username='Jane Smith', email='jane@example.com', password='password456')

        db.session.add_all([user1, user2])

        # Create gifts
        gift1 = Gift(name='Birthday Cake', description='A delicious birthday cake', price=20, occasion=birthday, user=user1, image='https://i.pinimg.com/control/1200x/40/ad/7f/40ad7fe003fefa4d45daa27d5e95c5a4.jpg')
        gift2 = Gift(name='Watch', description='A luxury watch', price=200, occasion=anniversary, user=user2, image='https://i.pinimg.com/1200x/22/aa/41/22aa415fad28d348a9f35bbb40f9742d.jpg')
        gift3 = Gift(name='Flowers', description='Bouquet of fresh flowers', price=50, occasion=graduation, user=user1, image='https://i.pinimg.com/enabled_lo/564x/d9/f2/ed/d9f2ed14493755f0edeff18c7d9b5092.jpg')
        gift4 = Gift(name='Book', description='A book on programming', price=30, occasion=birthday, user=user2, image='https://i.pinimg.com/1200x/22/aa/41/22aa415fad28d348a9f35bbb40f9742d.jpg')
        gift5 = Gift(name='Guitar', description='A guitar for beginners', price=100, occasion=anniversary, user=user1, image='https://i.pinimg.com/1200x/22/aa/41/22aa415fad28d348a9f35bbb40f9742d.jpg')
        gift6 = Gift(name='Shoes', description='A pair of stylish shoes', price=80, occasion=graduation, user=user2, image='https://i.pinimg.com/1200x/22/aa/41/22aa415fad28d348a9f35bbb40f9742d.jpg')

        db.session.add_all([gift1, gift2, gift3, gift4, gift5, gift6])

        # Create orders
        order1 = Order(name='Order 1', quantity=2, price=40, user=user1, gift=gift1)
        order2 = Order(name='Order 2', quantity=1, price=200, user=user2, gift=gift2)
        order3 = Order(name='Order 3', quantity=5, price=250, user=user1, gift=gift3)

        db.session.add_all([order1, order2, order3])

        # Commit all changes to the database
        db.session.commit()

        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_data()