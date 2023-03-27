from flask_restful import Api, Resource, reqparse, abort
from flask import Flask, Request
from flask_sqlalchemy import SQLAlchemy


class HelloApiHandler(Resource):
    def get(self):
        return {
            'resultStatus': 'SUCCESS',
            'message': "Hello Api Handler",
        }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()

        print(args)
        # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

        request_type = args['type']
        request_json = args['message']
        # ret_status, ret_msg = ReturnData(request_type, request_json)
        # currently just returning the req straight
        ret_status = request_type
        ret_msg = request_json

        if ret_msg:
            message = "Your Message Requested: {}".format(ret_msg)
        else:
            message = "No Msg"

        final_ret = {"status": "Success", "message": message}

        return final_ret


names_parser = reqparse.RequestParser()
names_parser.add_argument("name", type=str, help="Name of the person")
names_parser.add_argument("followers", type=int, help="Number of followers")
names_parser.add_argument("likes", type=int, help="likes of the profile")
names = {}


class Names(Resource):

    def get(self, name_id):
        if name_id not in names:
            abort(404, message="Name id is not valid")
        return names[name_id]

    def put(self, name_id):
        argsNames = names_parser.parse_args()
        names[name_id] = argsNames
        return names[name_id], 201

    def delete(self, name_id):
        del names[name_id]
        return '', 204
