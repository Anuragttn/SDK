=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.2.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.18

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for IntegrationApi::CardUnloadRequestCO
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'CardUnloadRequestCO' do
  before do
    # run before each test
    @instance = IntegrationApi::CardUnloadRequestCO.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of CardUnloadRequestCO' do
    it 'should create an instance of CardUnloadRequestCO' do
      expect(@instance).to be_instance_of(IntegrationApi::CardUnloadRequestCO)
    end
  end
  describe 'test attribute "nucleus_funding_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "reason"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
