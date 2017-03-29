import superTest from 'supertest'
import chai from 'chai'
import app from '../../app'

global.app = app
global.request = superTest(app)
global.expect = chai.expect
