from datetime import date, datetime
import os
from flask_sqlalchemy import SQLAlchemy
# from api.HelloApiHandler import HelloApiHandler, Names
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask import Flask, send_from_directory, Request, render_template, url_for, redirect, request
from sqlalchemy.sql import func, text
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
import json
# create instance of the flask class
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
dbEngine = create_engine("sqlite:///database.db", echo=True)


class UsersModel(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    # server_default=func.now(),
    dob = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(80), nullable=False)

    def __init__(self, firstName, lastName, dob, age, email):
        self.firstName = firstName
        self.lastName = lastName
        self.dob = dob
        self.age = age
        self.email = email

    def serialize(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "dob": self.dob,
            "age": self.age,
            "email": self.email
        }

    def __repr__(self):
        return f'<User {self.firstName} {self.lastName} {self.dob} {self.age} {self.email}>'


user1 = UsersModel(firstName="Shifa", lastName="Sadaat", dob="2022-12-25",
                   age=19, email="Shifa@example.com")
user2 = UsersModel(firstName="John", lastName="Doe", dob="2022-12-25",
                   age=19, email="johndoe@example.com")
# with Session(dbEngine) as session:
with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()


@app.route("/users")
def returnAll():
    results = UsersModel.query.all()
    results = list(map(lambda x: x.serialize(), results))
    return results


@app.route("/register/<firstName1>/<lastName1>/<dob1>/<age1>/<email1>", methods=["POST"])
def register(self, firstName1, lastName1, dob1, age1, email1):
    # if request.method == "POST":
    #     firstName = request.json["firstName"]
    #     lastName = request.json["lastName"]
    #     dob = request.json["dob"]
    #     age = request.json["age"]
    #     email = request.json["email"]
    newUser = UsersModel(
        firstName=str(firstName1), lastName=str(lastName1), dob=str(dob1), age=int(age1), email=str(email1))

    db.session.add(newUser)
    db.session.commit()


if __name__ == "__main__":

    app.run(debug=True)

    # for result in results:
    #     final_results += {result.id, result.firstName,
    #                       result.lastName, result.dob, result.age, result.email}
    # return final_results
    # return results
    # for result in results:
    #     result_object = {
    #         "id": result.id,
    #         "firstName": result.firstName,
    #         "lastName": result.lastName,
    #         "dob": result.dob,
    #         "age": result.age,
    #         "email": result.email
    #     }
    #     final_results += result_object
    # return final_results

    # resource_fields = {
    #     'id': fields.Integer,
    #     "firstName": fields.String,
    #     'lastName': fields.String,
    #     "dob": fields.String,
    #     "age": fields.Integer,
    #     "email": fields.String
    # }

    # class Users(Resource):
    #     @marshal_with(resource_fields)
    #     def get(self, userId):
    #         result = UsersModel.query.filter_by(id=userId).first()
    #         if not result:
    #             abort(404, message="Could not find video with that id")
    #         return result

    #     @marshal_with(resource_fields)
    #     def put(self, userId):
    #         args = users_put_args.parse_args()
    #         newUser = UsersModel(id=userId, firstName=args["firstName"], lastName=args["lastName"],
    #                              dob=args["dob"], age=args["age"], email=args["email"])
    #         db.session.add(newUser)
    #         db.session.commit()
    #         return newUser, 201

    # api.add_resource(HelloApiHandler, '/flask/hello/')


# resource_fields = {
#     'id': fields.Integer,
#     "firstName": fields.String,
#     'lastName': fields.String,
#     "dob": fields.String,
#     "age": fields.Integer,
#     "email": fields.String
# }

# users_put_args = reqparse.RequestParser()
# users_put_args.add_argument("firstName", type=str,
#                             required=True, help="Enter your first name")
# users_put_args.add_argument(
#     "lastName", type=str, help="Enter your last name", required=True)
# users_put_args.add_argument(
#     "dob", type=str, help="Enter your DOB", required=True)
# users_put_args.add_argument(
#     "age", type=int, help="Enter your age", required=True)
# users_put_args.add_argument(
#     "email", type=str, help="Enter email", required=True)
# @marshal_with(resource_fields)
