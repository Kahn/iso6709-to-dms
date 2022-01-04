import { iso2dec } from '../iso2dec.js'
import chai from 'chai'

var expect = chai.expect;

it('Should convert ISO 6709 latitude and longitude in degrees to decimal degrees', function(){
    var values = iso2dec('+12.345-098.765')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.345)
    expect(values.longitude).to.equal(-98.765)
})

it('Should convert ISO 6709 latitude and longitude in degrees and minutes to decimal degrees', function(){
    var values = iso2dec('+1234.56-09854.321')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.576)
    expect(values.longitude).to.equal(-98.90535)
})

it('Should convert ISO 6709 latitude and longitude in degrees, minutes, and seconds to decimal degrees', function(){
    var values = iso2dec('+123456.7-0985432.1')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.582416666666667)
    expect(values.longitude).to.equal(-98.90891666666667)
})

it('Should convert ISO 6709 latitude and longitude in degrees and altitude to decimal degrees and altitude', function(){
    var values = iso2dec('+12.345-098.765+15.9')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.345)
    expect(values.longitude).to.equal(-98.765)
    expect(values.altitude).to.equal('+15.9')
})

it('Should convert ISO 6709 latitude and longitude in degrees, minutes, and altitude to decimal degrees and altitude', function(){
    var values = iso2dec('+1234.56-09854.321+15.9')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.576)
    expect(values.longitude).to.equal(-98.90535)
    expect(values.altitude).to.equal('+15.9')
})

it('Should convert ISO 6709 latitude and longitude in degrees, minutes, seconds, and altitude to decimal degrees and altitude', function(){
    var values = iso2dec('+123456.7-0985432.1+15.9')
    expect(values).to.be.an('object')
    expect(values.latitude).to.equal(12.582416666666667)
    expect(values.longitude).to.equal(-98.90891666666667)
    expect(values.altitude).to.equal('+15.9')
})
