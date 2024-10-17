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
        gift1 = Gift(name='Birthday Cake', description='A delicious birthday cake', price=20, occasion=birthday, user=user1, image='https://example.com/birthday_cake.jpg')
        gift2 = Gift(name='Watch', description='A luxury watch', price=200, occasion=anniversary, user=user2, image='https://example.com/watch.jpg')
        gift3 = Gift(name='Flowers', description='Bouquet of fresh flowers', price=50, occasion=graduation, user=user1, image='https://example.com/flowers.jpg')

        db.session.add_all([gift1, gift2, gift3])

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
