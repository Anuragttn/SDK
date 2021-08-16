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

# Unit tests for IntegrationApi::AchBusinessRequestCO
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'AchBusinessRequestCO' do
  before do
    # run before each test
    @instance = IntegrationApi::AchBusinessRequestCO.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AchBusinessRequestCO' do
    it 'should create an instance of AchBusinessRequestCO' do
      expect(@instance).to be_instance_of(IntegrationApi::AchBusinessRequestCO)
    end
  end
  describe 'test attribute "kyc_required"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "nucleus_business_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "vendor_request"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
