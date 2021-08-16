=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.3.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.21

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for IntegrationApi::IavTokenExchangeVendorResponseVO
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'IavTokenExchangeVendorResponseVO' do
  before do
    # run before each test
    @instance = IntegrationApi::IavTokenExchangeVendorResponseVO.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of IavTokenExchangeVendorResponseVO' do
    it 'should create an instance of IavTokenExchangeVendorResponseVO' do
      expect(@instance).to be_instance_of(IntegrationApi::IavTokenExchangeVendorResponseVO)
    end
  end
end
