=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.0.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for AtomApi::BulkOrderClientPayload
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'BulkOrderClientPayload' do
  before do
    # run before each test
    @instance = AtomApi::BulkOrderClientPayload.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of BulkOrderClientPayload' do
    it 'should create an instance of BulkOrderClientPayload' do
      expect(@instance).to be_instance_of(AtomApi::BulkOrderClientPayload)
    end
  end
  describe 'test attribute "date"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "buy_transaction_code_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "sell_transaction_code_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "metadata"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
