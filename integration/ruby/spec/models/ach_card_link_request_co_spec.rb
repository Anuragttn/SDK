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

# Unit tests for IntegrationApi::AchCardLinkRequestCO
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'AchCardLinkRequestCO' do
  before do
    # run before each test
    @instance = IntegrationApi::AchCardLinkRequestCO.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AchCardLinkRequestCO' do
    it 'should create an instance of AchCardLinkRequestCO' do
      expect(@instance).to be_instance_of(IntegrationApi::AchCardLinkRequestCO)
    end
  end
  describe 'test attribute "nucleus_client_id"' do
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
