=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.5
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for NucleusApi::PermissionVO
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'PermissionVO' do
  before do
    # run before each test
    @instance = NucleusApi::PermissionVO.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of PermissionVO' do
    it 'should create an instance of PermissionVO' do
      expect(@instance).to be_instance_of(NucleusApi::PermissionVO)
    end
  end
  describe 'test attribute "client_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "permission_type"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('String', ["INQUIRY_ACCESS", "LIMITED_AUTHORITY", "FULL_AUTHORITY", "POWER_OF_ATTORNEY"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.permission_type = value }.not_to raise_error
      # end
    end
  end

end
